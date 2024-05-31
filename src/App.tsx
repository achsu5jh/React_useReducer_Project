import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CounterUseReducer from './components/CounterUseReducer';
import './App.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='count-reducer'>
        <div>
          <h1>React Counter Example using useReducer</h1>
          <CounterUseReducer />
        </div>
      </div>
    </Provider>
  );
};

export default App;
