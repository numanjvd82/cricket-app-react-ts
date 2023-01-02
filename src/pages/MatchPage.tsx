import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import MatchCard from '../components/MatchCard';
import { allMatches, Match } from '../constants';
import 'react-toastify/dist/ReactToastify.css';

function MatchPage() {
  const [matches, setMatches] = useState<Match[]>(allMatches);
  const wicketsUpdateInterval = 30000;
  const runsUpdateInterval = 15000;
  const oversUpdateInterval = 15000;

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const updateOvers = () => {
    const newMatches = matches.map((match) => {
      if (match.status === 'completed') {
        return match;
      }

      if (match.team1Overs === 50 && match.team2Overs === 50) {
        return match;
      }

      if (match.team1Overs !== 50) {
        match.team1Overs += 1;
      }

      if (match.team2Overs !== 50) {
        match.team2Overs += 1;
      }

      return match;
    });

    setMatches(newMatches);
  };

  const updateWickets = () => {
    const newMatches = matches.map((match) => {
      if (match.status === 'completed') {
        return match;
      }

      if (match.team1Overs === 50 && match.team2Overs === 50) {
        return match;
      }

      if (match.team1Overs !== 50) {
        if (match.team1Wickets === 10) {
          match.status = 'completed';
        } else {
          match.team1Wickets += 1;
        }
      }

      if (match.team2Overs !== 50) {
        if (match.team2Wickets === 10) {
          match.status = 'completed';
        } else {
          match.team2Wickets += 1;
        }
      }

      return match;
    });

    setMatches(newMatches);
  };

  const updateRuns = () => {
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
        match.status = 'completed';
      }

      return match;
    });

    setMatches(newMatches);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateRuns();
      console.log('runs updated');
      toast.info('Runs updated', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, runsUpdateInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateWickets();
      console.log('wickets updated');
      toast.warn('Wicket Fell Down', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, wicketsUpdateInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateOvers();
      console.log('overs updated');
      toast.success('Over Completed', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, oversUpdateInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <section className="flex flex-col items-center justify-center my-8">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </section>
    </>
  );
}

export default MatchPage;
