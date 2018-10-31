import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-cookbook';
  loadedFeature = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyD-EasSlkFa6PDtqjPEPWzAsDu4EgQSwhE",
      authDomain: "angular-recipe-85a8e.firebaseapp.com"
    });
  }
}

