import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
   <Router>
     <MainComponent/>
   </Router>
  );
}

export default App;
