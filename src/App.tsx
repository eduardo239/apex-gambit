import { useContext } from "react";
import { GameContext } from "./context/GameContext";

import Button from "./components/Button";
import Input from "./components/Input";
import Score from "./components/Score";
import Options from "./components/Options";
import Info from "./components/Info";
import Deck from "./components/Deck";
import Table from "./components/Table";
import Items from "./components/Items";

// https://excalidraw.com/#room=44bb359678e932bfa950,iYqP4oUClXy1Dcheay4DUA

export default function App() {

  const { generateNewGame, throwDice, actualPosition, dice } = useContext(GameContext);



  return (
    <div>
      <div className="grid">
        <div className="grid-item grid-score">

          <Score />
          <Options />
          <Info />
        </div>

        <div className="grid-item grid-deck">
          <Items />
          <Table />
          <Deck />
        </div>
      </div>
      <hr />
      <Input type="password" label="Password" />
      <Input type="text" label="Username" />

      <Button label="Click me" />
      <button onClick={generateNewGame}>generateNewGame</button>
      <button onClick={throwDice}>throwDice: {dice}</button>

      <div>
        <p>Current Position: {actualPosition}</p>
      </div>


    </div>
  );
}
