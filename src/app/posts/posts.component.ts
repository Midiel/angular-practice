import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  private posts: Post[];

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  add(title: string, body: string, id: number): void {
      title = title.trim();
      body = body.trim();

      if(!title || !body) {return;}

    let post: Post = {
      userId: 7,
      id: id,
      title: title,
      boddy: body,
    }

    this.postService.addPost(post)
      .subscribe(post => {
        this.posts.push(post);
      });
  }

}
