import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RedditApiServiceService {

  constructor(public http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get('https://www.reddit.com/r/funny/top.json?limit=50')
    .pipe(
      map((e: any) => e.data.children),
      map(e => e.map( p => new Post(p.data))));
  }
}
