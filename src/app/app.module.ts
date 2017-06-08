import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent, ChildInputComponent} from './app.component';


@NgModule({
	imports:[BrowserModule],
	declarations:[AppComponent,ChildInputComponent],
	bootstrap:[AppComponent]
})
export class AppModule {
	//
}
