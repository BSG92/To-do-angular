import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

type TaskArrayType = {
  taskName: string,
  isCompleted: boolean
}[];

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  taskArray: TaskArrayType = [
    {taskName: "First Entry", isCompleted: true},
  ];
  
  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,
    });
    form.reset();
  }
  OnDelete(index: number) {
    this.taskArray.splice(index, 1);
  }
  onCheck(index: number) {
    !this.taskArray[index].isCompleted;
  }
}
