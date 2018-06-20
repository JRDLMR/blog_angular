import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	posTs = [
	{
 		title: 'Pipes',
  	content: 'Every application starts out with what seems like a simple task: get data, transform them, and show them to users. Getting data could be as simple as creating a local variable or as complex as streaming data over a WebSocket. Once data arrive, you could push their raw toString values directly to the view, but that rarely makes for a good user experience. For example, in most use cases, users prefer to see a date in a simple format like April 15, 1988 rather than the raw string format Fri Apr 15 1988 00:00:00 GMT-0700 (Pacific Daylight Time).',
  	loveIts: 0,
    dontLoveIts: 0,
  	created_at: new Date(2018,5,18,10,0,0,0)
	},
	{
 		title: 'Animations',
  	content: 'Motion is an important aspect in the design of modern web applications. Good user interfaces transition smoothly between states with engaging animations that call attention where it s needed. Well-designed animations can make a UI not only more fun but also easier to use.',
  	loveIts: 0,
    dontLoveIts: 0,
  	created_at: new Date(2018,5,18,10,0,0,0)
	},
	{
 		title: 'Bootstrapping',
  	content: 'An NgModule describes how the application parts fit together. Every application has at least one Angular module, the root module that you bootstrap to launch the application. By convention, it is usually called AppModule.',
  	loveIts: 0,
    dontLoveIts: 0,
  	created_at: new Date(2018,5,18,10,0,0,0)
	}
	]

}
