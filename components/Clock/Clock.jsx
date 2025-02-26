import { useEffect, useState } from 'react';
import { nowToHHMM } from '../../utils/date.js';
import Txt from '../ui/Txt/Txt.jsx';

import { s } from './Clock.style.js';

export default function Clock() {
  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  return <Txt style={s.time}>{time}</Txt>;
}
