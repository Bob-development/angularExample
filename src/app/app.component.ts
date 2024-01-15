import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public posts: string[] = [];

  recievePostMessage(post: string){
    this.posts.push(post);
    console.log(this.posts);
        
  }

  constructor(){}
}
