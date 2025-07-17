import React, { useState } from 'react';
import './App.css';

// Import components
import Navbar from './Components/Navbar';
import SearchBar from './Components/Searchbar';
import Chapter1 from './Components/Chapters/Chapter1';
import Chapter2 from './Components/Chapters/Chapter2';
import Chapter3 from './Components/Chapters/Chapter3';
// Import the centralized data from the new file
import { allChaptersData } from './gita-data';

// A mapping of chapter numbers to their components
const chapterComponents = {
  1: Chapter1,
  2: Chapter2,
  3: Chapter3,
  // When you create Chapter2.jsx, you will add it here
  // 2: Chapter2, 
};

// Placeholder for uncreated chapters
const ComingSoon = ({ chapterNumber }) => (
  <div className="coming-soon">
    <h2>Chapter {chapterNumber}</h2>
    <p>Content coming soon.</p>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  // NEW: State to hold the ID of the verse we want to scroll to
  const [targetVerseId, setTargetVerseId] = useState(null);

  // NEW: This function is called when a user clicks a search result
  const handleSearchResultClick = (chapterNumber, verseId) => {
    setCurrentPage(chapterNumber); // Switch to the correct chapter
    setTargetVerseId(verseId);     // Set the target verse ID to scroll to
    // We'll reset the targetVerseId after a short delay so that clicking the same
    // result again will re-trigger the scroll effect.
    setTimeout(() => setTargetVerseId(null), 100);
  };

  const CurrentChapterComponent = chapterComponents[currentPage];

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1>Bhagavad Gita</h1>
          <p>The Song of God</p>
        </header>
        
        {/* The SearchBar is added here, passing it all the chapter data */}
        {/* and the function to handle clicks. */}
        <SearchBar 
          allChaptersData={allChaptersData} 
          onSearchResultClick={handleSearchResultClick} 
        />

        <nav>
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </nav>

        <main className="app-main-content">
          {CurrentChapterComponent ? (
            // Pass the target verse ID down to the chapter component
            <CurrentChapterComponent targetVerseId={targetVerseId} />
          ) : (
            <ComingSoon chapterNumber={currentPage} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;