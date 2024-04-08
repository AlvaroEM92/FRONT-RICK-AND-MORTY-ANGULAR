import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email: string = ""
password: string = ""


constructor(private authService: AuthService, private router: Router){}



  handleLogin() {
    const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$/;
    const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   
          const userObject = {
            email: this.email,
            password: this.password
          }
          if(regExpEmail.test(this.email) && regExpPassword.test(this.password)){
            console.log(userObject)
            this.authService.login(userObject).subscribe({
              next: (response: any) => {
                console.log("Manejando respuesta del login en el componente:", response);
                const token = response.user?.token;
                console.log("Token antes de almacenarlo:", token);
                if(token){
                  console.log("Almacenando el token:", token);
                  sessionStorage.setItem('token-products', token);
                  this.router.navigate(['home']);


                }else {
                  // Maneja el caso en que el token no se recibe o es undefined
                  console.error('Token no recibido o es undefined', response);
                }
              },
              error: (error) => {
                console.error('Error en el login:', error);
              }
            })
    }
  }




}

