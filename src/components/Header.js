import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <div className="align-left">Math Magicians</div>
        <nav className="header-nav d-flex justify-content-end">
          <ul className="list-unstyled">
            <li>
              <Link to="/">Home</Link>
              |
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
              |
            </li>
            <li><Link to="/quote">Quote</Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
