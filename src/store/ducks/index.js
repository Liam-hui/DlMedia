import { combineReducers } from 'redux';

// import { reducer as session } from './session';

const MIN_ARTICLE_FONT_SIZE = 10;
const MAX_ARTICLE_FONT_SIZE = 23;
const DEFAULT_ARTICLE_FONT_SIZE = 18;
const CHANGE_ARTICLE_FONT_SIZE_STEP = 1;

const articleFontSizeReducer = ( state = DEFAULT_ARTICLE_FONT_SIZE, action ) => {
  switch( action.type ) {
      case 'INCREASE_ARTICLE_FONT_SIZE':
        if(state<MAX_ARTICLE_FONT_SIZE) return state+CHANGE_ARTICLE_FONT_SIZE_STEP;
        else return MAX_ARTICLE_FONT_SIZE;
      case 'DECREASE_ARTICLE_FONT_SIZE':
        if(state<MIN_ARTICLE_FONT_SIZE) return state-CHANGE_ARTICLE_FONT_SIZE_STEP;
        else return MIN_ARTICLE_FONT_SIZE;
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


const tabWaitForRefReducer = ( state = [], action ) => {
  switch( action.type ) {
      case 'TAB_ADD_REF':
        return state.concat([{current:action.ref}]);
      default: return state;
  }
}

const reducers = combineReducers({
  default: () => [],
  articleFontSize: articleFontSizeReducer,
  tabWaitForRef:tabWaitForRefReducer,
  popUpPage: popUpPageReducer,
});

export default reducers;
