import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lezz_go';

  ngOnInit() {
    this.fetchProducts();
  }
  constructor(private http: HttpClient) {}

  onFetchProducts() {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.http.get('http://localhost:8080/api/produits').subscribe(prod => {
      console.log(prod);
    })
  }

  
}
