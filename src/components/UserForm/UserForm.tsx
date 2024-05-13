import { useForm } from 'react-hook-form';
import { FormSubmitHandler, UserFormFields, UserFormModel } from '../../models/formModels';
import { textFieldValidate } from '../../utils';
import { Button } from '../Button';
import { TextField } from '../TextField';

interface FormProps {
  onSubmit: FormSubmitHandler<UserFormModel>;
}

export const UserForm = ({ onSubmit }: FormProps) => {
  const defaultValues = { id: '' };

  const { handleSubmit, control, setValue, setError, reset, clearErrors, formState: { isValid, errors } } = useForm({ defaultValues });

  const handleIdGenerate = () => {
    clearErrors();
    reset();
    setValue(UserFormFields.id, `${Math.floor(Math.random() * (10 - 1)) + 1}`)
  };

  const onSubmitHandler = handleSubmit((values) => onSubmit(values, { setError }));

  return (
    <form className={'flex-column gap-3'} onSubmit={onSubmitHandler}>
      <div className={'align-items-end gap-3'}>
        <TextField rules={textFieldValidate} label={UserFormFields.id} name={UserFormFields.id} control={control} />
        <Button className={'btn-secondary'} type={'button'} onClick={handleIdGenerate} label={'Generate random ID'} />
      </div>
      <Button className={'btn-primary'} disabled={!isValid} label={'Submit'} />
      {errors.root && <div className={'alert-error'}>{errors.root?.message || 'User ID doesn\'t match any user'}</div>}
    </form>
  )
}
