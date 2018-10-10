import { Component, OnInit } from '@angular/core';
import {Patient} from '../patient';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  btnClicking():void {
    console.log("redirected")
    this._router.navigate(['/op'])
    };

    btnClick():void {
      console.log("redirected")
      this._router.navigate(['/alha'])
      };  

}
