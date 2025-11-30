import React, {useEffect,useState} from 'react';
import api from '../../api';
import { signOut } from "aws-amplify/auth";


export default function Dashboard() {

  const [searchInput, setSearchInput] = useState('');

  const [searchResult, setSearchResult] = useState('');
  

   const runSearch = async () => {
    try {
      const response = await fetch('http://localhost:8001/search', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_input: searchInput })
      });

      const data = await response.json();
      setSearchResult(data.result || "No results.");
    } catch (error) {
      console.error("Search error", error);
      setSearchResult("Search failed.");
    }
  };

  return (
    <div>
      <h2>Search Places</h2>

      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for restaurants, cafes..."
      />
      <button onClick={runSearch}>Search</button>

      <div style={{ marginTop: "20px", whiteSpace: "pre-line" }}>
        {searchResult}
      </div>

      <button onClick={() => signOut().then(() => window.location.href = "/")}>
        Logout
      </button>
    </div>
  );
}