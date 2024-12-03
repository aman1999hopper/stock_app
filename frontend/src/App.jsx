import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../src/routes/AppRoutes.jsx';

function App() {
  return (
    <Router>
      <div>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
