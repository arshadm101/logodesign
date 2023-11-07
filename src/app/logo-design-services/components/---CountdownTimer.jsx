import { useState, useEffect } from 'react';

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const TIME_LIMIT = 7200; // 2 hours

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timeLeft]);

  const calculateTimeFraction = () => {
    return (timeLeft / TIME_LIMIT);
  };

  const setCircleDasharray = () => {
    const circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
    return circleDasharray;
  };

  const remainingPathColor = () => {
    if (timeLeft <= ALERT_THRESHOLD) return '#666';
    if (timeLeft <= WARNING_THRESHOLD) return '#fcad1e';
    return '#fcad1e';
  };

  const formatTime = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="base-timer">
      <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
          <path
            id="base-timer-path-remaining"
            strokeDasharray={setCircleDasharray()}
            fill="none"
            className={`base-timer__path-remaining ${remainingPathColor()}`}
            d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
          />
        </g>
      </svg>
      <span id="base-timer-label" className="base-timer__label">
        {formatTime()}
      </span>
    </div>
  );
}

export default CountdownTimer;
