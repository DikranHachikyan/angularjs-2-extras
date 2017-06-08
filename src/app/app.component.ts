import { Component, Input } from '@angular/core';

@Component({
	selector:'child-component',
	template:`<p>{{msg}}</p>`
})
export class ChildInputComponent{
	@Input() private msg:string;
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