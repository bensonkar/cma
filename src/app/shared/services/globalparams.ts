import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalParams {

  // baseUrl = 'http://localhost:8069/api/v1/';
  // baseUrl = 'http://3.128.180.78:9099/';
  // docker build -t tracomservices/new-40s-frontend .
  // docker run --name new-40s-frontend-container -d -p 6161:80 tracomservices/new-40s-frontend
  baseUrl = 'http://localhost:9099/';
  // baseUrl = 'http://192.168.1.128:6160/';
  // baseUrl = 'http://197.248.113.67:6160/';


  emailPattern = '([A-Za-z0-9_\\-\\.]+)@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,3})$';
  phonePattern = '^[2][5][4][0-9]{9}$';
  namePattern = '^(?=.*[A-z0-9].*[A-z0-9])[0-9A-z-\'.\\s]{6,}$';
  idPattern = '^[0-9]{8}$';
  accPattern = '^[0-9]{10,}$';
  currPattern = '^(?=.*[A-z].*[A-z])[A-z-\\s]{8,}$';
  curCode = '^[A-Z]{3}$';
  bankPattern = '^(?=.*[A-z].*[A-z])[A-z-\(\)\\s]{3,}$';
  bankCode = '^[0-9]{2,}$';
  swiftCode = '^[A-z0-9]{3,}$';
  county = '^(?=.*[A-z].*[A-z])[A-z-\\s]{4,}$';
  countyCodePattern = '^[0-9]{1,}$';
}
