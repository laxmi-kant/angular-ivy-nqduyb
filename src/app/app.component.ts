import { Component, VERSION } from '@angular/core';
import { Name } from './name';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'LAXMIKANT ' ;
  gender:string;
  flag:boolean=false;
  searchBox:string;
  public dummyList: Array<Name>=[{
    id: 1,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female'
    }, {
    id: 2,
    first_name: 'Giavani',
    last_name: 'Frediani',
    email: 'gfrediani1@senate.gov',
    gender: 'Male'
    }, {
    id: 3,
    first_name: 'Noell',
    last_name: 'Bea',
    email: 'nbea2@imageshack.us',
    gender: 'Female'
    }, {
    id: 4,
    first_name: 'Willard',
    last_name: 'Valek',
    email: 'wvalek3@vk.com',
    gender:'Male'}]

  public dataList: Array<Name> =[{
    id: 1,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female'
    }, {
    id: 2,
    first_name: 'Giavani',
    last_name: 'Frediani',
    email: 'gfrediani1@senate.gov',
    gender: 'Male'
    }, {
    id: 3,
    first_name: 'Noell',
    last_name: 'Bea',
    email: 'nbea2@imageshack.us',
    gender: 'Female'
    }, {
    id: 4,
    first_name: 'Willard',
    last_name: 'Valek',
    email: 'wvalek3@vk.com',
    gender:'Male'}]

    sortByElement(element){
      alert(element)
      this.dataList=this.dummyList;
      this.dataList=this.dataList.filter((name)=>
      ((name.first_name)==element));
    }

     sort(gender){
       this.dataList=this.dummyList;
      this.dataList=this.dataList.filter((name)=>
      ((name.gender)==gender));
   
    }
}
