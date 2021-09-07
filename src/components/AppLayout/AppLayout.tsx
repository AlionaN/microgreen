/* eslint-disable import/prefer-default-export */
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
};
