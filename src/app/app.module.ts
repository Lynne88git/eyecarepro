import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { AccountSelectionComponent } from './components/account-selection/account-selection.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WalletComponent } from './components/wallet/wallet.component';

import { MockDataService } from './services/mock-data.service';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountSelectionComponent,
    AccountDetailsComponent,
    NavComponent,
    DashboardComponent,
    NotFoundComponent,
    WalletComponent,
    TransactionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
