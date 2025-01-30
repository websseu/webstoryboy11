import { Metadata } from 'next';
import UserList from './user-list';

export const metadata: Metadata = {
  title: 'Admin Users',
};

export default function UsersPage() {
  return <UserList />;
}
