import { useEffect, useState } from 'react';
import MatchCard from '../components/MatchCard';
import { allMatches, Match } from '../constants';

function MatchPage() {
  const [matches, setMatches] = useState<Match[]>(allMatches);

  console.log(matches);

  return (
    <section className="flex flex-col items-center justify-center my-8">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </section>
  );
}

export default MatchPage;
