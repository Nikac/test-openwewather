import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Weather } from '../models/weather.model';

export class MyHttpInterceptor implements HttpInterceptor {
	public errorMsg: string;
	
	intercept(req: HttpRequest<Weather> , next: HttpHandler) {
	

		return next.handle(req).catch((error) => {
			if (error instanceof HttpErrorResponse) {
				console.log('This is error:' + error);
				if (error.status === 404) {
					console.log('City doesnt exist!!!');
					this.errorMsg = 'City doesnt exist!!!'
				} 
			}
		});
	}
}
