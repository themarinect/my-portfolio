import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
      <div id='colorlib-page'>

        <div id='container-wrap'>

          <Sidebar></Sidebar>

          <div id='colorlib-main'>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Experience></Experience>
          </div>

        </div>

      </div>
  );
}

export default App;
