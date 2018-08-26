
export class Post {
  thumbnail: string;
  title: string;
  id: string;
  author: string;
  read: boolean;
  numComments: number;
  created: string;

  constructor(data) {
    this.thumbnail = data.thumbnail;
    this.title = data.title;
    this.id = data.id;
    this.author = data.author;
    this.read = true;
    this.numComments = data.num_comments;
    this.created = data.created;
  }
}