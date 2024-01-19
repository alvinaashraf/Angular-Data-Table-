import { Component ,OnInit} from '@angular/core';


interface employee_detail{
  name:string ,
  position:string,
  office:string,
  age:string,
  start_date:string,
  salary:number
}
@Component({
  selector: 'app-data-table-component',
  templateUrl: './data-table-component.component.html',
  styleUrl: './data-table-component.component.css'
})
export class DataTableComponentComponent {

employee:Array<employee_detail>= [
  {name:'name 1 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
  {name:'name 2 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
  {name:'name 3 ',position:'posiiton sss ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
  {name:'name 4 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 5 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
        {name:'name 6 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 7 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 8 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 9 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 10 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 11 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 12 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 13',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'ali ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'ahmed  ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 14 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 15 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 16 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 17 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 18 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 19 ',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 20',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 21',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 21',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},
    {name:'name 22',position:'posiiton one ', office:'office 1',age:'22',start_date:'date 1 ',salary:500},


];

currentPage:number=1;
pageSize:number=6;
filteredemp:Array<employee_detail>=this.employee;


ngOnInit(){
  this.visibleData();
  this.pageNumber();
}
visibleData(){
  let startIndex=(this.currentPage-1)*this.pageSize;
  //console.log(startIndex);
let endIndex=startIndex+ this.pageSize;
 return this.filteredemp.slice(startIndex,endIndex);
  //console.log(this.employee.slice(0,6))



}

//next page logic 

nextPage(){
 this.currentPage = this.currentPage+1;
 //console.log(this.currentPage);
this.visibleData()
}

//previous page logic 
previousPage(){
this.currentPage=this.currentPage-1;
this.visibleData();

}



pageNumber(){
 let totalPages = Math.ceil(this.employee.length / this.pageSize);
  let pgArray = new Array(totalPages);

  // Use Array.from to create an array of page numbers
  return Array.from({ length: totalPages }, (_, index) => index + 1);
}

changePage(pageNumber:number){
this.currentPage=pageNumber;
this.visibleData();
}



//serch 
search(searchTerm: string) {
  this.filteredemp = this.employee.filter((item) => {
    return Object.values(item).some((val) => {
       val.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  this.visibleData();
}



}
