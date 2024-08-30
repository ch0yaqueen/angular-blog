import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit {

  title?: string;
  content?: string;
  id?: number;

  constructor(private postService: PostService, private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
      // retrieve data from url, note that params is an observable so you can subscribe to it 
      this.route.params.subscribe((parameters) => this.postService
        .getPost(parameters['id'])
        .subscribe((retrievedPost) => {
          this.id = retrievedPost.id,
          this.title = retrievedPost.title,
          this.content = retrievedPost.content})); 
  }

  onSubmit() {
    const updatedPost = {
      id: this.id,
      title: this.title,
      content: this.content
    }

    this.postService.editPost(updatedPost).subscribe(() => this.router.navigate(['/blog']));
  }

}
