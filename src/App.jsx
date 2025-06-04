
function App() {
  

  return (
    <main id="game-container">
      <div id="players">
        <ol>
          <li>
            <span className="player">
          <span className="players-name">player 1</span>
          <span className="players-symbol">X</span>
          <button>Edit</button>
          </span>
          </li>
          <li>
          <span className="player">
          <span className="players-name">player 2</span>
          <span className="players-symbol">X</span>
          <button>Edit</button>
          </span>
          </li>
        </ol>

      </div>
    
    </main>
  )
}

export default App
