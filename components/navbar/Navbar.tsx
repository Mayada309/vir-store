import Container from '../global/Container';
import CartButton from './CartButton';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className='border-b border-slate-300'>
      <Container className='flex flex-row justify-between items-center gap-4'>
        <Logo />
        <LinksDropdown />
        <CartButton />
      </Container>
    </nav>
  );
}

export default Navbar;
