import '../style/app.scss';
import Banner from '../components/Banner/banner';
import Gallery from '../components/Gallery/gallery';

const Home = () => {
  return (
      <main className="home">
          <Banner  />
          <Gallery />
      </main>
  );
};

export default Home;