import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-primary-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold">Budget App</Link>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-primary-200 transition-colors">Home</Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/dashboard" className="hover:text-primary-200 transition-colors">Dashboard</Link>
                </li>
                <li>
                  <button 
                    onClick={handleLogout}
                    className="hover:text-primary-200 transition-colors"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:text-primary-200 transition-colors">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-primary-200 transition-colors">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;