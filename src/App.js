import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import BillDashboard from './components/BillDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container my-4">
        <BillDashboard />
      </div>
    </Provider>
  );
};

export default App;
