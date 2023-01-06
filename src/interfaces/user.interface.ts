export interface IUserFullData {
  birthDate: string;
  cellPhone: string;
  city: string;
  complement?: string;
  cpf: string;
  description?: string;
  email: string;
  fullName: string;
  isSeller: boolean;
  number: string;
  password: string;
  passwordConfirm: string;
  state: string;
  street: string;
  zipCode: string;
}

export interface IUserAddressRequest {
  street: string;
  number: string;
  complement?: string;
  zipCode: string;
  city: string;
  state: string;
}

export interface IUserRequest {
  fullName: string;
  email: string;
  cpf: string;
  cellPhone: string;
  birthDate: string;
  description?: string;
  isSeller: boolean;
  password: string;
  address: IUserAddressRequest;
}
