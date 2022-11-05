import { NavLink } from '.';
import { useEffect, useMemo, useState } from 'react';
import { usersRepo } from 'helpers';

export { Nav };

function Nav() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user2'));
    setUser(userData);
  }, []);

  const list = useMemo(() => {
    return [
      { href: '/', pathName: 'Home' },
      { href: '/nameregistry', pathName: 'Nameregistry' },
      { href: '/cloud', pathName: 'Cloud' },
    ];
  }, []);

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        {list.map((item, index) => (
          <NavLink
            key={index}
            href={`${item.href}`}
            exact
            className="nav-item nav-link"
          >
            {item.pathName}
          </NavLink>
        ))}
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
