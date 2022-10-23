import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../mock';
import { student} from '../students';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  alunos = STUDENTS;
  selectedstudent? : student;
 
  
  constructor() { }

  ngOnInit(): void {
  }
onSelect(aluno: student): void{
  this.selectedstudent = aluno;
}

}
