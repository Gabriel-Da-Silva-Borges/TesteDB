import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


const modules = [
  RouterOutlet,
  FormsModule,
  CommonModule
]
@NgModule({
  
  declarations: [],
  imports: [
    modules
  ],
  exports: [
    modules
  ]
})
export class SharedModule { 
  
}
