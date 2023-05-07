import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountSelectionComponent } from './components/account-selection/account-selection.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WalletComponent } from './components/wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountSelectionComponent,
    AccountDetailsComponent,
    TransactionComponent,
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
