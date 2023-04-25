import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }
  getEmpData(){
    return [
      {"id":1,"Name":"Nagendra","Salary":"15 LPA"},
      {"id":2,"Name":"Nagendra","Salary":"15 LPA"},
      {"id":3,"Name":"Nagendra","Salary":"15 LPA"},
      {"id":4,"Name":"Nagendra","Salary":"15 LPA"}
    ]
  }
}
