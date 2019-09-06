import { createStore } from "redux"

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

const initalState = 0

const counter = (state, action) => {
  if (typeof state === "undefined") return initalState
  return {
    INCREMENT: state + 1,
    DECREMENT: state - 1
  }[action.type]
}

const store = createStore(counter)

console.log(store.getState())

store.dispatch({ type: INCREMENT })

console.log(store.getState())
