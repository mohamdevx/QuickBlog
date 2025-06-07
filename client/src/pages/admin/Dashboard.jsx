import React, { useEffect, useState } from 'react';
import { assets, dashboard_data } from '../../assets/assets';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
  });

  useEffect(() => {
    setDashboardData(dashboard_data);
  }, []);

  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
      <div className='flex flex-wrap gap-4'>

        {/* Blogs */}
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded-2xl shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_1} alt='icon' />
          <div>
            <p className='text-xl font-semibold text-gray-600'>
              {dashboardData.blogs}
            </p>
            <p className='text-gray-400 font-light'>Blogs</p>
          </div>
        </div>

        {/* Comments */}
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded-2xl shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_2} alt='icon' />
          <div>
            <p className='text-xl font-semibold text-gray-600'>
              {dashboardData.comments}
            </p>
            <p className='text-gray-400 font-light'>Comments</p>
          </div>
        </div>

        {/* Drafts */}
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded-2xl shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_3} alt='icon' />
          <div>
            <p className='text-xl font-semibold text-gray-600'>
              {dashboardData.drafts}
            </p>
            <p className='text-gray-400 font-light'>Drafts</p>
          </div>
        </div>

      </div>

      <div>
        <div className='flex items-'>
          <img src={assets.dashboard_icon_4} alt='' />
          <p>Latest Blods</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
