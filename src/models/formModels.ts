import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import {ChangeEvent} from 'react';

export type FormSubmitHandler<T extends FieldValues, F = object> =
  (data: T, form: Partial<Pick<UseFormReturn<T>, 'setValue' | 'setError'>> & F,) => ReturnType<SubmitHandler<T>>;

export interface TextFieldModel {
  name: string;
  onChange?: FieldChangeHandlerProps;
  label?: string;
  error?: string;
}

export type FieldChangeHandlerProps = (name: string, value: string, e: ChangeEvent<HTMLInputElement>) => void;

export enum UserFormFields {
  id = 'id',
};

export interface UserFormModel {
  [UserFormFields.id]: string;
}
