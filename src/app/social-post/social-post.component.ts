import { Component, OnInit } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-social-post",
  templateUrl: "./social-post.component.html",
  styleUrls: ["./social-post.component.css"]
})
export class SocialPostComponent implements OnInit {
  posts: Post[] = [
    {
      title: "Eyeballs",
      thought: "People with glasses need to use their eyes more better"
    },
    {
      title: "Man vs Children",
      thought: "Adult Man faces off against a team of children"
    },
    { title: "Crabpeople", thought: "Looks like Crab, taste like People" },
    { title: "Thoughts", thought: "You thot" }

  ];

  onDelete (index: number){
    this.posts.splice(index,1);
  }

  onSubmit(newPost: Post){
    this.posts.push(newPost)
  };
  constructor() {}

  ngOnInit() {}
}
