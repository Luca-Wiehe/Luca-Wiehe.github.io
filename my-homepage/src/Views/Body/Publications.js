import React from 'react';
import publicationsData from '../../Constants/publications.json';
import EntryRow from '../../UiComponents/EntryRow';
import './Publications.css';

const byYearDesc = (a, b) => Number(b.year) - Number(a.year);

// Bold the site owner's name; keep markers like "*" attached to it
const renderAuthors = (authors) =>
  authors.map((author, index) => {
    const name = author.replace(/[*†]+$/, '');
    const isSelf = name === publicationsData.self;
    return (
      <React.Fragment key={index}>
        {isSelf ? <strong>{author}</strong> : author}
        {index < authors.length - 1 && ', '}
      </React.Fragment>
    );
  });

const PublicationRow = ({ pub }) => {
  const links = Object.entries(pub.links || {}).filter(([, url]) => url);

  return (
    <EntryRow
      thumbnail={pub.thumbnail}
      fallback={pub.year}
      title={pub.title}
      href={links.length > 0 ? links[0][1] : undefined}
      links={links}
      description={pub.tldr}
    >
      <p className="pub-authors">{renderAuthors(pub.authors)}</p>
      <p className="entry-meta">{pub.venue && <><em>{pub.venue}</em>, </>}{pub.year}</p>
    </EntryRow>
  );
};

const Publications = () => {
  const papers = publicationsData.publications.filter(pub => pub.type !== 'Thesis').sort(byYearDesc);
  const theses = publicationsData.publications.filter(pub => pub.type === 'Thesis').sort(byYearDesc);
  const hasEqualContribution = publicationsData.publications.some(pub =>
    pub.authors.some(author => author.endsWith('*'))
  );

  return (
    <div className="publications-page">
      <div className="page-header">
        <h1 className="page-title">Research</h1>
      </div>

      <div className="publications-container">
        <ul className="entry-list">
          {papers.map((pub) => <PublicationRow key={pub.title} pub={pub} />)}
        </ul>

        {theses.length > 0 && (
          <>
            <h2 className="list-section-title">Theses</h2>
            <ul className="entry-list">
              {theses.map((pub) => <PublicationRow key={pub.title} pub={pub} />)}
            </ul>
          </>
        )}

        {hasEqualContribution && <p className="pub-footnote">* Equal contribution</p>}
      </div>
    </div>
  );
};

export default Publications;
