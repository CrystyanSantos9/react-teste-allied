import logo from './logo.svg';
import './App.css';
import { CardPlan, CardPlanRow } from './components/styled.components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Planos</h1>
      <CardPlanRow>
        <CardPlan>
          Olha
        </CardPlan>
        <CardPlan>
          Olha
        </CardPlan>
        <CardPlan>
          Olha
        </CardPlan>
      </CardPlanRow>
      </header>
      
    </div>
  );
}

export default App;
