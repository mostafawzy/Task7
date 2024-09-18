import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';

import { AboutComponent } from './componenets/about/about.component';
import { ContactComponent } from './componenets/contact/contact.component';
import { ErrorpageComponent } from './componenets/errorpage/errorpage.component';
import { DetailsComponent } from './componenets/details/details.component';
import { ProductsComponent } from './componenets/products/products.component';

export const routes: Routes = [
    
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: '**', component: ErrorpageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }