import EventCatalog from '../Components/EventCatalog';
import Header from '../Components/Header';
import SearchBanner from '../Components/SearchBanner';

const Home = () => {

  return (
    <div>
      <Header />
      <SearchBanner/>
      <EventCatalog />
    </div>
  )
}

export default Home
