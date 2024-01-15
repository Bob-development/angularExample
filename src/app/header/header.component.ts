import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public post: string = '';
  
  @Output() postToApp = new EventEmitter();

  
  recievePost(post: string){
    this.post = post;
    this.postToApp.emit(this.post);

  }
  
  
  constructor() {}

  ngOnInit(): void {
  }

}
