import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './core/components/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FooterComponent } from './core/components/footer/footer.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginationIntl } from './core/config/custom.paginator.intl';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    HeaderComponent,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxSpinnerModule,
    MatSelectModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: MatPaginatorIntl,
      useValue: new CustomPaginationIntl().getCustomPaginationIntl(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
