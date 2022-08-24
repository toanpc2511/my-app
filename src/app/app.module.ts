import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { registerLicense } from '@syncfusion/ej2-base';
import { environment } from 'src/environments/environment';

registerLicense(environment.syncfusionCommunityKey);

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CheckBoxModule,
    DatePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
