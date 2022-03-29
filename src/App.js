import{Provider}from'react-redux'
import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter as Router } from "react-router-dom";
import {ConfigureStore} from './redux/configureStore'
const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainComponent />
      </Router>
    </Provider>
  );
}

export default App;
