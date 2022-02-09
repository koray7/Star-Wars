import './App.css';
import StarshipPage from './components/StarshipPage';
import StarshipsList from './components/StarshipsList.jsx'
import { Route, Routes } from 'react-router-dom';
import Main from "./components/Main"


function App() {
  return (
  <div className="App">
    <h1>~StarWars~</h1>
      <main>   
      <Main />
      <Routes>

        <Route path="/page" element={ <StarshipPage /> } />
        <Route path="/list" element={ <StarshipsList /> } />

        <Route path="/ships/:uid" element={<StarshipPage />} />
        <Route path="/ships" element={<StarshipsList /> } />

      </Routes> 
</main>
</div>
  );
}

export default App;
