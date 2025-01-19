import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterModel } from "./counter.state";

const getCounterState = createFeatureSelector<CounterModel>('counter')

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter
})

export const getName = createSelector(getCounterState, (state) => {
  return state.currentName
})
