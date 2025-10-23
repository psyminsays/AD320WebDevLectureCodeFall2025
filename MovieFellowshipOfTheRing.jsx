import React from 'react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-amber-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12 pb-8 border-b-2 border-amber-600">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 drop-shadow-lg">
            {movieInfo.title}
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg text-gray-300">
            <span>{movieInfo.releaseYear}</span>
            <span className="hidden md:block">•</span>
            <span>{movieInfo.runtime}</span>
            <span className="hidden md:block">•</span>
            <span>{movieInfo.rating}</span>
          </div>
        </header>

        <div className="space-y-12">
          <section className="bg-white bg-opacity-10 rounded-xl p-8 border border-amber-600 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-400 mb-6">Movie Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <strong className="text-amber-300">Director:</strong> {movieInfo.director}
              </div>
              <div>
                <strong className="text-amber-300">Budget:</strong> {movieInfo.budget}
              </div>
              <div>
                <strong className="text-amber-300">Box Office:</strong> {movieInfo.boxOffice}
              </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-200">{movieInfo.summary}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-amber-400 text-center mb-8">The Fellowship</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fellowshipMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white bg-opacity-5 rounded-lg p-6 border border-gray-600 hover:border-amber-500 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20"
                >
                  <h3 className="text-xl font-bold text-amber-400 mb-3">{member.name}</h3>
                  <p className="mb-2"><strong className="text-amber-300">Actor:</strong> {member.actor}</p>
                  <p><strong className="text-amber-300">Race:</strong> {member.race}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MovieFellowshipOfTheRing;
