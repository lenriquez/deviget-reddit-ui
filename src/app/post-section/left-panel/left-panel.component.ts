import { Component, OnInit, EventEmitter, Output, OnChanges} from '@angular/core';
import { Input, SimpleChanges} from '@angular/core';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'drdt-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit, OnChanges  {
  @Input() posts: Post[];
  @Output() event = new EventEmitter();
  page: Post[];
  currentPage = 0;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    this.paginationEvent(this.currentPage);
  }

  onEvent(event) {
    this.event.emit(event);
  }

  paginationEvent(page) {
    this.currentPage = page;
    this.page = this.posts.slice(page, page + 9);
  }

}
