import { Component,OnInit, EventEmitter, Input, Output } from '@angular/core';
import { EmpService } from '../emp.service';
interface Car {
  id:number;
  name:string;
  speed:number
}
@Component({
  selector: '[app-first]',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit{
  empdata:any=[];
  name="Nagendra having 4 years of Experience";
date=new Date();
constructor(private empserviece:EmpService){

}
  ngOnInit() {
    this.empdata = this.empserviece.getEmpData()
    console.log(this.empdata)
  }

amount=40;
  public choose ="";
  hello:boolean = false;
  logedIn:boolean = true;
  setVal(data :any){
   this.choose = data.target.value ;
  }
  getColor(){
    if(this.logedIn){
      return "green";
    }else{
      return "red";
    }
  }
  cars:Array<Car> =[
    {id:1,name:"bmw",speed:25},
    {id:2,name:"benz",speed:25},
    {id:3,name:"audio",speed:25},
    {id:4,name:"jaguar",speed:25},
    {id:5,name:"Nagendr",speed:25}
  ]
  names:Array<string> = ["Nagendra","Nagendra","Nagendra","Nagendra","Nagendra","Nagendra","Nagendra"]
  @Input() title:any;
  /* name:string = "Nagendra"; */
 @Output() datatoParent = new EventEmitter()
  sendDataFromChild(){
    this.datatoParent.emit(this.name)
  }
}
