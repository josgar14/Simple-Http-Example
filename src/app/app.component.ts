import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

interface Product {
	id: string;
	title: string;
	price: number;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	products$: Observable<Product[]>;

	constructor(private httpClient: HttpClient) {
		let httpHeaders = new HttpHeaders()
			.set('Content-Type', 'application/json')
			.set('Authorization', 'Basic QWxhZGRpb');

		let httpParams = new HttpParams().set('title', 'First');

		this.products$ = this.httpClient.get<Product[]>('/data/products.json', {
			headers: httpHeaders,
			params: httpParams
		});
		console.log(this.products$);
	}
}
