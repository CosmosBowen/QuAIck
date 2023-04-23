import { memo } from 'react';
import type { FC } from 'react';

import classes from './_5.module.css';
import { DuckIcon } from './DuckIcon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 54:22 */
export const _5: FC<Props> = memo(function _5(props = {}) {
  return (
    <div className={classes.root_5}>
      <div className={classes.frame1}>
        <div className={classes.duck}>
          <DuckIcon className={classes.icon} />
        </div>
        <div className={classes.frame3}>
          <div className={classes.vector}>
            <VectorIcon className={classes.icon2} />
          </div>
          <div className={classes.hiIAmYourAIFriendImHereToHelpY}>
            Hi! I am your AI Friend. Im here to help you use AI safely
          </div>
        </div>
      </div>
      <div className={classes.frame2}>
        <div className={classes.rectangle8}></div>
        <div className={classes.rectangle9}></div>
        <div className={classes.chatWithMe}>Chat with me</div>
        <div className={classes.playAGame}>Play a game</div>
      </div>
    </div>
  );
});
