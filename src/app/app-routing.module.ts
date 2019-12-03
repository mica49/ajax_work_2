import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { HomepageComponent } from './comps/homepage/homepage.component';
import { AboutUsComponent } from './comps/about-us/about-us.component';
import { ContactUsComponent } from './comps/contact-us/contact-us.component';
import { PostPannelComponent } from './comps/post-pannel/post-pannel.component';
import { AlbumPannelComponent } from './comps/album-pannel/album-pannel.component';
import { TodoPannelComponent } from './comps/todo-pannel/todo-pannel.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent,},
  { path: 'homepage', component: HomepageComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'contactUs', component: ContactUsComponent},
  { path: 'posts', component: PostPannelComponent},
  { path: 'albums', component: AlbumPannelComponent},
  { path: 'todos', component: TodoPannelComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
  
]
  
    // children:[
    //   { path: 'login', component: LoginComponent },
    //   { path: 'chocolate', component: ChcolateComponent },
    //   { 
    //     path: 'ice-cream', 
    //     component: IceCreamComponent,
    //     canActivate: [CanActivateIceCreamServsice] 
    //   },
    //   { path: 'user/:moo', component: JsonAppUserComponent },
    //   { 
    //     path: 'data-title', 
    //     component: DataTitleComponent,
    //     data: { shuki: 'Heroes List 2', cow:'moo' } 
    //   },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
