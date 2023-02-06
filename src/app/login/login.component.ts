import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

username: string = "";
password: string = "";
auth: AuthService = this.authService;


constructor(private authService: AuthService, private router: Router) {

}

ngOnInit() {
  this.auth = this.authService;
}

setMessage() {
  if(this.auth.isLogged == true) {
    'connecté'
  } else {
    'Votre username ou votre mot de passe est incorrect'
  }

}

login() {
//appel du auth guard pour obtenir l'autorisation ou non
this.auth.login(this.username, this.password)
  .subscribe((isLogged: boolean) => {
    this.setMessage;
    //si le auth guard reconnait le username et le password
    //alors l'on renvoie le user vers le dashboard
    if(isLogged) {
      this.router.navigate(['/dashboard']);
    } else {
      //sinon l'on renvoie le user sur la page de login avec le setMessage
      this.password = '';
      this.router.navigate(['/login'])
    }
  })

}


logout(){
  this.auth.logout();
  this.router.navigate(['/login'])
}


}
