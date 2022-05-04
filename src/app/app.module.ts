import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { GenerateTreeComponent } from './component/generate-tree/generate-tree.component';
import { DisplaySmallTreeComponent } from './component/display-small-tree/display-small-tree.component';
import { DisplayMediumTreeComponent } from './component/display-medium-tree/display-medium-tree.component';
import { DisplayBigTreeComponent } from './component/display-big-tree/display-big-tree.component';
import { MainComponent } from './component/main/main.component';
import { GeneratedTreeComponent } from './component/generated-tree/generated-tree.component'

@NgModule({
  declarations: [
    AppComponent,
    GenerateTreeComponent,
    DisplaySmallTreeComponent,
    DisplayMediumTreeComponent,
    DisplayBigTreeComponent,
    MainComponent,
    GeneratedTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
