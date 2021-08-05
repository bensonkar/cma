export class ResponseWrapper<T> {
  [x: string]: any;
  code: number;
  message: string;
  workGroups:[Array<workgroupRoles>];
  data: T;
  id: any;
  name:string;
  description:string;
  email:string;
  firstName:string;
  lastName:string;
  phoneNumber:string;
  nationalId:any;
  position:string;
  surname:string;
  mobileNumber:string;
  idNumber:string;
  kraPin:string;
  employeeNumber:string;
  occupation:string;
  currentAddress:string;
  emailAddress:string;
  nextofkinaddress:string;
  nextofkinoccupation:string;
  nextofkinmobileNumber:string;
  nextofkinname:string;
  nextofkinrelationship:string;
  workgroupRoles:any;
  payload: any;
 
  
  leftThumbPrint:string;
  leftIndexPrint:string;
  leftMiddlePrint:string;
  leftRingPrint:string;
  leftPinkyPrint:string;
  rightThumbPrint:string;
  rightIndexPrint:string;
  rightMidPrint:string;
  rightRingPrint:string;
  rightPinkyPrint:string;
  forEach: any;

}
export class workgroupRoles {
  name: string;
  id:string;
}

