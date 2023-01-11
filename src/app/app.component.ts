import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'utils';
  birthday = new Date(1993,3, 8);
 
  constructor (){

   // birthday = new Date(1996, 3, 21);

  }
}
