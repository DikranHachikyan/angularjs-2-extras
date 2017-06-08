import { Component} from '@angular/core';

@Component({
	selector:'child-component',
	inputs:['msg'],
	template:`<h2>Child Component</h2>
			  <p *ngIf="visible">
			   {{msg}}
			  </p>
			 `
})
export class ChildInputComponent{
	visible:boolean = true;

	show(m:string):void{
		console.log(`Message:${m}`);
	}

	toggleVisible():void{
		this.visible = !this.visible;
	}
}

@Component({
	selector:'demo',
	template:`<h1>{{title}}</h1>
			 <child-component [msg]="message" #child ></child-component>
			 <button (click)="child.toggleVisible()">Show/Hide</button>`
})
export class AppComponent{
	private title:string = 'Parent Component';
	private message:string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

}