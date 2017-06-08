import { Component} from '@angular/core';

@Component({
	selector:'child-component',
	inputs:['msg'],
	template:`<p (click)="show(msg)">{{msg}}</p>`
})
export class ChildInputComponent{
	show(m:string):void{
		console.log(`Message:${m}`);
	}
}

@Component({
	selector:'demo',
	template:`<h1>{{title}}</h1>
			 <child-component [msg]="message"></child-component>`
})
export class AppComponent{
	private title:string = 'Parent Component';
	private message:string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

}