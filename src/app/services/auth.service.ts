import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: any){
   

    return this.http.post('http://localhost:8084/api/users/register', user )
  }
login(user: any) {
  return this.http.post('http://localhost:8084/api/users/login', user).pipe(
    tap((response: any) => {
      const token = response.user?.token;
      if (token) {
        console.log("Token recibido:", token);
        sessionStorage.setItem('token-products', token);
      } else {
        console.error('Token no recibido en la respuesta', response);
      }
    })
  );
}

logout() {
  // Simplemente elimina el token del sessionStorage
  sessionStorage.removeItem('token-products');
  // Aquí puedes redirigir al login o manejar el logout de otra manera si es necesario
}
}
