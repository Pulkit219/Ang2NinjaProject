import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { provideRoutes} from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';

const routes: Routes = [
  { path: 'directory', component:DirectoryComponent  },
  { path: '',      component: HomeComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
    // provideRoutes(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
