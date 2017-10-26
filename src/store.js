import createStore from 'redux-zero';

const LIST = [
   {
      id: 0,
      name:'@maria',
      comment: 'Helloo'
   },
  
];

const initialState = {
   list: LIST ,
   selectedList: -1
};

const store = createStore(initialState);
export default store;