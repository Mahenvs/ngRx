import { Action, createReducer, on, State } from "@ngrx/store";
import { customIncrement, decrement, increment, rename, reset } from "./counter.actions";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1
    }
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0
    }
  }),
  on(rename, (state, action) => {
    return {
      ...state,
      currentName: action.curName
    }
  })
)
export function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action)
}
