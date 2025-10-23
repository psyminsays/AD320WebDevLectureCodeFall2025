import React from 'react';
import './MovieFellowshipOfTheRing.css';

const MovieFellowshipOfTheRing = () => {
  const movieInfo = {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    releaseYear: 2001,
    runtime: "178 minutes",
    rating: "8.8/10 IMDb",
    budget: "$93 million",
    boxOffice: "$887.8 million",
    summary: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
  };

  const fellowshipMembers = [
    { name: "Frodo Baggins", actor: "Elijah Wood", race: "Hobbit" },
    { name: "Gandalf", actor: "Ian McKellen", race: "Wizard" },
    { name: "Aragorn", actor: "Viggo Mortensen", race: "Human" },
    { name: "Legolas", actor: "Orlando Bloom", race: "Elf" },
    { name: "Gimli", actor: "John Rhys-Davies", race: "Dwarf" },
    { name: "Boromir", actor: "Sean Bean", race: "Human" },
    { name: "Samwise Gamgee", actor: "Sean Astin", race: "Hobbit" },
    { name: "Meriadoc Brandybuck", actor: "Dominic Monaghan", race: "Hobbit" },
    { name: "Peregrin Took", actor: "Billy Boyd", race: "Hobbit" }
  ];

  return (
    <div className="movie-container">
      <header className="movie-header">
        <h1 className="movie-title">{movieInfo.title}</h1>
        <div className="movie-meta">
          <span>{movieInfo.releaseYear}</span>
          <span>•</span>
          <span>{movieInfo.runtime}</span>
          <span>•</span>
          <span>{movieInfo.rating}</span>
        </div>
      </header>

      <div className="movie-content">
        <section className="movie-info">
          <h2>Movie Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <strong>Director:</strong> {movieInfo.director}
            </div>
            <div className="info-item">
              <strong>Budget:</strong> {movieInfo.budget}
            </div>
            <div className="info-item">
              <strong>Box Office:</strong> {movieInfo.boxOffice}
            </div>
          </div>
          <p className="movie-summary">{movieInfo.summary}</p>
        </section>

        <section className="fellowship-section">
          <h2>The Fellowship</h2>
          <div className="fellowship-grid">
            {fellowshipMembers.map((member, index) => (
              <div key={index} className="member-card">
                <h3>{member.name}</h3>
                <p><strong>Actor:</strong> {member.actor}</p>
                <p><strong>Race:</strong> {member.race}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieFellowshipOfTheRing;
