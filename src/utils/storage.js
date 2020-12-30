import { AsyncStorage } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage'
import {getBase64} from '@/utils/MyUtils';

const prefix = '@AppName:';

const storageKeys = {
  token: `${prefix}token`,
};

const db = openDatabase('data.db');

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql(
          'create table if not exists bookmarked (id string primary key not null);',
        );
        tx.executeSql(
          'create table if not exists history (id string primary key not null, date string not null, title string not null, image string not null, hasVideo integer not null, hasAudio integer not null);',
        );

      },
      (_, error) => { console.log("db error creating tables"); console.log(error); reject(error) },
      (_, success) => { console.log('creating tables success'); resolve(success)}
    )
  })
}

const deleteTablesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        // 'drop table bookmarked',
        'drop table history',
        [],
        (_, result) => { console.log("success dropping table"); resolve(result) },
        (_, error) => { console.log("error dropping table"); reject(error)
        }
      )
    })
  })
}

const insertBookmark = (id) => {
  db.transaction( tx => {
      // tx.executeSql('INSERT INTO bookmarked (id, type) VALUES (' + id + ',' + type + ')' );
      tx.executeSql('INSERT INTO bookmarked (id) VALUES (' + id +  ')' );
    },
    (t, error) => { console.log("db error insertBookmark"); console.log(t);},
    (_, success) => { console.log('insertBookmark success');}
  )
}

const removeBookmark = (id) => {
  db.transaction( tx => {
      tx.executeSql('DELETE from bookmarked WHERE id =' + id );
    },
    (t, error) => { console.log("db error removeBookmark"); console.log(t);},
    (_, success) => { console.log('removeBookmark success');}
  )
}

const checkBookmarked = async (id) => {
  return new Promise((resolve, reject) => {
    let check = false;
    db.transaction(
      tx => {
        tx.executeSql(
          // 'SELECT * FROM messages where conv_id = ? ORDER BY datetime(createdAt) DESC limit '+limit+' , '+5, [conv_id],
          // 'SELECT * FROM messages where conv_id = ? ORDER BY _id DESC', [conv_id],
          // 'SELECT * FROM bookmarked where type = ?', [type],
          'SELECT * FROM bookmarked where id = ?', [id],
          (tx, results) => {
            for (let i = 0; i < results.rows.length; i++) {
              if(results.rows.item(i).id==id) check = true;
            } 
          }  
        );
      },
      (t, error) => { console.log("db error checkBookmarked"); console.log(error);reject(error) },
      (_t, success) => { console.log("checkBookmarked success"); resolve(check)}
    )
  })
}

const getAllBookmarked = async () => {
  return new Promise((resolve, reject) => {
    let bookmarked = [];
    db.transaction(
      tx => {
        tx.executeSql(
          'SELECT * FROM bookmarked', [],
          (tx, results) => {
            for (let i = 0; i < results.rows.length; i++) {
              bookmarked.push(results.rows.item(i));
            } 
          }   
        );
      },
      (t, error) => { console.log("db error getBookmarked"); console.log(error);reject(error) },
      (_t, success) => { console.log("getBookmarked success"); resolve(bookmarked)}
    )
  })
}

const saveHistory = (item) => {
  db.transaction( 
    tx => {
      tx.executeSql(
        'SELECT * FROM history where id = ?', [item.id],
        (tx, results) => {
          if(results.rows.length>0) tx.executeSql('UPDATE history SET date = ? WHERE id = ?',[item.date,item.id]);
          else saveNewHistory(item);
        }
      );
    },
    (t, error) => { console.log("db error saveHistory"); console.log(t);},
    (_, success) => { console.log('saveHistory success');}
  )
}

const saveNewHistory = async(item) => {
  const base64 = await getBase64(item.image);
  db.transaction( 
    tx => {
      tx.executeSql('INSERT INTO history (id, date, title, image, hasVideo, hasAudio) VALUES (?,?,?,?,?,?)',[item.id,item.date,item.title,base64,item.hasVideo,item.hasAudio]);
    },
    (t, error) => { console.log("db error saveHistory"); console.log(t);},
    (_, success) => { console.log('saveHistory success');}
  )
}


const getHistory = async () => {
  return new Promise((resolve, reject) => {
    let history = [];
    db.transaction(
      tx => {
        tx.executeSql(
          'SELECT * FROM history', [],
          (tx, results) => {
            for (let i = 0; i < results.rows.length; i++) {
              history.push(results.rows.item(i));
            } 
          }   
        );
      },
      (t, error) => { console.log("db error getHistory"); console.log(error);reject(error) },
      (_t, success) => { console.log("getHistory success"); resolve(history)}
    )
  })
}



export default {
  // Token
  // setToken: async (token) => AsyncStorage.setItem(storageKeys.token, token),
  // getToken: async () => AsyncStorage.getItem(storageKeys.token),
  // removeToken: async () => AsyncStorage.removeItem(storageKeys.token),
  setupDatabaseAsync,
  deleteTablesAsync,

  insertBookmark,
  removeBookmark,
  checkBookmarked,
  getAllBookmarked,

  saveHistory,
  getHistory,
};
