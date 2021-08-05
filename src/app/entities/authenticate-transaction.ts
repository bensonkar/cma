import { NgClass } from '@angular/common';

export class AuthenticateModel{
  description:string;
  name: string;
  code: string;
  id: number;
  firstFinger:string;
  secondFinger:string;

  authenticateTransaction:Authenticate;

}
export class Authenticate{
  idNumber:string;
  fingerPrint:string;
  memberNo:string;
}
