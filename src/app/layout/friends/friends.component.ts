import { Component } from '@angular/core';
import { friends } from 'src/app/data';
import { Identifiable } from 'src/app/search-bar/search-bar.model';



@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent {

  data = friends

}
