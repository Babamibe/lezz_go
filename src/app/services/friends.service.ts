import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, of , throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { friends, projects } from '../data';
import { Identifiable } from 'src/app/shared/identifiable.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})

export class FriendsService {

  private apiFriendsUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllFriends(id: number): Observable<Identifiable[]> {
    return this.http.get<Identifiable[]>(`${this.apiFriendsUrl}/user/${id}/all`)
}

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