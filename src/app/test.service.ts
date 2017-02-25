import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  message = `This is great!`;

  constructor() { 
    window['obj']['init'](this.testFromFunc.bind(this));
  }

  testFromFunc(val){
    console.log("Called!!",this);
    this.message = `${val} Message`;
  }

  callWindowFunction(){
    window['obj']['handler']();
  }

}
