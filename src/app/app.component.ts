import { HttpClient } from '@angular/common/http';
import { Component, OnInit,  } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lezz_go';

  activePath: string = '';
  activeClassName: string = '';

  constructor(private http: HttpClient,private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activePath = event.url.split('/')[1] || 'default';
        this.activeClassName = this.activePath + 'PageClass';
        console.log(this.activeClassName);
      }
    });
  }











  ngOnInit() {
    this.fetchProducts();
  }

  onFetchProducts() {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.http.get('http://localhost:8080/api/produits').subscribe(prod => {
      console.log(prod);
    })
  }

  
}
