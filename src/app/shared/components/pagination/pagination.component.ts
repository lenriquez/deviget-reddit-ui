import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'drdt-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() event = new EventEmitter();
  currentPage = 1;

  constructor() { }

  ngOnInit() { }

  onPageChange(page: number) {
    this.currentPage = page;
    this.event.emit((page - 1) * 10);
  }

}
