import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  showLoading() {
    this._isLoading.next(true);
    setTimeout(() => this.hideLoading(), 1000); // Mantiene el GIF visible por 3 segundos
  }

  hideLoading() {
    this._isLoading.next(false);
  }

  // Exponer el estado de isLoading como un Observable
  get isLoading$(): Observable<boolean> {
    return this._isLoading.asObservable();
  }
}