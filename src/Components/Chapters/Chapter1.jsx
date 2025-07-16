import React, { useEffect, useState } from 'react';
import './Chapter1.css';

// Import the data from the central file
import { allChaptersData } from '../../gita-data.js';
const chapterData = allChaptersData.find(ch => ch.chapter === 1);

const Chapter1 = ({ targetVerseId }) => {
  const [translationsVisible, setTranslationsVisible] = useState(true);

  // This effect runs when the component loads or when targetVerseId changes
  useEffect(() => {
    // Check if we have a target verse to scroll to
    if (targetVerseId) {
      const element = document.getElementById(targetVerseId);
      if (element) {
        // Smoothly scroll the verse into the middle of the screen
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        
        // Add a temporary highlight class (defined in Chapter1.css)
        element.classList.add('highlight-verse');
        
        // Remove the highlight after 2 seconds
        setTimeout(() => {
          element.classList.remove('highlight-verse');
        }, 2000); 
      }
    }
  }, [targetVerseId]); // This effect depends on the targetVerseId prop

  // If chapter data isn't found for some reason, prevent an error
  if (!chapterData) {
    return <div>Chapter 1 data not found.</div>;
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
          // IMPORTANT: The verse.id is used as the DOM 'id' attribute here
          // This is how the useEffect hook finds the correct element to scroll to.
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

export default Chapter1;
