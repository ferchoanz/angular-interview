import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Commentary from 'src/model/commentary';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() post : string;
  comments: Commentary[] = [];
  @Output() date = new EventEmitter<string>();
  constructor(private applicant: HttpClient) { }

  async ngOnInit() {
    this.comments = await this.applicant.get<Commentary[]>('https://jsonplaceholder.typicode.com/comments?postId=' + this.post ).toPromise().then(
      res => res
    );
  }
  sendDate() {
    this.date.emit(Date());
  }

}
