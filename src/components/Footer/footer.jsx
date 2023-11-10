import { ReactComponent as Logo } from '../../medias/logo/logo-kasa.svg';

const Footer = () => {
    return (
        <div className="footer">
            <Logo className="white-logo" />
            <p>&copy; 2023 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;