import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ApiService } from './api.service';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from './store/states/product.state';



@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),     
    HttpClientModule,
    NgxsModule.forRoot([
      ProductState
    ]),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class AppBootstrapModule {}