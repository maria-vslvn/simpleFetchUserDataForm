import { ButtonHTMLAttributes } from 'react';

export interface CompanyModel {
  bs: string;
  catchPhrase: string;
  name: string;
};

interface AddressModel {
  city: string;
  geo: { lat: string, lng: string };
  street: string;
  suite: string;
  zpcode: string;
}

export interface UserModel {
  address: AddressModel;
  company: CompanyModel;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export interface ButtonModel extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
