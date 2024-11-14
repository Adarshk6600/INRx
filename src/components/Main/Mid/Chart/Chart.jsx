import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import './Chart.css';
import React, { useState } from 'react';

const Chart = () => {
  const products = [

    { name: '1 pm', product1: 4000 },
    { name: '7 pm', product1: 3000 },
    { name: '10 pm', product1: 2000 },
    { name: '1 am', product1: 1000 },
    { name: '4 am', product1: 0 },
    { name: '7 am', product1: 0 },
    { name: '10 am', product1: 0 }
  ];

  const [showTabs, setShowTabs] = useState(1);

  const toggleTabHandle = (index) => {
    setShowTabs(index);
  };

  return (
    <div className='chart__main'>
      <div className="chart__tabs">
        <span>
          <li onClick={() => toggleTabHandle(1)} className={showTabs === 1 ? 'show__border__tabs' : ''}>
            Portfolio Performance
          </li>
          <li onClick={() => toggleTabHandle(2)} className={showTabs === 2 ? 'show__border__tabs' : ''}>
            Statics
          </li>
          <li onClick={() => toggleTabHandle(3)} className={showTabs === 3 ? 'show__border__tabs' : ''}>
            Transactions
          </li>
        </span>
        <span>
          <li>24H</li>
          <li>1W</li>
          <li>1M</li>
          <li>1Y</li>
          <li>All</li>
        </span>
      </div>

      <div id="chart__tabs__container">
        <div className={showTabs === 1 ? 'show__hidden__tab' : 'hide__hidden__tabs'}>
          <ResponsiveContainer height="100%" width='100%'>
            <AreaChart height={300} width={500} data={products}>
              <CartesianGrid strokeLinecap="0 3" vertical={false} /> {/* Added grid lines */}
              <YAxis />
              <XAxis dataKey='name' />
              <Area type={'monotone'} dataKey="product1" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className={showTabs === 2 ? 'show__hidden__tab' : 'hide__hidden__tabs'}>2</div>
        <div className={showTabs === 3 ? 'show__hidden__tab' : 'hide__hidden__tabs'}>3</div>
      </div >
    </div >
  );
};

export default Chart;
