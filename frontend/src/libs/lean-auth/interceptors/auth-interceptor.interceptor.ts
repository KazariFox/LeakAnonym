import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    return throwError(err);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.params.get('skipAuth')) {
      return next.handle(req).pipe();
    }

    const idToken = this.auth.token;
    if (idToken) {
      // Если вышел срок действия токена, то перед запросом надо его обновить
      if (!this.auth.isAuth) {
        /**
         * @TODO добавить логику обновления токена
         */

        alert('token is parasha ebanaya');
      }

      // Если токен действующий, то используем его
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + idToken),
      });

      return next.handle(cloned).pipe(catchError((err) => this.handleAuthError(err)));
    } else {
      return next.handle(req).pipe(catchError((err) => this.handleAuthError(err)));
    }
  }
}
