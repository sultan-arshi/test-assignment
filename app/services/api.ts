import { User } from '../types/types';

/**
 * Fetches user data from the plaseHolder API.
 * @returns Promise<User[]> - Array of users.
 */
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data.map((user: any) => ({
    id: user.id,
    name: user.name,
    age: Math.floor(Math.random() * 30) + 20,
    dob: '1990-01-01',
    checked: false,
  }));
};

export default fetchUsers;