import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthEmitter } from './interfaces/auth-options.interface';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [AuthService],
})
export class LeanAuthModule {
  static forRoot(options: AuthEmitter): ModuleWithProviders<LeanAuthModule> {
    return {
      ngModule: LeanAuthModule,
      providers: [
        {
          provide: 'AuthServiceConfig',
          useValue: options,
        },
      ],
    };
  }
}
