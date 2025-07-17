import React, { useState } from 'react';
import './App.css';

// Import components
import Navbar from './Components/Navbar';
import SearchBar from './Components/Searchbar';
import Background from './Components/Background' // <-- 1. IMPORT THE NEW BACKGROUND COMPONENT
import Chapter1 from './Components/Chapters/Chapter1';
import Chapter2 from './Components/Chapters/Chapter2';
import Chapter3 from './Components/Chapters/Chapter3';
import Chapter4 from './Components/Chapters/Chapter4';
import Chapter5 from './Components/Chapters/Chapter5';
import Chapter6 from './Components/Chapters/Chapter6';
import Chapter7 from './Components/Chapters/Chapter7';
import Chapter8 from './Components/Chapters/Chapter8'; 
// Import the centralized data
import { allChaptersData } from './gita-data';

// A mapping of chapter numbers to their components
const chapterComponents = {
  1: Chapter1,
  2: Chapter2,
  3: Chapter3,
  4: Chapter4,
  5: Chapter5,
  6: Chapter6,
  7: Chapter7,
  8: Chapter8,
};

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [targetVerseId, setTargetVerseId] = useState(null);

  const handleSearchResultClick = (chapterNumber, verseId) => {
    setCurrentPage(chapterNumber);
    setTargetVerseId(verseId);
    setTimeout(() => setTargetVerseId(null), 100);
  };

  const CurrentChapterComponent = chapterComponents[currentPage];

  return (
    <div className="app">
      <Background /> {/* <-- 2. RENDER THE BACKGROUND COMPONENT HERE */}
      <div className="app-container">
        <header className="app-header">
          <h1>Bhagavad Gita</h1>
          <p>The Song of God</p>
        </header>
        
        <SearchBar 
          allChaptersData={allChaptersData} 
          onSearchResultClick={handleSearchResultClick} 
        />

        <nav>
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </nav>

        <main className="app-main-content">
          {CurrentChapterComponent ? (
            <CurrentChapterComponent targetVerseId={targetVerseId} />
          ) : (
            <ComingSoon chapterNumber={currentPage} />
          )}
        </main>
      </div>
    </div>
  );
}

const ComingSoon = ({ chapterNumber }) => (
    <div className="coming-soon">
      <h2>Chapter {chapterNumber}</h2>
      <p>Content coming soon.</p>
    </div>
);

export default App;