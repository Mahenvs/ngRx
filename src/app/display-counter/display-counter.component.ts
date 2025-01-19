import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement, decrement, increment, reset } from '../shared/store/counter.actions';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from "@angular/material/button"
import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-display-counter',
  imports: [CommonModule, MatSlideToggleModule, FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './display-counter.component.html',
  styleUrl: './display-counter.component.css'
})
export class DisplayCounterComponent implements OnInit {

  onCustomInc(val: string) {
    console.log(val);
    this.store.dispatch(customIncrement({ value: Number(val) }))
  }
  counterVal!: number;
  counter = 0
  constructor(private store: Store<{ counter: { counter: number } }>) {
    this.store.select('counter').subscribe((data) => {
      this.counterVal = data.counter
    })
  }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      console.log(data);
    })
  }
  onIncrement() {
    console.log("Increment ");
    this.store.dispatch(increment())
  }
  onDecrement() {
    this.store.dispatch(decrement())
  }
  onReset() {
    this.store.dispatch(reset())
  }
}
