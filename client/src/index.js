import { createSlice, configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from "redux";
import { rootReduser } from "./redusers/rootReducer";

const counterSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducer: {
    rootReduser: rootReduser
  }
})
export const { incremented, decremented } = counterSlice.actions
const store = configureStore({
  reducer: counterSlice.reducer
})

store.subscribe(() => console.log(store.getState()))
store.dispatch(incremented())

console.log(store)
const baseURL = "http://127.0.0.1:5000/verbs";

const verbs = document.querySelector(".verbs");
const res = fetch(baseURL, {
  method: "GET",
});
res
  .then((resp) => resp.json())
  .then((data) => {
    const contaner = document.createElement("div");
    const list = document.createElement("ul");

    JSON.parse(data).forEach((element) => {
      const item = document.createElement("li");
      for (const key in element)
        item.innerHTML = `En: = ${key} Ru:${element[key]}`;
      list.appendChild(item);
    });
    contaner.appendChild(list);
    verbs.appendChild(contaner);
  })
  .catch((er) => console.log(er));
