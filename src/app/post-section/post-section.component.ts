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
  currentPost: Post;

  constructor(public redditApiServiceService: RedditApiServiceService) { }

  ngOnInit() {
    this.redditApiServiceService.getPosts().subscribe(e => this.setPost(e));
  }

  setPost(posts: Post[]) {
    posts = this.filterDeletedPost(posts);
    this.posts = posts;
    this.currentPost = posts[0];
    this.currentPost.read = true;
  }

  onEvent(event) {
    if (event === 'clear') {this.clean(); }
    switch (event.type) {
      case 'selected':
        this.setCurrentPost(event.details.id);
        break;
      case 'trash':
        this.removePost(event.details.id);
        break;
    }
  }

  setCurrentPost(id: string): void {
    this.currentPost = this.posts.filter(e =>  e.id === id )[0];
    this.currentPost.read = true;
  }

  removePost(id) {
    const deletePost = JSON.parse(localStorage.getItem('deleted')) || [] ;
    this.posts = this.posts.filter(e =>  e.id !== id );
    deletePost.push(id);
    localStorage.setItem('deleted', JSON.stringify(deletePost));
  }

  filterDeletedPost(posts: Post[]): Post[] {
    const deletePost = JSON.parse(localStorage.getItem('deleted')) || [] ;
    return posts.filter(e => deletePost.indexOf(e.id) === -1 );
  }

  clean() {
    localStorage.setItem('deleted', '[]');
    this.redditApiServiceService.getPosts().subscribe(e => this.setPost(e));
  }
}
