import React, { useState, useEffect } from "react";
function useLocalUser() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    try {
      const user = localStorage.user;
      setUser(JSON.stringify(user));
    } catch (e) {}
  }, []);
  return user;
}

export default useLocalUser;
