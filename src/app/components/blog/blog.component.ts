import { Component, OnInit } from '@angular/core';
import { PostsComponent } from "../posts/posts.component";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostsComponent, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }
}
