import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{HomePageValidators} from'../home-page/HomePage.validators'



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  HomePageForm: FormGroup;
  Namee: string;
  IDD: string;
  public sidebarShow: boolean = true;
  header = ["ID","Name"];
  rows = [{"ID":"1","Name":"KKK"},{"ID":"2","Name":"Ksss"}]
  constructor() { }

  ngOnInit(): void {
    this.HomePageForm = new FormGroup(
      {
        ID: new FormControl('',[Validators.required]),
        Name: new FormControl('',[Validators.required])
      })
  }

  sideer()
{
  this.sidebarShow = true;
}
AddItem()
{
  debugger
  if(this.Namee!=undefined && this.IDD!=undefined)
  {
this.rows.push(this.HomePageForm.value);
this.Namee="";
this.IDD="";
  }
}

get Name()
{
  return this.HomePageForm.get('Name');
}

}
