import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Post from 'src/model/Post';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  id:number;
  current_date = ""
  post: Post = null;
  constructor( private route: ActivatedRoute, private applicant: HttpClient) {
    this.id = Number(route.snapshot.paramMap.get('id'));
  }

  async ngOnInit() {
    this.post = await this.applicant.get<Post>('https://jsonplaceholder.typicode.com/posts/'+this.id).toPromise().then(
      res => res
    );
  }
  changeDate(date:string) {
    this.current_date = date;
  }

}
