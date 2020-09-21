import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainComponent} from './main/main.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SecondPageComponent } from './second-page/second-page.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([    
      { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
      {path: '1', component: MainComponent},
      {path: '2', component: SecondPageComponent}
    ])
  ],
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    SecondPageComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }