import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux';
import store from '@/store';
import storage from '@/utils/storage';
import Routes from '@/routes';

console.disableYellowBox = true;

export default function App() {

  useEffect(() => {
    // storage.deleteTablesAsync();
    storage.setupDatabaseAsync();
    getBookmarked();
  }, []);

  const getBookmarked = async() => {
    let bookmarked = await storage.getAllBookmarked();
    store.dispatch({type:'INIT_BOOKMARKS',bookmarks:bookmarked});
  }

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
