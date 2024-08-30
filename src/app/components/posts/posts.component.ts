import { Component, Input, OnInit } from '@angular/core';
import {Posts} from '../../mock-posts'
import { CommonModule } from '@angular/common';
//import { PostComponent } from "../post/post.component";
import { PostService } from '../../services/post.service';
import { PostComponent } from "../post/post.component";
@Component({
  selector: 'app-posts',
  standalone: true,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
  imports: [CommonModule, PostComponent]
})
export class PostsComponent implements OnInit {
  //posts = Posts;
  posts: any;

  @Input() colClass: any;

  //constructor() {}
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((retrievedData) => this.posts = retrievedData) ;
  }

  deletePost(post: any) {
    this.postService.deletePost(post.id).subscribe(() => this.posts = this.posts.filter(
      (p: any) => p.id != post.id
    ));
  }

}
