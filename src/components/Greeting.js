import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/messages/greetingSlice';

export default function Greeting() {
  const message = useSelector((state) => state.greeting.message);
  const loading = useSelector((state) => state.greeting.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{message?.greeting}</p>
      )}
    </div>
  );
}
