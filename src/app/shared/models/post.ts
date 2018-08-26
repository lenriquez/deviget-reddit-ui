
export class Post {
  thumbnail: string;
  title: string;
  id: string;
  author: string;
  read: boolean;
  numComments: number;
  created: string;
  picture: string;

  constructor(data) {
    this.thumbnail = data.thumbnail;
    this.title = data.title;
    this.id = data.id;
    this.author = data.author;
    this.read = false;
    this.numComments = data.num_comments;
    this.created = data.created;
    this.picture = data.url;
  }
}
