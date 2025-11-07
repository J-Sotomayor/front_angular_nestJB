import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private auhtService=inject(AuthService);

  loginForm=new FormGroup({
    email:new FormControl("", [Validators.email, Validators.required]),
    password:new FormControl("", Validators.required)
  });

  funIngresar(){

    this.auhtService.loginConNest(this.loginForm.value).subscribe
    (res=>{
      console.log(res);  
    },
    (err)=>{
      console.log(err);
    }
    );
    
    //alert("ingresando...");
  }

}
