import { Component, EventEmitter,Output} from '@angular/core';

@Component({
	selector:'child-component',
	inputs:['msg'],
	template:`<p (click)="show(msg)">{{msg}}</p>
			 <button (click)="sendEvent()">Send</button>`
})
export class ChildInputComponent{
	@Output() send = new EventEmitter<any>();
	private data:{} = { quantity:2, title:'Mastering AngularJS', price:10.20};
	sendEvent():void{
		this.send.emit( this.data);
	}
	show(m:string):void{
		console.log(`Message:${m}`);
	}
}

@Component({
	selector:'demo',
	template:`<h1>{{title}}</h1>
			 <child-component [msg]="message" (send)="showData($event)"></child-component>`
})
export class AppComponent{
	private title:string = 'Parent Component';
	private message:string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

	showData(data:any):void{
		console.log(data);
	}

}