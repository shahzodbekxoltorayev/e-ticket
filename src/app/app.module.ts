import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './website/header/header.component';
import { FooterComponent } from './website/footer/footer.component';
import { HomeComponent } from './website/home/home.component';
import { ContactComponent } from './website/contact/contact.component';
import { BlogComponent } from './website/blog/blog.component';
import { AboutComponent } from './website/about/about.component';
import { ShopComponent } from './website/shop/shop.component';
import { ShopRightSidebarComponent } from './website/shop-right-sidebar/shop-right-sidebar.component';
import { SingelDetailComponent } from './website/singel-detail/singel-detail.component';
import { ShoppingCardComponent } from './website/shopping-card/shopping-card.component';
import { CheckoutComponent } from './website/checkout/checkout.component';
import { OrderComponent } from './website/order/order.component';
import { FAQComponent } from './website/faq/faq.component';
import { SignUpComponent } from './website/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    AboutComponent,
    ShopComponent,
    ShopRightSidebarComponent,
    SingelDetailComponent,
    ShoppingCardComponent,
    CheckoutComponent,
    OrderComponent,
    FAQComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
