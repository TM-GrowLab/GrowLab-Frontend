import { useNavigate } from 'react-router-dom';

export const LogoutButton: React.FC = () => {

    const navigate = useNavigate();

    const handleNavigateHomePage = () => {
        navigate('/');
    }

    const logout = () => {
        localStorage.removeItem('token');
        handleNavigateHomePage(); 
    };
    
    return (
        <button className="sec_button" onClick={logout}>Logout</button>
    );
}
