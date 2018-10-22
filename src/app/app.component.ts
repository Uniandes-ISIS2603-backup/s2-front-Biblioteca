import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 's2-front-Biblioteca';
  
  /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "s2-front-Biblioteca";
    }
}
