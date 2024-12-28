import React, { useEffect, useRef } from "react";
import "./toptopicphone.css";

const TopTopicPhone = () => {
  const tipsRowRef = useRef(null);

  useEffect(() => {
    const tipsRow = tipsRowRef.current;

    if (!tipsRow) return;

    let scrollAmount = 0;
    const scrollStep = 5; // Faster scrolling for visibility
    const scrollInterval = 25;

    const autoScroll = () => {
      if (tipsRow) {
        scrollAmount += scrollStep;
        tipsRow.scrollLeft = scrollAmount;
    
        console.log("Scroll amount:", scrollAmount);
        console.log("Scroll width:", tipsRow.scrollWidth);
        console.log("Client width:", tipsRow.clientWidth);
    
        if (scrollAmount >= tipsRow.scrollWidth - tipsRow.clientWidth) {
          console.log("Resetting scroll to 0");
          scrollAmount = 0;
        }
      } else {
        console.log("tipsRow is null or undefined");
      }
    };
    

    const interval = setInterval(autoScroll, scrollInterval);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="tips-row-container">
      <div className="tips-container">
        <h3>Beauty Tips</h3>
        <h4>Tips for Maintaining Healthy and Glowing Skin</h4>
        <div className="tips-row" ref={tipsRowRef}>
          <div className="tip-card">
            <div className="icon">💧</div>
            <h4>Stay Hydrated</h4>
            <p>Drinking water is essential for glowing skin.</p>
          </div>
          <div className="tip-card">
            <div className="icon">🧴</div>
            <h4>Use Sunscreen</h4>
            <p>Protect your skin from harmful UV rays every day.</p>
          </div>
          <div className="tip-card">
            <div className="icon">😴</div>
            <h4>Get Enough Sleep</h4>
            <p>Sleeping well is key to healthy, refreshed skin.</p>
          </div>
          <div className="tip-card">
            <div className="icon">🥦</div>
            <h4>Eat Healthy</h4>
            <p>Nutrition plays a vital role in skin health.</p>
          </div>
          <div className="tip-card">
            <div className="icon">🧖‍♀️</div>
            <h4>Cleanse Regularly</h4>
            <p>Clean your face daily to remove dirt and excess oil.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTopicPhone;
