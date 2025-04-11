import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';
import { TimerPadre } from './components/TimerPadre';

function App() {
  return (
    <div>
      <h1>
        React + Typescript
      </h1>
      <hr />

      <h3 className="mt-5">UseState</h3>
  
      <Counter/>

      <Usuario/>

      <h3>UseEffect | UseRef</h3>
      <hr />

      <TimerPadre/>
      
    </div>
  );
}

export default App;
