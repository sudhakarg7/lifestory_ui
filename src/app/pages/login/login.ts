import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from "../../service/api.service";
import { StorageServiceService } from "../../service/storage-service.service";
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { invalid } from '@angular/compiler/src/render3/view/util';
declare const $, Swal;



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.css'],
})
export class LoginPage {
  login: any = {}
  wrongpassword = false
  // login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public api: ApiService,
    public storage: StorageServiceService,
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {

      this.api.loginPost(this.login).then((res: any) => {
        console.log(res)
        if(res && res.token){
          let loginData = {
            emailID: res.user_email,
            password: this.login.password,
            name: res.user_nicename
          }
          this.api.login(loginData).then((res) => {
            console.log(this.login)
            if (res.status == 'success') {
              this.storage.setData({ token: res.token, userType: res.userType })
              this.router.navigateByUrl('/app/tabs/dashboard');
            } else {
              console.log("failuer")
              if (res.status === 'failure') {
                this.wrongpassword = true
              }
            }
          })
            .catch(err => {
              console.log(err)
            })
        }
        else{
          alert('invalid user login')
        }
        

      }).catch(err => {
        console.log(err)
        alert('invalid user login')
      })


    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
