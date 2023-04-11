import React, { useState } from "react";
import "./TabBar.css";

function TabBar() {
  const [inboxCount, setInboxCount] = useState(0); // Initial count of entries in inbox tab
  const [sentCount, setSentCount] = useState(0); // Initial count of entries in sent tab

  // Function to update the count of entries in the inbox tab
  const updateInboxCount = () => {
    setInboxCount(inboxCount + 1);
  };

  // Function to update the count of entries in the sent tab
  const updateSentCount = () => {
    setSentCount(sentCount + 1);
  };

  return (
    <div className="tab-bar">
      <div className="tab">
        All Entries
        <span className="badge">{inboxCount}</span>
      </div>
      <div className="tab">
        Favourites
        <span className="badge">{sentCount}</span>
      </div>
    </div>
  );
}

export default TabBar;
