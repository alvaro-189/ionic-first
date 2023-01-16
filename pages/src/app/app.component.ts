
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Router nos permite navegar entre rutas de la palicación y si es necesario, pasar parámetros
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  logged: boolean;
  constructor(private miRouter:Router) {
      this.logged = false;

      if(this.logged){
        this.miRouter.navigate(['']);
      }else{
        // alert('El usuario no está Loggeado')
        this.miRouter.navigate(['login']);
      }

  }
}
