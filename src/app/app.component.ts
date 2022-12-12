import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value:any = '0';
  initial:any = null;
  getSubsequent = false;
  operator:any = null;
  title = 'Artisan_Calculator';


  pressNumber(number: any) {
      if(this.getSubsequent){
        this.value = number;
        this.getSubsequent = false;
      } else{
        if(this.value === '0'){
          this.value = number
        } else {
          this.value += number
        }
      }
  }

  decimal(){
    if(!this.value.includes('.')){
        this.value += '.'; 
    }
  }

  negate() {
    if(!this.value.includes('-')){
      this.value = '-' + this.value;
    }
  }

  operand(operand: any) {
    if(this.initial == null) {
      this.initial = Number(this.value);
    }else if(this.operator) {
    sessionStorage.setItem('initial', this.value);
    sessionStorage.setItem('operand', this.operator);
    const output = this.equals();
    this.initial = output;
    this.value = String(output)
    };

    this.operator = operand;
    this.getSubsequent = true;
  }


  equals() {
    const operand = sessionStorage.getItem('operand');
    const initial = Number(sessionStorage.getItem('initial'));
    switch(operand) {
      case '-': 
        return this.initial -= Number(initial);
      case '+':
        return this.initial += Number(initial);
      case '*':
        return this.initial *= Number(initial);
      case '/':
        return this.initial /= Number(initial);
      case '=':
        return initial;
      case '^':
        return Math.sqrt(initial);
    }
  }


  clear() {
    this.value = '0';
    this.initial = null;
    this.operator = null;
    this.getSubsequent = false;
    sessionStorage.clear();
  }


}
