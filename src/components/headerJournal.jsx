import logo from './imagesJournal/globe.svg';

function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <img src={logo} alt="logo" width={30}/>
        <p className='paragraphHeader'>my travel journal.</p>
      </nav>
    </header>
  );
}

export default Header;
