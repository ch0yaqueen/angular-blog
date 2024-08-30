import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from '../../services/post.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  @Input() post: any;
  @Output() onDeletePost: EventEmitter<any> = new EventEmitter();

  constructor(private postService: PostService) {}

  ngOnInit(): void {}
  
  onDelete() {
    this.onDeletePost.emit(this.post);
    //this.postService.deletePost(this.post.id).subscribe();
  }
}
