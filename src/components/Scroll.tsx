import { ReactElement } from 'react';

const Scroll = ({ children }: { children: ReactElement }) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid black',
        height: '915px',
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
