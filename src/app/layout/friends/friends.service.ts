import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


import { friends, projects } from '../../data';
import { Identifiable } from 'src/app/shared/identifiable.model';

@Injectable({
  providedIn: 'root',
})
export class FriendService {

  constructor() { }

  getFriends(): Observable<Identifiable[]> {
    return of(friends);
  }

  getFriend(id: number | string) {
    return this.getFriends().pipe(
      // (+) before `id` turns the string into a number
      map((friends: Identifiable[]) => friends.find(friend => friend.id === +id)!)
    );
  }
}