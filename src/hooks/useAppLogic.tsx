'use client'
import { useState, useEffect } from 'react';
import { fetchData } from '@/services/apiService';
import { Content } from '@/types/types';

const useAppLogic = () => {
  const [data, setData] = useState<Content | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setData(data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const condition = window.innerWidth < 430;
      setShowMobileMenu(condition);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial condition

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { data, showMobileMenu };
};

export default useAppLogic;
