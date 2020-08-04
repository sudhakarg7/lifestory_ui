import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { StorageServiceService } from '../../service/storage-service.service';

@Component({
  selector: 'app-listqustions',
  templateUrl: './listqustions.page.html',
  styleUrls: ['./listqustions.page.scss'],
})
export class ListqustionsPage implements OnInit {
  sysToken
  questList:any

constructor(
  public api:ApiService,
  public storage:StorageServiceService
  ) {

    this.sysToken = this.storage.get('token');
  }

ngOnInit() {
  this.getQuestList()
}

getQuestList(){
  let obj = {
    token:this.sysToken,

  }
  this.api.listQuest(obj)
  .then((res)=>{
    if(res.status == 'success' && res.count >0){
      this.questList = res.data
    }
  })
  .catch((err)=>console.log(err))
}

viewSingle(id){
  console.log(id)
}
  
}
