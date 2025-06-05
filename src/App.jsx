import Gameboard from "./components/Gameboard"
import Player from "./components/player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player 1" symbol="X"/>
          <Player name="player 2" symbol="Y"/>
        </ol>
<Gameboard/>
      </div>
    
    </main>
  )
}

export default App
