import {
    // createAction,
    // createReducer,
    configureStore,
    createSlice
} from "@reduxjs/toolkit";


// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE")

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [{ text: action.payload, id: Date.now(), ...state }];
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// };

// 아래와 같이 코드 변경 .redux-toolkit.immer?
// const reducer = createReducer([], {
//     //createReducer : switch , case 를 사용할 필요 없게 해준다
//     //state 를 mutate 할 수 있게 해준다.
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() })
//         // 새로운 toDo 를 push
//     },
//     [deleteToDo]: (state, action) => {
//         state.filter(toDo => toDo.id !== action.payload)
//         // filter : 새로운 array를 return
//     }
// })

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    // 중복 방지 하기 위해 add, remove 로 변경
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
});

// const store = configureStore({ reducer: toDos.reducer });

export const {
    add,
    remove
} = toDos.actions;
;



export default configureStore({ reducer: toDos.reducer });
