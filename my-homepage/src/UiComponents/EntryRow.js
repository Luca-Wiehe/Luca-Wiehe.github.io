import React from 'react';
import { Link } from 'react-router-dom';
import './EntryRow.css';

// Internal paths start with "/" but not "//"; PDFs in /public are served as files, not routes
const isRoute = (href) => /^\/(?!\/)/.test(href) && !/\.\w+$/.test(href);

const SmartLink = ({ href, children }) =>
  isRoute(href) ? (
    <Link to={href}>{children}</Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  );

// A link target is either a URL or a click handler (e.g. toggling a BibTeX block)
const LinkItem = ({ name, target }) =>
  typeof target === 'function' ? (
    <button type="button" className="entry-link-button" onClick={target}>{name}</button>
  ) : (
    <SmartLink href={target}>{name}</SmartLink>
  );

// One row of a minimalist list: thumbnail on the left, title, metadata lines and text links on the right
const EntryRow = ({ thumbnail, fallback, label, title, href, links = [], description, footer, children }) => (
  <li className="entry-row">
    <div className="entry-thumb">
      {thumbnail ? (
        <img src={thumbnail} alt="" loading="lazy" />
      ) : (
        <span className="entry-thumb-fallback">{fallback}</span>
      )}
    </div>
    <div className="entry-body">
      {label && <span className="entry-label">{label}</span>}
      <h3 className="entry-title">
        {href ? <SmartLink href={href}>{title}</SmartLink> : title}
      </h3>
      {children}
      {links.length > 0 && (
        <p className="entry-links">
          {links.map(([name, target], index) => (
            <React.Fragment key={name}>
              <LinkItem name={name} target={target} />
              {index < links.length - 1 && <span className="entry-sep">/</span>}
            </React.Fragment>
          ))}
        </p>
      )}
      {description && <p className="entry-description">{description}</p>}
      {footer}
    </div>
  </li>
);

export default EntryRow;
