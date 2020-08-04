import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  dashboard:any = []
  constructor(public router:Router) { }

  ngOnInit() {
    this.fun()
  }
  selectQuestions(){
    this.router.navigate((["/lifestoryqustions"]))
  }
  fun(){
    this.dashboard = [{
      title:'The Beginning',
      subtitle:'Question part -1'
    },
      {
        title: 'Childhood',
        subtitle: 'Question part -2'
      },
      {
        title: 'Teenage Years',
        subtitle: 'Question part -3'
      },
      {
        title: 'Adulthood',
        subtitle: 'Question part -4'
      },
      {
        title: 'Your Identity',
        subtitle: 'Question part -5'
      },
      {
        title: 'Memory Bank',
        subtitle: 'Question part -6'
      },
      {
        title: 'Being Me',
        subtitle: 'Question part -7'
      },
      {
        title: 'Life lessons & legacies',
        subtitle: 'Question part -8'
      }
  ]
  }
}
