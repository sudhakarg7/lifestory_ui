import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { StorageServiceService } from '../../service/storage-service.service';

@Component({
  selector: 'app-createqustions',
  templateUrl: './createqustions.page.html',
  styleUrls: ['./createqustions.page.scss'],
})
export class CreatequstionsPage implements OnInit {
  sysToken
createQuestForm: FormGroup;
questions: FormArray;

constructor(
  private formBuilder: FormBuilder,
  public api:ApiService,
  public storage:StorageServiceService
  ) {

    this.sysToken = this.storage.get('token');
  }

ngOnInit() {
  this.createForm()
  this.addItem()
}

createForm(){
  this.createQuestForm = this.formBuilder.group({
    questionTitle:['', Validators.required],
    week:['', Validators.required],
    questions: new FormArray([])
  });
}

createItem(): FormGroup {
  return this.formBuilder.group({
    type: 'textarea',
    question: '',
  });
}

addItem(): void {
  this.questions = this.createQuestForm.get('questions') as FormArray;
  this.questions.push(this.createItem());
}

productSubmit(){
  console.log(this.createQuestForm.value)
  let obj = {
    token:this.sysToken,
    ...this.createQuestForm.value
    
  }
  if(this.createQuestForm.valid){
    this.api.createQuest(obj).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
}
  
}
