export interface Ifooter {
  title: string;
}
export interface IDescription {
  description: string;
}
export interface IDataContainer {
  id: number;
  boxParagraph: string;
}

export interface IUser {
  displayName: string;
  email: string;
  phoneNumber: null | any;
  photoURL: string;
  providerId: string;
  uid: string;
}
