import { NavLink } from '.';
import { useEffect, useState } from 'react';
import { usersRepo } from 'helpers';

export { Nav };

function Nav() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user2'));
    setUser(userData);
  }, []);

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink href="/" exact className="nav-item nav-link">
          Home
        </NavLink>
        <NavLink href="/product" className="nav-item nav-link">
          Product
        </NavLink>
        <NavLink href="/nameregistry" className="nav-item nav-link">
          Nameregistry
        </NavLink>
        <NavLink href="/cloud" className="nav-item nav-link">
          Cloud
        </NavLink>
        {user?.role === 'Admin' && (
          <NavLink href="/users" className="nav-item nav-link">
            Users
          </NavLink>
        )}
        {user && (
          <NavLink
            href="/#"
            className="nav-item nav-link"
            onClick={usersRepo.logout}
          >
            Logout
          </NavLink>
        )}
      </div>
    </nav>
  );
}
