import { API_PATH } from '../constantsMyApp';
import { UserModel } from '../models';

export const fetchUserByID = async (id: string): Promise<UserModel> => {
  try {
    const response = await fetch(`${API_PATH}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    const data: UserModel = await response.json();
    return data;
  } catch (error) {
    throw new Error(`User with provided ID not found`);
  }
}
