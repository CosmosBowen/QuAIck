import axios from 'axios';
import { memo } from 'react';
import { useState } from 'react';
import type { FC } from 'react';

import classes from './_4.module.css';
import { DuckIcon } from './DuckIcon.js';
import { VectorIcon } from './VectorIcon.js';

var AIText = "Hi! I am your AI Friend. Im here to help you use AI safely";

function useForceUpdate(){
  const [value, setValue] = useState(0);
  return () => setValue(value => value + 1);
}

interface Props {
  className?: string;
}
/* @figmaId 5:17 */
export const _4: FC<Props> = memo(function _4(props = {}) {
  const forceUpdate = useForceUpdate();
  function detectClick(option: any) {
    if (AIText == "...") return;
    
    var chatString;

    if (option == "optionA") {
      chatString = "Would you like to play a game?";
    } else {
      chatString = "Tell me a funny short story.";
    }

    AIText = "...";
    forceUpdate();

    axios.post('http://localhost:8080', { 
      data: chatString
    }).then(response => {
      AIText = JSON.stringify(response.data.content);
      forceUpdate();
    })
    .catch(error => {
      console.log(error.message);
    });
  }
  return (
    <div className={classes.root}>
      <div className={classes.rectangle8} onClick={() => detectClick('optionA')}></div>
      <div className={classes.rectangle9} onClick={() => detectClick('optionB')}></div>
      <div className={classes.chatWithMe} onClick={() => detectClick('optionB')}>Chat with me</div>
      <div className={classes.playAGame} onClick={() => detectClick('optionA')}>Play a game</div>
      <div className={classes.duck}>
        <DuckIcon className={classes.icon} />
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon2} />
      </div>
      <div className={classes.hiIAmYourAIFriendImHereToHelpY} id="AIText">
        {AIText}
      </div>
    </div>
  );
});
