import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";


export class LoggingInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
        // tap allows you to listen to response without consuming it--- subscribe consumes it
        return next.handle(req).pipe(tap(
            event => {
                console.log('logging int ', event);
            }
        ))
    }
}