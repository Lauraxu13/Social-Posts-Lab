import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Post } from "../post";
import { runInThisContext } from 'vm';

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output()
  submitted = new EventEmitter<Post>();
  newPost: Post={title:"", thought:""};
  // tell Denna about this 


  submitPost() {
    this.submitted.emit({title:this.newPost.title, thought:this.newPost.thought});
    this.newPost={title:"", thought:""};
  }
  constructor() {}

  ngOnInit() {}
}
