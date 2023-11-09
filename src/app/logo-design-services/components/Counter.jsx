import { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState({ hours: 16, minutes: 22, seconds: 0 });

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

  
  const timerCircle = (radius, borderColor, fillColor, dashArray, text, textFontSize, animated, timeText) => (
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" width={2 * radius} height={2 * radius}>
        {/* Border Circle */}
        <circle
          cx={radius}
          cy={radius}
          r={radius - 5}
          fill="none"
          stroke="#666"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="330 360"
          transform={`rotate(-90 ${radius} ${radius})`}
        />
  
        {/* Timer Circle */}
        {animated ? (
          <circle
            cx={radius}
            cy={radius}
            r={radius - 5}
            fill="none"
            stroke={fillColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={dashArray}
            transform={`rotate(-90 ${radius} ${radius})`}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 ${radius} ${radius}"
              to="360 ${radius} ${radius}"
              dur={`${3600 * (animated === 'hours' ? 12 : 60)}s`}
              repeatCount="indefinite"
            />
          </circle>
        ) : (
          <circle
            cx={radius}
            cy={radius}
            r={radius - 5}
            fill="none"
            stroke="#666"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="330 360"
            transform={`rotate(-90 ${radius} ${radius})`}
          />
        )}
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h4 className={`text-[7px] font-roboto uppercase`}>{text}</h4>
        <span className="font-bold">{timeText}</span>
      </div>
    </div>
  );
  
  

  return (
    <div className="flex items-center text-center justify-center xl:justify-start lg:justify-start md:justify-start">
  <div className="mx-2">
    {timerCircle(35, '#666', '#fcad1e', `${(time.hours % 12) * 30} 360`, 'Hours', '7', 'hours', time.hours.toString().padStart(2, '0'))}
  </div>
  <div className="mx-2">
    {timerCircle(35, '#666', '#fcad1e', `${time.minutes * 6} 360`, 'Minutes', '7', 'minutes', time.minutes.toString().padStart(2, '0'))}
  </div>
  <div className="mx-2">
    {timerCircle(35, '#666', '#fcad1e', `${time.seconds * 6} 360`, 'Seconds', '7', 'seconds', time.seconds.toString().padStart(2, '0'))}
  </div>
</div>

  );
}

export default Timer;
