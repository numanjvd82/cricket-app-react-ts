import { useEffect, useState } from 'react';
import MatchCard from '../components/MatchCard';
import { allMatches, Match } from '../constants';

function MatchPage() {
  const [matches, setMatches] = useState<Match[]>(allMatches);

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const updateScore = () => {
    const newMatches = matches.map((match) => {
      if (match.status === 'completed') {
        return match;
      }

      if (match.team1Overs === 50 && match.team2Overs === 50) {
        return match;
      }

      if (match.team1Overs !== 50) {
        match.team1Runs += getRandomNumber(0, 6);
      }

      if (match.team2Overs !== 50) {
        match.team2Runs += getRandomNumber(0, 6);
      }

      if (match.team2Runs > match.team1Runs) {
        match.team2Overs = 50;
        match.status = 'completed';
      }

      return match;
    });

    const timer = setTimeout(() => {
      setMatches(newMatches);
      console.log('updated');
    }, 3000);

    if (newMatches.every((match) => match.status === 'completed')) {
      clearTimeout(timer);
    }

    return timer;
  };

  useEffect(() => {
    updateScore();

    return () => {
      clearTimeout(updateScore());
    };
  }, [matches]);

  return (
    <section className="flex flex-col items-center justify-center my-8">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </section>
  );
}

export default MatchPage;
