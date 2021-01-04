import { combineReducers } from 'redux';
// import { reducer as session } from './session';

import storage from '@/utils/storage';

const DEFAULT_ARTICLE_FONT_SIZE = 18;
const MAX_ARTICLE_FONT_SIZE = 26;
const CHANGE_ARTICLE_FONT_SIZE_STEP = 4;
const articleFontSizeReducer = ( state = DEFAULT_ARTICLE_FONT_SIZE, action ) => {
  switch( action.type ) {
      case 'CHANGE_ARTICLE_FONT_SIZE':
        if(state<MAX_ARTICLE_FONT_SIZE) return state+CHANGE_ARTICLE_FONT_SIZE_STEP;
        else return DEFAULT_ARTICLE_FONT_SIZE;
      default: return state;
  }
}

const popUpPageReducer = ( state = {on:false,mode:null}, action ) => {
  switch( action.type ) {
      case 'POP_UP_PAGE_ON':
        return {on:true,mode:action.mode,searchText:action.searchText};
      case 'POP_UP_PAGE_OFF':
        return {on:false,mode:state.mode};
      default: return state;
  }
}

const bookmarksReducer = ( state = [], action ) => {
  let state_new = state;
  switch( action.type ) {
      case 'INIT_BOOKMARKS':
        return action.bookmarks;
      case 'SET_BOOKMARK':
        if(state_new.find(bookmark => bookmark.id == action.id)) {
          state_new = state_new.filter(bookmark => bookmark.id != action.id);
          storage.removeBookmark(action.id);
        }
        else {
          state_new = state_new.concat({id:action.id});
          storage.insertBookmark(action.id);
        }
        return state_new;
      default: return state;
  }
}

// const tabWaitForRefReducer = ( state = [], action ) => {
//   switch( action.type ) {
//       case 'TAB_ADD_REF':
//         return state.concat([{current:action.ref}]);
//       default: return state;
//   }
// }

const reducers = combineReducers({
  default: () => [],
  articleFontSize: articleFontSizeReducer,
  popUpPage: popUpPageReducer,
  bookmarks: bookmarksReducer,
});

export default reducers;
