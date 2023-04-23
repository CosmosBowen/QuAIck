import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import { _4 } from './components/_4/_4';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${classes.root}`}>
      <_4 />
    </div>
  );
});
