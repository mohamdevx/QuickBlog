import React, { useEffect, useState } from 'react';
import { assets, dashboard_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';

const Dashboard = () => {
  // Initialize recentBlogs as empty array to avoid undefined error
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [], // <-- added this
  });

  useEffect(() => {
    setDashboardData(dashboard_data);
  }, []);

  // You mentioned fetchDashboardData in BlogTableItem, define it or stub it if needed
  const fetchDashboardData = () => {
    // You can implement this later for refreshing data if you want
    setDashboardData(dashboard_data);
  };

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
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
          <img src={assets.dashboard_icon_4} alt='' />
          <p>Latest Blogs</p>
        </div>
        <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-gray-600 text-left uppercase'>
              <tr>
                <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                <th scope='col' className='px-2 py-4'>Blog Title</th>
                <th scope='col' className='px-2 py-4 max:sm:hidden'>Date</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                <th scope='col' className='px-2 py-4'>Action</th>
              </tr>
            </thead>
            <tbody>
              {(dashboardData.recentBlogs ?? []).map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboardData}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
