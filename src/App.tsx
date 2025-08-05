import ReactPlayground from './ReactPlayground';
import "./assets/styles/App.less"
import { PlaygroundProvider } from './ReactPlayground/PlaygroundContext';

function App() {

  return (
    <PlaygroundProvider>
      <ReactPlayground />
    </PlaygroundProvider>
  )
}

export default App

