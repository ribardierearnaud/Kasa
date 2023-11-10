import bannerAbout from './images/bannerAbout.webp';
import bannerHome from './images/bannerHome.webp';

const Banner = () => {
    return (
        <>
            {window.location.pathname === "/" ? (
                <div className="banner">
                    <img src={bannerHome} alt="La bannière de la page d'Accueil"/>
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            ) : (
                <div className="banner">
                    <img src={bannerAbout} alt="La bannière de la page à propos"/>
                </div>
            )}
        </>
    );
};

export default Banner;