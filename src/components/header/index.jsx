import styles from './header.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isMainPage = location.pathname === '/';

    return (
        <header className={ styles.header }> 
            <h1 className={ styles.title }>
                { isMainPage ? 'Сборник рецептов из разных стран мира' : 'Наименование блюда' }
            </h1>
        </header>
    )
};

export default Header;