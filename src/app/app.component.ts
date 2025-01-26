import { Component } from '@angular/core';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserComponent], // Asegúrate de incluir el UserComponent aquí
})
export class AppComponent {
  title = 'abm-project';
}
