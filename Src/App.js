import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MenstrualCycleTracking from './components/MenstrualCycleTracking';
import OvulationPrediction from './components/OvulationPrediction';
import PregnancyMonitoring from './components/PregnancyMonitoring';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import Login from './components/Login';
import Register from './components/Register';
import api from './utils/api';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const user = await api.login(email, password);
      setCurrentUser(user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegister = async (userData) => {
    try {
      const user = await api.register(userData);
      setCurrentUser(user);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation or header component */}
        {currentUser ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button onClick={() => handleLogin('user@example.com', 'password')}>
              Login
            </button>
            <button onClick={() => handleRegister({ email: 'newuser@example.com', password: 'password' })}>
              Register
            </button>
          </>
        )}

        <Switch>
          <Route path="/dashboard">
            <Dashboard user={currentUser} />
          </Route>
          <Route path="/menstrual-cycle-tracking">
            <MenstrualCycleTracking user={currentUser} />
          </Route>
          <Route path="/ovulation-prediction">
            <OvulationPrediction user={currentUser} />
          </Route>
          <Route path="/pregnancy-monitoring">
            <PregnancyMonitoring user={currentUser} />
          </Route>
          <Route path="/personalized-recommendations">
            <PersonalizedRecommendations user={currentUser} />
          </Route>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/">
            <Dashboard user={currentUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
