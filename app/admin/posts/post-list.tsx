import { getAllPosts } from '@/lib/actions/post.actions';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';

export default async function PostList() {
  const appPosts = await getAllPosts();

  return (
    <div className='post__list'>
      <div>
        <h2>게시물 목록</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>제목</TableHead>
            <TableHead>카테고리</TableHead>
            <TableHead>출판 여부</TableHead>
            <TableHead>리뷰 수</TableHead>
            <TableHead>조회수</TableHead>
            <TableHead>좋아요</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appPosts.map((post) => (
            <TableRow key={post._id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>{post.isPublished ? 'Yes' : 'No'}</TableCell>
              <TableCell>{post.numReviews}</TableCell>
              <TableCell>{post.numViews}</TableCell>
              <TableCell>{post.numLikes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
