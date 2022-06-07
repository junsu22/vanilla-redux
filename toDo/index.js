
// muteState 금지!
// 새로운 state 를 create 하고 , 새로운 state 를 return 해야함
import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
    return {
        type: ADD_TODO,
        text
    };
};

const deleteToDo = id => {
    return {
        type: DELETE_TODO,
        id
    };
};



const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{ text: action.text, id: Date.now() }, ...state];   //새로운 array return
        case DELETE_TODO:
            return state.filter(toDo => toDo.id !== action.id);//조건
        // toDo.id 는 action.id 와 같으면 안된다.
        default:
            return state;
    }
};
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))

const dispatchAddToDo = text => {
    store.dispatch(addToDo(text));
};




const dispatchDeleteToDO = e => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
};


const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteToDO);
        li.id = toDo.id
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    });
};
store.subscribe(paintToDos)



const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);