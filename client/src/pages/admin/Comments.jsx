import React, { useEffect, useState } from 'react';
import CommentTable from '../../components/admin/CommentTable';
import { comments_data } from '../../assets/assets'; // ✅ correct import

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState('Not Approved');

  const fetchComments = async () => {
    setComments(comments_data); // ✅ using correct data
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <div className='flex justify-between items-center max-w-3xl'>
        <h1>Comments</h1>
        <div className='flex gap-4'>
          <button onClick={() => setFilter('Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 text-xs cursor-pointer ${filter === 'Approved' ? 'text-primary' : 'text-gray-700'}`}>
            Approved
          </button>
          <button onClick={() => setFilter('Not Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 text-xs cursor-pointer ${filter === 'Not Approved' ? 'text-primary' : 'text-gray-700'}`}>
            Not Approved
          </button>
        </div>
      </div>

      <div className='relative max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase'>
            <tr>
              <th className='px-6 py-3'>Blog Title & Comment</th>
              <th className='px-6 py-3 max-sm:hidden'>Date</th>
              <th className='px-6 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {comments
              .filter(comment => filter === 'Approved' ? comment.isApproved : !comment.isApproved)
              .map((comment) => (
                <CommentTable
                  key={comment._id}
                  comment={comment}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
