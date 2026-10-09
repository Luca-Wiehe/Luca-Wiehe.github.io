import { lazy } from 'react';

// Blog post registry. Each post is a React component in this folder, so it can embed
// interactive widgets. Posts are code-split and only downloaded when opened.
const published = [];

// Drafts are listed during `npm start`. Production builds strip this whole branch,
// so draft titles and content never reach the deployed site.
const drafts = process.env.NODE_ENV === 'development' ? [
  {
    slug: 'hello-world',
    title: 'Writing Interactive Posts',
    date: '2026-10-09',
    summary: 'A template showing how to write a post with an embedded interactive widget.',
    thumbnail: '',
    draft: true,
    Component: lazy(() => import('./hello-world')),
  },
] : [];

const posts = [...published, ...drafts];

export default posts;
