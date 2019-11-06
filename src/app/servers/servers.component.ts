import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers',
  // selector: '[app-servers]',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers: boolean = false;
  serverCreationStatus: string = 'NO server created.';
  serverName = 'Default server name';

  constructor() { 
    // constructor method is run when component is created by angular
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
    
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server WAS created.';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
