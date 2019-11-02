import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';
import { DetailComponent } from './detail/detail.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZMji1ERi5Q0QIim75OSQD6zCQiTQFhbk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
