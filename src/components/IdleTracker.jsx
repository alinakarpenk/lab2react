import React from 'react';
import useIdle from '../hooks/useIdle';  
import './IdleTracker.css'; 
function IdleTracker() {
  const isIdle = useIdle(5000);
  return (
    <div className="idle-tracker">
      {isIdle ? (
        <p className="no-message">Неактивний</p>
      ) : (
        <p className="yes-message">Активний</p>
      )}
    </div>
  );
}
export default IdleTracker;
