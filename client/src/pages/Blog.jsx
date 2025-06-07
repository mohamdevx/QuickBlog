import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, blog_data, comments_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import Moment from 'moment';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const fetchBlogData = async () => {
    const blog = blog_data.find(item => item._id === id);
    setData(blog);
  };

  const fetchComments = async () => {
    setComments(comments_data);
  };

  const addComment = async (e) => {
    e.preventDefault();
    // TODO: Handle new comment submission
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, [id]);

  return data ? (
    <div className='relative'>
      <img
        src={assets.gradientBackground}
        className='absolute top-0 -z-10 opacity-50 w-full'
        alt='background'
      />
      <Navbar />

      {/* Blog Header */}
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary py-4 font-medium'>
          Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>
          {data.title}
        </h1>
        <h2 className='my-5 max-w-lg mx-auto text-lg text-gray-500'>
          {data.subtitle}
        </h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>
          Michael Brown
        </p>
      </div>

      {/* Blog Content */}
      <div className='mx-5 max-w-5xl md:mx-auto my-1 mt-6'>
        <img src={data.image} alt='' className='rounded-3xl mb-5' />
        <div
          className='rich-text max-w-3xl mx-auto'
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
      </div>

      {/* Comments Section */}
      <div className='mt-14 mb-10 max-w-3xl mx-auto'>
        <p className='font-semibold mb-4'>Comments ({comments.length})</p>
        <div className='flex flex-col gap-4'>
          {comments.map((item, index) => (
            <div
              key={index}
              className='relative bg-primary/5 border border-primary/10 max-w-xl p-4 rounded text-gray-600'
            >
              <div className='flex items-center gap-3 mb-2'>
                <img src={assets.user_icon} alt='' className='w-6 h-6 rounded-full' />
                <p className='font-medium'>{item.name}</p>
              </div>
              <p className='text-sm ml-8'>{item.content}</p>
              <div className='absolute right-4 bottom-3 text-xs text-gray-400'>
                {Moment(item.createdAt).fromNow()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Comment Section */}
      <div className='max-w-3xl mx-auto mb-20'>
        <p className='font-semibold mb-4'>Add Your Comment</p>
        <form
          onSubmit={addComment}
          className='flex flex-col items-start gap-4 max-w-lg'
        >
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type='text'
            placeholder='Name'
            required
            className='w-full p-2 border border-gray-300 rounded outline-none'
          />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder='Comment'
            required
            className='w-full p-2 border border-gray-300 rounded outline-none h-48'
          ></textarea>
          <button
            type='submit'
            className='bg-primary text-white rounded p-2 px-8 hover:scale-105 transition-all cursor-pointer'
          >
            Submit
          </button>
        </form>
      </div>

      {/* Share Buttons */}
      <div className='my-24 max-w-3xl mx-auto'>
        <p className='font-semibold my-4'>Share this article on social media</p>
        <div className='flex gap-4'>
          <img src={assets.facebook_icon} width={50} alt='Facebook' />
          <img src={assets.twitter_icon} width={50} alt='Twitter' />
          <img src={assets.googleplus_icon} width={50} alt='Google Plus' />
        </div>
      </div>

      <Footer />
    </div>
  ) :<Loader/>
};

export default Blog;
