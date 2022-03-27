import Discover from './components/Discover/Discover';
import Header from './components/Header/Header';
import Nav from './components/nav/Nav';
import Popular from './components/Popular/Popular';
import logo from './logo.svg';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Popular />
      <Discover />
    </div>
  );
}

export default App;
