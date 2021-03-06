import React from 'react';
import AppRouter from '../../features/AppRouter';
import { AppLayout } from '../AppLayout';
import './App.module.scss';

const App: React.FC = () => {
  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  );
};

export default App;
