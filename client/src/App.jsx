import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import DashboardPage from './pages/dashboard/DashboardPage';

import ShootersPage from './pages/shooters/ShootersPage';
import CreateShootersSection from './pages/shooters/CreateShootersPage';
import EditShootersSection from './pages/shooters/EditShootersPage';

import ShooterPage from './pages/shooters/ShooterPage';

import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import HomePage from './pages/landingpage/HomePage';

import ProtectedRoute from './ProtectedRoute';
import SettingsPage from './pages/settings/SettingsPage';
import ProfilePage from './pages/profile/ProfilePage';
import { ShootersProvider } from './context/ShootersContext';

const App = () => {


  return (
    <AuthProvider>
      <ShootersProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<DashboardPage />} />

              <Route path="/shooters" element={<ShootersPage />} />
              <Route path="/shooters/new" element={<CreateShootersSection />} />
              <Route path="/shooters/edit/:id" element={<EditShootersSection />} />

              <Route path="/shooter/:id" element={<ShooterPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShootersProvider>
    </AuthProvider>
  );
};

export default App;
