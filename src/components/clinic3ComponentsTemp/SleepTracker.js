import React, { useState, useEffect } from 'react';



const SleepTracker = () => {
  const [startTime, setStartTime] = useState(null);
  const [sleepData, setSleepData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isSleeping, setIsSleeping] = useState(false);

  useEffect(() => {
    let interval;
    if (isSleeping) {
      interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setCounter(0); 
    }

    return () => clearInterval(interval);
  }, [isSleeping]);

  const handleSleep = () => {
    setStartTime(new Date());
    setIsSleeping(true);
    setCounter(0); 
  };

  const handleWakeUp = () => {
    if (startTime) {
      const endTime = new Date();
      const durationInSeconds = Math.floor((endTime - startTime) / 1000); 
      const today = new Date().toLocaleDateString();

      const hours = Math.floor(durationInSeconds / 3600);
      const minutes = Math.floor((durationInSeconds % 3600) / 60);
      const seconds = durationInSeconds % 60;

      setSleepData((prevData) => [
        ...prevData.slice(-6), 
        {
          date: today,
          duration: `${hours}h ${minutes}m ${seconds}s`,
        },
      ]);

      setStartTime(null);
      setIsSleeping(false);
      setCounter(0); 
    }
  };

  const handleRefresh = () => {
    setSleepData([]);
    setIsSleeping(false);
    setCounter(0);
  };

  const formatCounter = (counter) => {
    const hours = Math.floor(counter / 3600);
    const minutes = Math.floor((counter % 3600) / 60);
    const seconds = counter % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="sleep-tracker">
      <h1>Sleep Tracker</h1>
      <div className="buttons">
        <button onClick={handleSleep} className="sleep-btn" disabled={isSleeping}>
          Sleep
        </button>
        <button onClick={handleWakeUp} className="wake-btn" disabled={!isSleeping}>
          Wake Up
        </button>
      </div>

      {isSleeping && (
        <div className="counter">
          <h2>Sleeping... ⏳ {formatCounter(counter)}</h2>
        </div>
      )}

      <div className="data-container">
        <h2>Weekly Sleep Data</h2>
        {sleepData.length > 0 ? (
          <ul>
            {sleepData.map((entry, index) => (
              <li key={index}>
                {entry.date}: {entry.duration}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data recorded yet.</p>
        )}
      </div>
      <button onClick={handleRefresh} className="refresh-btn">
        Refresh
      </button>
    </div>
  );
};

export default SleepTracker;
