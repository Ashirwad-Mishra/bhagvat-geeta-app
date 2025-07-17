import React, { useEffect, useState } from 'react';
import './Chapter1.css'; // Reusing the same CSS

// Import the data from the central file
import { allChaptersData } from '../../gita-data.js';
const chapterData = allChaptersData.find(ch => ch.chapter === 12);

const Chapter12 = ({ targetVerseId }) => {
  const [translationsVisible, setTranslationsVisible] = useState(true);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

  // Effect to handle scrolling to a searched verse
  useEffect(() => {
    if (targetVerseId && chapterData) {
      const targetIndex = chapterData.verses.findIndex(v => v.id === targetVerseId);
      if (targetIndex !== -1) {
        setCurrentVerseIndex(targetIndex);
        
        setTimeout(() => {
          const element = document.getElementById(targetVerseId);
          if (element) {
            element.classList.add('highlight-verse');
            setTimeout(() => {
              element.classList.remove('highlight-verse');
            }, 2000); 
          }
        }, 100);
      }
    }
  }, [targetVerseId]);

  // If chapter data isn't found, prevent an error
  if (!chapterData) {
    return <div>Chapter 12 data not found. Please update gita-data.js</div>;
  }

  const handleNextVerse = () => {
    if (currentVerseIndex < chapterData.verses.length - 1) {
      setCurrentVerseIndex(currentVerseIndex + 1);
    }
  };

  const handlePrevVerse = () => {
    if (currentVerseIndex > 0) {
      setCurrentVerseIndex(currentVerseIndex - 1);
    }
  };

  const currentVerse = chapterData.verses[currentVerseIndex];

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

      <div className="verse-display-container">
        {currentVerse && (
          <div key={currentVerse.id} id={currentVerse.id} className="verse-card">
            <h4 className="verse-id">Verse {currentVerse.id}</h4>
            <div className="verse-sanskrit">
              <h5>Sanskrit:</h5>
              <p className="sanskrit-text">{currentVerse.sanskrit}</p>
            </div>
            {translationsVisible && (
              <div className="translations-wrapper">
                <div className="verse-hindi">
                  <h5>Hindi Translation:</h5>
                  <p className="translation-text">{currentVerse.hindi}</p>
                </div>
                <div className="verse-english">
                  <h5>English Translation:</h5>
                  <p className="translation-text">{currentVerse.english}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="pagination-controls">
        <button 
          onClick={handlePrevVerse} 
          disabled={currentVerseIndex === 0}
          className="pagination-button"
        >
          &larr; Previous
        </button>
        <div className="verse-counter">
          Verse {currentVerseIndex + 1} of {chapterData.verses.length}
        </div>
        <button 
          onClick={handleNextVerse} 
          disabled={currentVerseIndex === chapterData.verses.length - 1}
          className="pagination-button"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Chapter12;