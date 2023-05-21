import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent {
      // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService,private router:Router) {}

  ngOnInit():void{
    this.auth.isAuthenticated$.subscribe(isAuthenticade =>{
      if(isAuthenticade){
        this.router.navigate(['/dashboard']); 
      }
    })
  }

  login(){
    this.auth.loginWithRedirect();
  }
}
