import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import finnHub from '../apis/finnHub';

const StockDetailPage = () => {

  const { symbol } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const date = new Date()
      const currentTime = Math.floor(date.getTime() / 1000)
      const oneDay = currentTime - 3 * 24 * 60 * 60;
      const response = await finnHub.get("/stock/candle", {
        params: {
          symbol,
          from: oneDay,
          to: currentTime,
          resolution: 30
        }
      })
      console.log(response);
    }
    fetchData();
  }, [])

  return (
    <div>StockDetailPage {symbol} </div>
  )
}

export default StockDetailPage;