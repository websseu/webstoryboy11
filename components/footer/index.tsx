import { APP_COPYRIGHT, APP_NAME } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className='footer__container'>
      <div className='border-t border-black py-10'>
        <h6 className='text-md font-medium font-nexon'>{APP_NAME}</h6>
        <p className='text-xs mt-1 text-slate-600 font-light'>
          {APP_COPYRIGHT}
        </p>
      </div>
    </footer>
  );
}
