import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function User() {
  const [user, setUser] = useState({});
  // const { userId }  = useParams();

  const userId = useSelector(state => state.session.user.id)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>Name</strong> {user.name}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      <li>
        <strong>Foster?</strong> {user.foster === true ? 'Yes' : 'No'}
      </li>
    </ul>
  );
}
export default User;
