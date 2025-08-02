import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

export const routes: Routes = [
    {path:'' , component: HomeComponent},
    {path:'about' , component: AboutComponent},
    {path:'product/:id' , component: ProductComponent},
    {path:'contact' , component: ContactComponent},
    {path:'header' , component: HeaderComponent},
    {path:'footer' , component: FooterComponent},
    {path:'pageNotFound' , component: PageNotFoundComponent},
    {path: '**' , component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
