import React from 'react';
import { Main } from '../AppLayout';
import Button from '../Button';

const Error404: React.FC = () => {
  return (
    <Main>
      <>
        <div>403</div>
        <div>You don`t have permission</div>
        <Button btnText="Go to home" />
      </>
    </Main>
  );
};

export default Error404;
