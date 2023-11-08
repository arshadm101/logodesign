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
          stroke={strokeColor} // Change the color here
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
    <div className="flex items-center text-center justify-center xl:justify-start lg:justify-start md:justify-start">
      <div className="mx-2 w-[65px] py-[10px] rounded-[50%] border-solid border-[5px] border-[#666]" >
        <h4 className="text-[7px] font-roboto uppercase">Hours</h4>
        <span className="font-bold">{time.hours.toString().padStart(2, '0')}</span>
      </div>
      <div className="mx-2 w-[65px] py-[10px] rounded-[50%] border-solid border-[5px] border-[#666]">
        <h4 className="text-[7px] font-roboto uppercase">Minutes</h4>
        <span className="font-bold">{time.minutes.toString().padStart(2, '0')}</span>
      </div>
      <div className="mx-2 w-[65px] py-[10px] rounded-[50%] border-solid border-[5px] border-[#fcad1e]">
        <h4 className="text-[7px] font-roboto uppercase">Seconds</h4>
        <span className="font-bold">{time.seconds.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export default Timer;
