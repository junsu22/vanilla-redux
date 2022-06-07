// import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus")
// const number = document.querySelector("span")


// const countModifier = (count = 0) => {
//   // countModifier 만 유일하게 data를 modify 할 수 있다.(유일하게 데이터를 바꿀수 있는곳 )
//   return count;  //<---data
// };
// // data를 저장하는 store 라는 공간.
// // store를 만들면 reducer를 만들어 달라고 하는것.
// // redux 는 함수이다.(data를 modify하는 함수)
// const countStore = createStore(countModifier);

// console.log(countStore.getState())

// -------------아래와 같이 수정----------------------------

// Redux는 data를 관리하는데 도움을 주는 역할을 위해 만들어지다.
// 데이터를 넣어 주어야 하고, store 에 저장이 되어야 한다.

// import { createStore } from "redux";
// // redux 에서 create store 를 import
// // store 는 data 를 넣는곳 이다 .(State)
// // State 는 application 에서 바뀌는 data를 뜻함.

// const add = document.getElementById("add");
// const minus = document.getElementById("minus")
// const number = document.querySelector("span")


// // reducer function
// const reducer = () => { }
// // store
// const store = createStore(reducer)


// let count = 0;
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// }
// // html 에게 count 를 업데이트 하라고 알려주는 것.
// // plus, minus 가 정상 작동하지 않아 함수를 추가


// // 함수들은 count 를 modify(수정) 하기 위함이다.
// const handleAdd = () => {
//   count = count + 1;
//   // 선언한 update 함수 호출
//   updateText()
// }

// const handleMinus = () => {
//   count = count - 1;
//   updateText()
// }



// add.addEventListener("click", handleAdd)
// minus.addEventListener("click", handleMinus)


// -------------아래와 같이 수정----------------------------


// import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus")
// const number = document.querySelector("span")

// const countModifier = (count = 0, action) => {
//   if (action.type === "ADD") {
//     return count + 1;
//   } else if (action.type === Minus) {
//     return count - 1;
//   } else {
//     return count;
//   }
// }

// const countStore = createStore(countModifier);

// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });




// add.addEventListener("click", handleAdd)
// minus.addEventListener("click", handleMinus)



// 코드수정---------------(+)button 추가 


// import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");



// // 0부터 시작
// number.innerText = 0;


// const countModifier = (count = 0, action) => {
//   if (action.type === "ADD") {
//     return count + 1;
//   } else if (action.type === "Minus") {
//     return count - 1;
//   } else {
//     return count;
//   }
// };

// const countStore = createStore(countModifier);

// const onChange = () => {
//   number.innerText = countStore.getState();
//   // console.log(countStore.getState())
//   // console.log("there was a change on the strore")
// }

// countStore.subsribe(onChange)

// // console.log(countStore)
// // subscribe: Store 안에 있는 변화를 알수있게 해준다.

// const handleAdd = () => {
//   countStore.dispatch({ type: "ADD" });
// };

// const handleMinus = () => {
//   countStore.dispatch({ type: "MINUS" });
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);


// 코드수정---------------정리


// import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");



// // 0부터 시작
// number.innerText = 0;


// const countModifier = (count = 0, action) => {
//   // action 은 countModifier 와 소통하는 방법이다.
//   // countModifier 가 return 하는것은 application 의 state 가 된다.
//   if (action.type === "ADD") {
//     return count + 1;
//   } else if (action.type === "Minus") {
//     return count - 1;
//   } else {
//     return count;
//   }
// };

// const countStore = createStore(countModifier);

// const onChange = () => {
//   number.innerText = countStore.getState();
//   // console.log(countStore.getState())
//   // console.log("there was a change on the strore")
// }

// countStore.subsribe(onChange) // 만약 change를 store에서 감지하고 싶다면, change 를 subscribe 하면 됨

// // console.log(countStore)
// // subscribe: Store 안에 있는 변화를 알수있게 해준다.

// const handleAdd = () => {
//   countStore.dispatch({ type: "ADD" });
//   // dispatch 가 reducer 를 불러서 current state , action을 더한다.
//   // action 은 반드시 object 여야 한다. String (x)
//   // action 은 무존건 type 이 있어야 한다.
//   // action 은 modifier 와 communicate 하는 방법이다.
// };

// const handleMinus = () => {
//   countStore.dispatch({ type: "MINUS" });
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);






// ----코드 개선사항
// 1. if else 를 switch 로 변경
// 2. 오타방지. string 을 keep 해주는 const 생성


import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");



// 0부터 시작
number.innerText = 0;

//2-string 을 keep 해주는 const 생성
const ADD = "ADD";
const MINUS = "MINUS"


//1- if else 를 switch 로 변경 하여 작성
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD: //"" 제거
      return count + 1
    case MINUS:
      return count - 1
    default:
      // 만일 add, minus가 없다면 count 를 return(default 가 0으로 되어있는.)
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
  // console.log(countStore.getState())
  // console.log("there was a change on the strore")
}

countStore.subsribe(onChange) // 만약 change를 store에서 감지하고 싶다면, change 를 subscribe 하면 됨

// console.log(countStore)
// subscribe: Store 안에 있는 변화를 알수있게 해준다.

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
  // dispatch 가 reducer 를 불러서 current state , action을 더한다.
  // action 은 반드시 object 여야 한다. String (x)
  // action 은 무존건 type 이 있어야 한다.
  // action 은 modifier 와 communicate 하는 방법이다.
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });// ""제거 string이면 자바스크립트가 알려주지 않는다. 
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);


