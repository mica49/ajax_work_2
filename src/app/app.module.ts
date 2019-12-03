import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './comps/login/login.component';
import { HomepageComponent } from './comps/homepage/homepage.component';
import { NavigationComponent } from './comps/navigation/navigation.component';
import { SlideComponent } from './comps/slide/slide.component';
import { ContainerComponent } from './comps/container/container.component';
import { AboutUsComponent } from './comps/about-us/about-us.component';
import { ContactUsComponent } from './comps/contact-us/contact-us.component';
import { PostPannelComponent } from './comps/post-pannel/post-pannel.component';
import { AlbumPannelComponent } from './comps/album-pannel/album-pannel.component';
import { TodoPannelComponent } from './comps/todo-pannel/todo-pannel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    NavigationComponent,
    SlideComponent,
    ContainerComponent,
    AboutUsComponent,
    ContactUsComponent,
    PostPannelComponent,
    AlbumPannelComponent,
    TodoPannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
