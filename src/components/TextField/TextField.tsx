import { ChangeEvent, ChangeEventHandler } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { FieldChangeHandlerProps, TextFieldModel } from '../../models';

export const TextField = ({ name, control, onChange, rules, label }: Omit<TextFieldModel, 'value'> & Pick<UseControllerProps<any>, 'name' | 'control' | 'rules'>) => {
  const { field } = useController({ control, name, rules });

  const hookFormChangeHandler: FieldChangeHandlerProps = (name: string, value: string, e: ChangeEvent<HTMLInputElement>) => {
    field.onChange(value);
    onChange?.(name, value, e);
  };
  
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value;
    hookFormChangeHandler(name, val, e);
  };

  return (
    <label className={'form-field'} htmlFor={name}>
      <p className={'form-field-label'}>{label}</p>
      <input value={field.value} className={'form-field-input'} onChange={handleChange} id={name} type={'number'} />
    </label>
  );
};
