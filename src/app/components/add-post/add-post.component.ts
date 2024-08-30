import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  title?: string;
  content: any;

  constructor(private postService: PostService, private router: Router) {
    
  }

  ngOnInit(): void {}

  onSubmit() {
    const new_post = {
      title: this.title,
      content: this.content
    }
    this.postService.addPost(new_post).subscribe(() => this.router.navigate(['/blog']));

  }

}
