import { useState, useEffect } from 'react';
import fetchUsers from '../services/api';
import { User } from '../types/types';

/**
 * Custm hooks to fecth data from an API.
 * @returns {object} - return data, loading
 */
const useFetchUsrData = (): { data: User[] | null; loading: boolean; } => {
  const [data, setData] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetchUsers();
      setData(response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default useFetchUsrData;