import Header from './Header';
import PinderCards from './PinderCards';
import SwipeButtons from './SwipeButtons';


function Home() {
  return (
    <div className="App">
      {/** App Header */}
      <Header />
      {/** App Cards */}
      <PinderCards/>
      {/** App Swipe buttons */}
      <SwipeButtons/>
    </div>
  );
}

export default Home;
