import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Post from 'src/model/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  constructor(
    private applicant: HttpClient
  ) { }

  async ngOnInit() {
    this.posts = await this.applicant.get<Post[]>('https://jsonplaceholder.typicode.com/posts').toPromise().then(
      res => res
    );
  }

}
