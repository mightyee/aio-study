import './App.css';
import Header from './components/Common/Header/Header.jsx';
import FloatingButton from './components/FloatingButton/FloatingButton';
import Footer from './components/Common/Footer/Footer';
import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar';
import Course from './components/Course/Course';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SearchBar />
      <Course />
      <FloatingButton />
      <Footer />
    </div>
  );
}

export default App;
