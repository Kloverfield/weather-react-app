import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setSearch(query);
  }

  function updateQuery(event) {
    setQuery(event.target.value.trim().toLowerCase());
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city . ."
          onChange={updateQuery}
        />
        <input type="submit" value="Search" />
      </form>
      <br />
      {search ? <Weather city={search} /> : null}
    </div>
  );
}
