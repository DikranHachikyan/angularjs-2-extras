import { Component } from '@angular/core';


@Component({
	selector:'demo',
	template:`<h1>{{title}}</h1>`
})
export class AppComponent{
	private title:string = 'Parent Component';

}