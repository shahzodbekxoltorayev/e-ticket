import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './website/header/header.component';
import { HomeComponent } from './website/home/home.component';
import { ShopRightSidebarComponent } from './website/shop-right-sidebar/shop-right-sidebar.component';
import { SingelDetailComponent } from './website/singel-detail/singel-detail.component';
import { ShoppingCardComponent } from './website/shopping-card/shopping-card.component';
import { OrderComponent } from './website/order/order.component';
import { CheckoutComponent } from './website/checkout/checkout.component';
import { AboutComponent } from './website/about/about.component';
import { ContactComponent } from './website/contact/contact.component';
import { BlogComponent } from './website/blog/blog.component';
import { SignUpComponent } from './website/sign-up/sign-up.component';


const newLocal = 'checkout ';
const routes: Routes = [
  {
    path : '', component :  HeaderComponent, children: [
      { path: '', component: HomeComponent} ,
      { path: 'shop-right-sidebar', component: ShopRightSidebarComponent} ,
      { path: 'singel-detail', component: SingelDetailComponent} ,
      { path: 'shopping-card', component: ShoppingCardComponent} ,
      { path: 'order', component: OrderComponent} ,
      { path: 'checkout', component: CheckoutComponent} ,
      { path: 'about', component: AboutComponent} ,
      { path: 'blog', component: BlogComponent} ,
      { path: 'contact', component: ContactComponent} ,
      { path: 'sign-up', component: SignUpComponent} ,
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
