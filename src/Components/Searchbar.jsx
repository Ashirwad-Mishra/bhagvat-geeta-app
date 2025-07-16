import React, { useState, useEffect, useRef } from 'react';
import './Searchbar.css'; // Import the new CSS

const SearchBar = ({ allChaptersData, onSearchResultClick }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const searchContainerRef = useRef(null);

  // Effect to handle closing the results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    const foundResults = [];

    allChaptersData.forEach(chapter => {
      if (!chapter || !chapter.verses) return;
      
      chapter.verses.forEach(verse => {
        const verseText = `${verse.sanskrit} ${verse.hindi} ${verse.english}`.toLowerCase();
        
        // Check for verse ID match (e.g., "1.12") or text match
        if (verse.id.includes(lowerCaseQuery) || verseText.includes(lowerCaseQuery)) {
          foundResults.push({
            chapterNumber: chapter.chapter,
            ...verse
          });
        }
      });
    });

    setResults(foundResults.slice(0, 10)); // Limit to top 10 results for performance
  };

  const handleItemClick = (result) => {
    onSearchResultClick(result.chapterNumber, result.id);
    setQuery('');
    setResults([]);
  };

  // Function to highlight the matching text in the snippet
  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="highlight">{part}</span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="search-bar-container" ref={searchContainerRef}>
      <input
        type="text"
        className="search-input"
        placeholder="Search by verse ID (e.g., 1.28) or keyword..."
        value={query}
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <div className="search-results-container">
          {results.map((result) => (
            <div
              key={`${result.chapterNumber}-${result.id}`}
              className="search-result-item"
              onClick={() => handleItemClick(result)}
            >
              <div className="verse-id">Verse {result.id} (Chapter {result.chapterNumber})</div>
              <div className="verse-snippet">
                {getHighlightedText(result.english, query)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
