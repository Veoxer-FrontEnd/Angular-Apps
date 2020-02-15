import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowServerIncrement = false;
  serverCreation = "No server was created.";
  serverName = "";
  serverCreate = false;
  userName = '';
  isDisplayed = false;
  eventLog = [];

  constructor(){
      setTimeout(() => {
          this.allowServerIncrement=true;
      }, 2000);
  }

  onServerCreate(){
      this.serverCreate = true;
      this.serverCreation = "Server created !";
  }

  onSetServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }
  
  resetUserName(){
    this.userName='';
  }

  toggleDetails(){
    this.isDisplayed = !this.isDisplayed;
    this.eventLog.push('button clicked : ' + new Date());
  }

  getRowBgColor(i: number){
    return i >= 4 ? 'blue' : 'transparent'
  }
}
