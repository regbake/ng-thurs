import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArchiveComponent } from './archive/archive.component';

export const ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'search', component: SearchComponent },
  { path: 'archive', component: ArchiveComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
