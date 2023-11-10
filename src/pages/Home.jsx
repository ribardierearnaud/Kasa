
import '../style/app.scss';
import Banner from '../components/Banner/banner';
import Gallery from '../components/Gallery/gallery';

const Home = () => {
  return (
      <div className="home">
          <Banner  />
          <Gallery />
      </div>
  );
};

export default Home;