import { useContext } from "react";

import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";

import { GameContext } from "./context/GameContext";
// https://excalidraw.com/#room=44bb359678e932bfa950,iYqP4oUClXy1Dcheay4DUA

export default function App() {

  const { generateNewGame, throwDice, actualPosition, dice } = useContext(GameContext);



  return (
    <div>

      <Input type="password" label="Password" />
      <Input type="text" label="Username" />

      <Button label="Click me" />
      <button onClick={generateNewGame}>generateNewGame</button>
      <button onClick={throwDice}>throwDice: {dice}</button>

      <div>
        <p>Current Position: {actualPosition}</p>
      </div>

      <div className="flex">
        <Card value={1} type="fire" />

      </div>
    </div>
  );
}
