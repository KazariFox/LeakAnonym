import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AuthEmitter } from '../interfaces/auth-options.interface';
import { LoginDTO } from '../interfaces/login-dto.interface';
import { RegisterDTO } from '../interfaces/register-dto.interface';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token: string | null = '';

  constructor(
    @Inject('AuthServiceConfig') private options: AuthEmitter,
    private http: HttpClient
  ) {
    this.token = localStorage.getItem(TOKEN_KEY);
  }

  get token() {
    return this._token;
  }

  set token(token: string | null) {
    this._token = token;

    if (token !== null) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  }

  /**
   * @TODO Сделать нормальную проверку
   */
  isAuth() {
    return !!this.token;
  }

  login(loginData: LoginDTO) {
    return this.http
      .post<{ access_token: string; token_type: string; expires_in: number }>(
        this.options.authApi,
        loginData
      )
      .pipe(tap((token) => {
        this.token = token.access_token;
      }));
  }

  register(registerData: RegisterDTO) {
    return this.http
      .post<{ access_token: string; token_type: string; expires_in: number }>(
        this.options.registerApi,
        registerData
      )
      .pipe(tap((token) => {
        this.token = token.access_token;
      }));
  }
}
