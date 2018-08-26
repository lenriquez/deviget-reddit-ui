import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'drdt-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss']
})
export class PostCardsComponent implements OnInit {
  @Input() post: Post;
  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
