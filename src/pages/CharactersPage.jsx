import characters from '../data/characters.json';
import CharactersList from "../components/CharactersList";

const CharactersPage = () => {
    // change the title of the page
    document.title = "Characters | Marvel App";

    return (
        <>
            <h2>Marvel Characters</h2>
            <CharactersList characters={characters} />
        </>
    );
};

export default CharactersPage;