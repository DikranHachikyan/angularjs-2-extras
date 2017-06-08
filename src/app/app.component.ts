import { Component, ViewChildren, QueryList} from '@angular/core';

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
	id:number;
	show(m:string):void{
		console.log(`Message:${m}`);
	}

	toggleVisible():void{
		this.visible = !this.visible;
	}

	getId():number{
		return this.id;
	}
}

@Component({
	selector:'demo',
	template:`<h1>{{title}}</h1>
			 <child-component [msg]="message" ></child-component>
			 <child-component [msg]="message" ></child-component>
			 <child-component [msg]="message" ></child-component>
			 <child-component [msg]="message" ></child-component>
			 <button (click)="toggle()">Show/Hide</button>`
})
export class AppComponent{
	@ViewChildren(ChildInputComponent)
	private children:QueryList<ChildInputComponent>;

	private title:string = 'Parent Component';
	private message:string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

	toggle():void{
		this.children.forEach( child => child.toggleVisible());
	}
}