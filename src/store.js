
import createStore from 'redux-zero'



const USERS=[
    {   
        user:"maria",
        comment:"hola"
    }
];

 const initialState = {
        users: USERS             
}

const store = createStore (initialState)
export default store