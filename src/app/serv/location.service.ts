import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  selectedUser:User
}
