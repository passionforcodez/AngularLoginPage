import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectAngular';
    username='';
    password='';

    onLogin() {
      const hardCodedUserName = 'shwetha';
      const hardCodedPassword = 'password';

      if(this.username === hardCodedUserName && this.password === hardCodedPassword) {
        alert("Login Sucess");
      }else {
        alert("Login Failed");
      }
    }
}


