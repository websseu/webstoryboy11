import { getAllUsers } from '@/lib/actions/user.actions';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';

export default async function UserList() {
  const appUsers = await getAllUsers();
  const totalUsers = appUsers.length;

  return (
    <div className='post__list'>
      <div className='flex items-center'>
        <h2>사용자 목록</h2>
        <span className='text-xs'>({totalUsers})</span>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>이메일</TableHead>
            <TableHead>이름</TableHead>
            <TableHead>인증 여부</TableHead>
            <TableHead>이미지</TableHead>
            <TableHead>역할</TableHead>
            <TableHead>방문</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appUsers.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.emailVerified ? 'true' : 'false'}</TableCell>
              <TableCell>{user.image}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.visitCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
