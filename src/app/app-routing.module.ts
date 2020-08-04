import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
declare const window;

export class AuthTokenService implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const started = Date.now();
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          // console.log(event.body)
          let body = event.body;
          if (body.status == 'failure') {
            if (body.message == 108) {
              // alert('Token expired')
              
              window.setTimeout(function () { window.location = "https://lifestoryshare.herokuapp.com/"; }, 3000);
            }
          }
          // console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      }, error => {
        console.error('NICE ERROR', error)

      })
    )
  }
}
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'lifestoryqustions',
    loadChildren: () => import('./pages/lifestoryqustions/lifestoryqustions.module').then( m => m.LifestoryqustionsPageModule)
  },
  {
    path: 'createqustions',
    loadChildren: () => import('./pages/create-qustions/createqustions.module').then( m => m.CreatequstionsPageModule)
  },
  {
    path: 'listquestions',
    loadChildren: () => import('./pages/list-questions/listqustions.module').then( m => m.ListqustionsPageModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
