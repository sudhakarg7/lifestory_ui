import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lifestoryqustions',
  templateUrl: './lifestoryqustions.page.html',
  styleUrls: ['./lifestoryqustions.page.scss'],
})
export class LifestoryqustionsPage implements OnInit {
  private todo: FormGroup;
  submitted = false
  qustions: any = []
  qustionsForm: any;
  constructor(public fb: FormBuilder,) { }

  ngOnInit() {
    // this.qus()
    this.qusFormLoad()
  }

  // qus() {
  //   this.qustions = ['What do you do?',
  //     'Are you married ?',
  //     'Why are you studying English ?',
  //     'Where / How did you learn English ?',
  //     'What do you do in your free time ?',
  //     ' What"s the weather like? / How"s the weather ?',
  //     'What time is it ? / Do you have the time?',
  //     'Can I help you ? / Do you need any help?']
  // }
  qusFormLoad() {
    this.qustionsForm = this.fb.group({
      qustion1: ['', [Validators.required]],
      qustion2: ['', [Validators.required]],
      qustion3: ['', [Validators.required]],
      qustion4: ['', [Validators.required]],
      qustion5: ['', [Validators.required]],
      qustion6: ['', [Validators.required]],
      qustion7: ['', [Validators.required]],
      qustion8: ['', [Validators.required]],
      description: ['', [Validators.required]],

      
    })
  }
  productSubmit(){
    console.log(this.qustionsForm.value)
  }
  
}
