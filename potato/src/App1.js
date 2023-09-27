import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Maths />
        {/* <Hello name="jan" />
        <Hello
          name="torbik"
          age={20}
        /> */}
      </header>
    </div>
  )
}

export default App
