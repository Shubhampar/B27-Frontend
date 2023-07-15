import './App.css';
import {Signup} from "./components/Signup"
import {Login} from "./components/Login"
import {Note} from "./components/Note"
import { Routes,Route } from 'react-router-dom';
import { Notes } from './components/Notes';

function App() {
  return (
    <div className="App">
      <h2>Notes Taking Application</h2>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/note" element={<Note/>}/>
        <Route path="/notes" element={<Notes/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
