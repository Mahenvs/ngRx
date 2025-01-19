import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { CounterModel } from '../shared/store/counter.state';
import { rename } from '../shared/store/counter.actions';
import { getCounter, getName } from '../shared/store/counter.selector';

@Component({
  selector: 'app-rename',
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './rename.component.html',
  styleUrl: './rename.component.css'
})
export class RenameComponent implements OnInit {
  curName!: string;
  // constructor(private store: Store<{ counter: { counter: number } }>) {
  constructor(private store: Store<{ counter: CounterModel }>) {

  }
  ngOnInit() {
    // Accessing through global selector
    // this.store.select('counter').subscribe(data => {
    //   console.log(data.currentName);
    //   this.curName = data.currentName
    // })

    // Accessing through specific selector
    this.store.select(getName).subscribe(name => {
      this.curName = name
    })
  }
  onRename(value: string) {
    console.log(value);
    this.store.dispatch(rename({ curName: value }))
  }

}
