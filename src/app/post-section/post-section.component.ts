import { Component, OnInit } from '@angular/core';
import { RedditApiServiceService } from '../shared/services/reddit-api-service.service';
import { Post } from '../shared/models/post';

@Component({
  selector: 'drdt-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.scss']
})
export class PostSectionComponent implements OnInit {
  posts: Post[];

  constructor(public redditApiServiceService: RedditApiServiceService) { }

  ngOnInit() {
    this.redditApiServiceService.getPosts().subscribe(e => this.setPost(e));
  }

  setPost(posts: Post[]) {
    this.posts = posts;
  }
}
