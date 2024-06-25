import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    // Implement the logic to verify credentials here
    // Return true if the credentials are correct, otherwise false
    return true; // Example return value
  }
}

