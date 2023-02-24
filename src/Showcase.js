import favImage from "./images/bulbasaur.jpg";
import styles from "./App.css";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={favImage} alt={favPokemon} />
      <h2>
        {favPokemon}'s type is{" "}
        <span className={styles.background}>{pokeCharacteristics.type}</span>
        and one of their move is{" "}
        <span className={styles.background}>{pokeCharacteristics.move}.</span>
      </h2>
    </div>
  );
}
export default Showcase;
