var moment = require('moment-timezone');

import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  today = moment(Date.now()).format('MMM D , Y, h:m:s a')

  onClick(tz, id){
    var button = document.getElementById(id);
    button.disabled = true;
    $(button).siblings().attr('disabled', false)
    var newMoment = moment(Date.now(), tz)
    this.today = moment(Date.now()).tz(tz).format('MMM D , Y, h:m:s a')
  }

}
