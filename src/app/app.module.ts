import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonFormComponent } from './components/json-form/json-form.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MaterialModule } from './material/material.module';
import {MatButtonModule} from '@angular/material/button';
import { TafileComponent } from './tsFile.ccomponent';
import { NagendraDirective } from './nagendra.directive';
import { RouterModule,Routes } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop'
import { EmpService } from './emp.service';
const routes :Routes =[
  {path:"first",component:FirstComponent},
  {path:"second",component:SecondComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    JsonFormComponent,
    FirstComponent,
    SecondComponent,
    TafileComponent,
    NagendraDirective
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    MatPaginatorModule,
    MatButtonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
