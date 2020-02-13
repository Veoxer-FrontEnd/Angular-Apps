import {Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    allowServerIncrement = false;
    constructor(){
        setTimeout(() => {
            this.allowServerIncrement=true;
        }, 2000);
    }
    serverCreation = "No server was created.";
    serverName = "";
    serverId:number =   10;
    serverState:string = 'up';

    getServerState(){
        return this.serverState;
    }

    onServerCreate(){
        this.serverCreation = "Server created !";
    }

    onSetServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }

 }