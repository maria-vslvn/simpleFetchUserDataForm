import {UserFormContainer} from './components/UserForm/UserFormContainer';
import {UserInfo} from './components/UserInfo';

export const App = () => {
  // const [item, setItem] = useState<Record<number, User>>(null);
  
  return (
    <>
      <h1>Get a random user</h1>
      <UserFormContainer />
    </>
  );
}
