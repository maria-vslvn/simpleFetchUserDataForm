import { useState } from 'react';
import { UserModel, FormSubmitHandler, UserFormFields, UserFormModel } from '../../models';
import { fetchUserByID } from '../../api';
import { UserForm } from './UserForm';
import { UserInfo } from '../UserInfo';
import { Loader } from '../Loader';

export const UserFormContainer = () => {
  const [user, setUser] = useState<UserModel | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit: FormSubmitHandler<UserFormModel> = async (data, { setError } ) => {
    setIsPending(true);
    setUser(null);
    const id = data[UserFormFields.id];
    fetchUserByID(id).then((res: UserModel) => {
      setIsPending(false);
      setUser(res);
    }).catch((error) => {
      setIsPending(false);
      if (setError) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        setError('root', { message: errorMessage });
      }
    });
  }
  return (
    <>
      <UserForm onSubmit={handleSubmit} />
      {user && <UserInfo user={user} />}
      {isPending && <Loader />}
    </>
  )
}
