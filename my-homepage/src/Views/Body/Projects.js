import React, { useState } from 'react';
import projectsData from '../../Constants/projects.json';
import posts from '../../Posts';
import EntryRow from '../../UiComponents/EntryRow';
import './Projects.css';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'project', label: 'Projects' },
  { key: 'post', label: 'Posts' },
];

// Projects only carry a year, posts a full date; ISO strings sort correctly either way
const entries = [
  ...projectsData.projects.map((project) => ({
    type: 'project',
    key: `project-${project.title}`,
    sortKey: project.year,
    title: project.title,
    year: project.year,
    meta: [project.year, project.tech].filter(Boolean).join(' · '),
    description: project.description,
    thumbnail: project.thumbnail,
    links: Object.entries(project.links || {}).filter(([, url]) => url),
  })),
  ...posts.map((post) => ({
    type: 'post',
    key: `post-${post.slug}`,
    sortKey: post.date,
    title: post.draft ? `${post.title} (draft)` : post.title,
    year: post.date.slice(0, 4),
    meta: new Date(`${post.date}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    description: post.summary,
    thumbnail: post.thumbnail,
    href: `/blog/${post.slug}`,
    links: [],
  })),
].sort((a, b) => b.sortKey.localeCompare(a.sortKey));

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const hasBothTypes = entries.some((e) => e.type === 'post') && entries.some((e) => e.type === 'project');
  const visible = entries.filter((e) => filter === 'all' || e.type === filter);

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1 className="page-title">Projects &amp; Blog</h1>
      </div>

      <div className="projects-container">
        {hasBothTypes && (
          <div className="list-filters" role="tablist">
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                role="tab"
                aria-selected={filter === key}
                className={`list-filter ${filter === key ? 'active' : ''}`}
                onClick={() => setFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <ul className="entry-list">
          {visible.map((entry) => (
            <EntryRow
              key={entry.key}
              label={hasBothTypes ? (entry.type === 'post' ? 'Post' : 'Project') : undefined}
              thumbnail={entry.thumbnail}
              fallback={entry.year}
              title={entry.title}
              href={entry.href || (entry.links.length > 0 ? entry.links[0][1] : undefined)}
              links={entry.links}
              description={entry.description}
            >
              <p className="entry-meta">{entry.meta}</p>
            </EntryRow>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
