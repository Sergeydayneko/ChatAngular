import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imageSource: string = "https://cdn2.iconfinder.com/data/icons/blockchain/500/blockchain_12-512.png";

  constructor() { }

  ngOnInit() {
  }

}
