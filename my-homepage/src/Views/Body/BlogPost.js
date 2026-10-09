import React, { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import posts from '../../Posts';
import './BlogPost.css';

const formatDate = (date) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  return (
    <div className="post-page">
      <article className="post-container">
        <Link to="/projects" className="post-back">← Projects &amp; Blog</Link>
        {post ? (
          <>
            <header className="post-header">
              <h1 className="post-title">{post.title}</h1>
              <p className="post-date">{formatDate(post.date)}</p>
            </header>
            <div className="post-content">
              <Suspense fallback={<p className="post-loading">Loading…</p>}>
                <post.Component />
              </Suspense>
            </div>
          </>
        ) : (
          <header className="post-header">
            <h1 className="post-title">Post not found</h1>
          </header>
        )}
      </article>
    </div>
  );
};

export default BlogPost;
