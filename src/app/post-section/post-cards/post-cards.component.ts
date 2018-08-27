import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../shared/models/post';
import { Message } from '../../shared/models/message';
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

  onSelected(id) {
    const message = new Message();
    message.type = 'selected';
    message.details = { id };

    this.event.emit(message);
  }

  onEvent(eventName, id, event) {
    const message = new Message();
    message.type = eventName;
    message.details = { id };
    event.stopPropagation();

    this.event.emit(message);
  }

}
