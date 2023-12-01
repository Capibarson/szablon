import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @ViewChild('todo') todo?: ElementRef;

  list: { name: string; date: String }[] = [];
  addToList(): void {
    console.log('test');
    let nazwa = this.todo?.nativeElement.value;
    this.list.push({ name: nazwa, date: new Date().toLocaleString() });
  }
}
