import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {

  @Input() postTitre: string;
  @Input() postCorps: string;
  @Input() nbLoveIts: number;
  @Input() nbDontLoveIts: number;
  @Input() dateCreation;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt(){
    this.nbLoveIts += 1;
  }

  onDontLoveIt(){
    this.nbDontLoveIts += 1;
  }

}
