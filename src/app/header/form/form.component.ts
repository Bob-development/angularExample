import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  constructor() {}
  
  inputValue: string = '';

  @Output() postToHeader = new EventEmitter()
  

  sendData(){
    this.postToHeader.emit(this.inputValue);
    
  }

  ngOnInit(): void {
  }

}
