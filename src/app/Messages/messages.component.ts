import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-messages',
  templateUrl: 'messages.component.html',
  styleUrls: ['messages.component.css']

})
export class MessagesComponent implements OnInit {

  ngOnInit(): void {
    this.getAllMessages()
  }

  getAllMessages(): void {

  }
}
