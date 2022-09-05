import { legacy_createStore as createStore } from "redux";


// Action Types
const ADD_COUNT="ADD_COUNT";
const ADD_TODO="ADD_TODO";

// Action creators
const addTodo=(title)=>{
    return {
        type:ADD_TODO,
        payload:{
           title: title,
           status:false,
        },
    };
};


// how to update store
const reducer =(store,action)=>{

    switch(action.type){
    case ADD_COUNT:
        return{...store,counter:store.counter+action.payload};
    
    case ADD_TODO:
        return{...store,todos:[...store.todos,action.payload]};
    default:
    return store;
    }
};

const initState={
    counter:0,
    todos:[],
    theme:"dark"
}

const store=createStore(reducer,initState);

console.log("initial Store",store.getState());

store.dispatch({type:ADD_COUNT,payload:1});

console.log("After dispatch",store.getState());

store.dispatch({
    type:ADD_TODO,
    payload:{title:"Learn React",status:false},
});

store.dispatch(addTodo("Learn Typescript"));

store.dispatch(addTodo("Learn AWS"));

console.log("After dispatch",store.getState());