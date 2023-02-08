import { Component } from '@angular/core';
import { avatarUrl } from 'src/app/data';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
avatarSrc = avatarUrl
}
