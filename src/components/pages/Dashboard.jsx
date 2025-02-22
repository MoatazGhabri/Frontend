import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    } else {
      window.location.href = "/signin"; 
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <p className="text-gray-600">Welcome to your dashboard!</p>
     
        <p className="mt-4">Email: <span className="font-bold">{userEmail}</span></p>
     
    </div>
  );
}

export default Dashboard;
