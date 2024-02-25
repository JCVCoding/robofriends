import React, { memo } from 'react';
import CounterButton from './CounterButton';

const Header = memo(function Header() {
  return (
    <>
      <h1 className='f1'>RoboFriends</h1>
      <CounterButton />
    </>
  );
});
export default Header;
