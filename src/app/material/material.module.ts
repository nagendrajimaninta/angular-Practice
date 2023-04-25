import { NgModule } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

const materialComponents =[
  MatButtonToggleModule,
  MatIconModule
]

@NgModule({
  imports: [
    materialComponents
  ],
  exports:[materialComponents]
})
export class MaterialModule { }
