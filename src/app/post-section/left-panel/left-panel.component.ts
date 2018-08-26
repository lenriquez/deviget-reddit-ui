import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'drdt-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  @Input() posts: Post[];
  page: Post[];

  constructor() { }

  ngOnInit() {
    this.page = this.posts.slice(0, 9);
  }

  onEvent(event) {
    console.log(event);
  }

  paginationEvent(page) {
    this.page = this.posts.slice(page, page + 9);
  }

}
