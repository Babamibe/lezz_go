import { switchMap } from 'rxjs/operators';
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { FriendsService } from '../../../services/friends.service';
import { Identifiable } from 'src/app/shared/identifiable.model';
import { projects } from 'src/app/data';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit{
  friend$!: Observable<Identifiable>;
  projects = [	{ id: 3, name: 'Playa et margarita' },	{ id: 10, name: 'On part et on ne revient pas!' }];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FriendsService,
  ) {}


  ngOnInit(): void {
    this.friend$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getFriend(params.get('id')!))
    );
  }


  gotoFriends(friend: Identifiable) {
    const friendId = friend ? friend.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/friends', { id: friendId, foo: 'foo' }]);
  }

}
