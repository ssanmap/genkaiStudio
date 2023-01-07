import { Component, OnInit } from '@angular/core';

 export interface listExample {
  name: string,
   age?: number
  }



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public nameList:listExample[] = [
    {name: 'sebastian', age: 22},
    {name: 'jose', age: 23},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public btnSend():void{
    console.log('btnSend', this.nameList);
    alert( JSON.stringify(this.nameList))

  }
  public btnDelete(id:any){
    console.log('btnDelete', id);
    this.nameList.splice(id, 1);

  }

  public anadeOther(){
    this.nameList.push({name: ''});
  }

}
