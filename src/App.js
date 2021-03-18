import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={RegisterPage} />
            </Router>
        </div>
    );
}

export default App;
