import HeaderTop from './header-top';
import Menu from './menu';

export default function Header() {
  return (
    <header className='border-b-2 border-black line'>
      <HeaderTop />
      <Menu />
    </header>
  );
}
