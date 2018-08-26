import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'drdt-details-cards',
  templateUrl: './details-cards.component.html',
  styleUrls: ['./details-cards.component.scss']
})
export class DetailsCardsComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
