import { Component } from '@angular/core';

@Component({
  selector: 'app-button-greet',
  imports: [],
  templateUrl: './button-greet.component.html'
  ,

  
})
export class ButtonGreetComponent {
  message=''
  greet(){
    console.log('Buenos dias Guzmán')
  }

  onMouseOver() {
    this.message = 'Way to go 🚗';
}
onMouseOut() {
  this.message = '';
}



}
