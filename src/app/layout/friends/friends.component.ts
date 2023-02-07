import { Component, OnInit } from '@angular/core';
import { friends } from 'src/app/data';
import { Identifiable } from 'src/app/shared/identifiable.model';
import {Observable, switchMap} from 'rxjs'
import { FriendService } from './friends.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit{
  friends$!: Observable< Identifiable[]>;
  selectedId = 0;
  constructor(
    private service: FriendService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.friends$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getFriends();
      })
    );
  }

  friends = friends

}
