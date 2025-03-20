import { Component } from '@angular/core';
import { SharedModule } from './core/modules/shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [
    SharedModule
  ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dragons';
}
