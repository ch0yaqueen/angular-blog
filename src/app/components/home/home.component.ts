import { Component } from '@angular/core';
import { PostsComponent } from "../posts/posts.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
