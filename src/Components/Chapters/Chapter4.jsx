import React, { useEffect, useState } from 'react';
import './Chapter1.css'; // We can reuse the same CSS from Chapter 1

// Import the data from the central file
import { allChaptersData } from '../../gita-data.js';
const chapterData = allChaptersData.find(ch => ch.chapter === 4);

const Chapter4 = ({ targetVerseId }) => {
  const [translationsVisible, setTranslationsVisible] = useState(true);

  // This effect handles scrolling to a searched verse
  useEffect(() => {
    if (targetVerseId) {
      const element = document.getElementById(targetVerseId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('highlight-verse');
        setTimeout(() => {
          element.classList.remove('highlight-verse');
        }, 2000); 
      }
    }
  }, [targetVerseId]);

  // If chapter data isn't found, prevent an error
  if (!chapterData) {
    return <div>Chapter 4 data not found. Please update gita-data.js</div>;
  }

  return (
    <div className="chapter-view">
      <div className="chapter-header">
        <h3 className="chapter-number">Chapter {chapterData.chapter}</h3>
        <h1 className="chapter-title-sanskrit">{chapterData.title}</h1>
        <h2 className="chapter-title-english">{chapterData.english_title}</h2>
        <div className="translation-toggle-container">
          <button 
            onClick={() => setTranslationsVisible(!translationsVisible)}
            className="translation-toggle-btn"
          >
            {translationsVisible ? 'Hide Translations' : 'Show Translations'}
          </button>
        </div>
      </div>

      <div className="verses-container">
        {chapterData.verses.map((verse) => (
          <div key={verse.id} id={verse.id} className="verse-card">
            <h4 className="verse-id">Verse {verse.id}</h4>
            <div className="verse-sanskrit">
              <h5>Sanskrit:</h5>
              <p className="sanskrit-text">{verse.sanskrit}</p>
            </div>
            {translationsVisible && (
              <div className="translations-wrapper">
                <div className="verse-hindi">
                  <h5>Hindi Translation:</h5>
                  <p className="translation-text">{verse.hindi}</p>
                </div>
                <div className="verse-english">
                  <h5>English Translation:</h5>
                  <p className="translation-text">{verse.english}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapter4;