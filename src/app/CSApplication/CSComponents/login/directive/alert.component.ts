import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'alert',
  templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnDestroy, OnInit {

  //TODO Finish alert component and service
  ngOnInit(): void {
    console.log('alert component initiated')
  }

  private subscription: Subscription;
  message: any = "default";

  constructor(private alertService: AlertService) {
    // subscribe to alert messages
    alertService.getMessage().subscribe(message => {
      console.log(message.text)
      this.message = message; });
  }

  ngOnDestroy(): void {
    console.log('destroy alert component')
    this.subscription.unsubscribe();
  }
}
