'use client';

import Link from 'next/link';
import data from '@/lib/data';
import { usePathname } from 'next/navigation';
import { MenuItem } from '@/lib/types';

export default function Menu() {
  const pathname = usePathname();

  // admin URL일 경우 adminMenus 사용, 아니면 headerMenus 사용
  const menus = pathname.includes('/admin')
    ? data.adminMenus
    : data.headerMenus;

  return (
    <nav className='header__nav'>
      <ul>
        {menus.map((menu: MenuItem) => (
          <li
            key={menu.name}
            className={pathname === menu.href ? 'active' : ''}
          >
            <Link href={menu.href}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
