import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service"
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor (public authService:AuthService) {}

    intercept (req: HttpRequest <any>, next: HttpHandler): Observable <HttpEvent<any>> {
        req = req.clone ({
            setHeaders: {
                Authorization: `Basic ${this.authService.getToken()}`
            }
        })

        return next.handle(req);
    }

}