import './App.css'
import CharactersList from './components/CharactersList';
import NumberOfCharacters from './components/NumberOfCharacters';
import characters from './data/characters.json';
import AboutPage from './pages/AboutPage';
import CharactersPage from './pages/CharactersPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      {/* <AboutPage /> */}
      {/* <ContactPage /> */}
      <CharactersPage />

      {/* <h1>Marvel Characters</h1>
      <CharactersList characters={characters} />
      <br/>
      <NumberOfCharacters characters={characters} /> */}
    </>
  );
}

export default App;