import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ColorPickerModule } from 'ngx-color-picker';
import { FileSaverModule } from 'ngx-filesaver';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxQRCodeModule,
    ColorPickerModule,
    FileSaverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
