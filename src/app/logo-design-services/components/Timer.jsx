import { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState({ hours: 11, minutes: 22, seconds: 11 });

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = { ...time };

      newTime.seconds++;
      if (newTime.seconds === 60) {
        newTime.seconds = 0;
        newTime.minutes++;
      }
      if (newTime.minutes === 60) {
        newTime.minutes = 0;
        newTime.hours++;
      }

      setTime(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const timerCircle = (radius, strokeColor, dashArray, text, textFontSize) => (
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" width={2 * radius} height={2 * radius}>
        <circle
          cx={radius}
          cy={radius}
          r={radius - 7}
          fill="none"
          stroke={strokeColor}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={dashArray}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h4 className={`text-${textFontSize} font-roboto uppercase`}>{text}</h4>
      </div>
    </div>
  );

  return (
    <div className="flex items-center text-center justify-center xl:justify-left lg:justify-left md:justify-left">
      <div className="mx-2 w-[100px] h-[100px]">
        {timerCircle(50, time.hours === 0 ? '#fcad1e' : '#666', `${283 * (time.hours / 12)} 283`, 'Hours', '7px')}
      </div>
      <div className="mx-2 w-[100px] h-[100px]">
        {timerCircle(50, time.minutes === 0 ? '#fcad1e' : '#666', `${283 * (time.minutes / 60)} 283`, 'Minutes', '7px')}
      </div>
      <div className="mx-2 w-[100px] h-[100px]">
        {timerCircle(50, '#fcad1e', `${283 * (time.seconds / 60)} 283`, 'Seconds', '7px')}
      </div>
    </div>
  );
}

export default Timer;
