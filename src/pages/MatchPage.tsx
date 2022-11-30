import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allMatches, Match } from '../constants';

function MatchPage() {
  const { id } = useParams();

  const getMatch = () => {
    const match = allMatches.find((match) => match.id === Number(id));
    if (match) {
      return match;
    }
    return null;
  };

  const [match, setMatch] = useState<Match | null>(getMatch());

  const randomIntervalToSimulateApiCall = () => {
    return Math.floor(Math.random() * 1000) + 500;
  };

  const updateMatch = () => {
    setMatch((prevMatch) => {
      if (prevMatch) {
        return {
          ...prevMatch,
          team1Runs: prevMatch.team1Runs + Math.floor(Math.random() * 7),
          team2Runs: prevMatch.team2Runs + Math.floor(Math.random() * 7),
        };
      }
      return null;
    });
  };

  useEffect(() => {
    const interval = setInterval(
      updateMatch,
      randomIntervalToSimulateApiCall()
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="matchPage">
      <h1>Match Page</h1>
      <h3>{id}</h3>

      {match ? (
        <div className="match">
          <div className="match__team">
            <h1>{match.team1}</h1>
            <p>{match.team1Runs}</p>
            <h1>{match.team2}</h1>
            <p>{match.team2Runs}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MatchPage;
