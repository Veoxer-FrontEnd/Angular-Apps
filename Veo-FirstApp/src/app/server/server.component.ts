import {Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent {
    serverId:number = 0;
    serverState = '';

    constructor() {
        this.serverId = parseInt((Math.random() * 10).toString());
        this.serverState = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getStateColor(){
        return this.serverState === 'online' ? 'green' : 'red';
    }
}