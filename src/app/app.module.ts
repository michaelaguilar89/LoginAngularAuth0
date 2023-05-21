import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './components/initial/initial.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
            // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-bb64ioo4wsudrxwh.us.auth0.com',
      clientId: 'ZhVZSOJzIx8nmpVNJyTSAQP3wNA0MMcH',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
