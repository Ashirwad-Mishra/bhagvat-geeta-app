import React, { useEffect, useState } from 'react';
import './Chapter1.css'; // We can reuse the same CSS file as Chapter 1

// Import the data from the central file
import { allChaptersData } from '../../gita-data.js';
const chapterData = allChaptersData.find(ch => ch.chapter === 3);

const Chapter3 = ({ targetVerseId }) => {
  // State to track the current verse index for this chapter
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const [translationsVisible, setTranslationsVisible] = useState(true);

  // This effect sets the page index when a search result is clicked
  useEffect(() => {
    if (targetVerseId && chapterData) {
      const targetIndex = chapterData.verses.findIndex(v => v.id === targetVerseId);
      if (targetIndex !== -1) {
        setCurrentVerseIndex(targetIndex);
        
        // Highlight the verse card after it renders
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
    return <div>Chapter 3 data not found.</div>;
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

  // Get the single verse to display based on the current index
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

      {/* Main display area for the current verse */}
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

      {/* Pagination controls */}
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

export default Chapter3;