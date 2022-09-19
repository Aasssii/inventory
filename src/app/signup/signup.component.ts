import { Component, OnInit } from '@angular/core';
import { ImsService } from '../ims.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupss={
    signFrstname:"",
    signlastname:"",
    signemail:"",
    signshop:"",
    signpass:""
  }

  constructor(private api:ImsService) { }

  ngOnInit(): void {
  }
  signup()
  {
    this.api.Signup(this.signupss).subscribe((signupss)=>{

    })
    alert("success");
  }


}
