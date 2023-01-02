import { CgMediaLive } from 'react-icons/cg';
import { Match } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function MatchCard({ match }: { match: Match }) {
  const matchVariant = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 50,
        delay: 0.2,
      },
    },
  };

  const renderLiveSign = () => {
    if (match.status === 'completed') {
      return null;
    }
    if (match.team1Overs !== 50 || match.team1Wickets !== 10) {
      return <CgMediaLive color="red" className="mx-2" />;
    }

    if (match.team2Overs !== 50 || match.team2Wickets !== 10) {
      return <CgMediaLive color="red" className="mx-2" />;
    }
  };

  return (
    <Link to={`/match_details/${match.id}`}>
      <motion.section
        variants={matchVariant}
        initial="hidden"
        animate="visible"
        className="bg-gray-300 w-[500px] p-2 rounded-lg shadow-lg my-2"
      >
        <h4 className="capitalize font-semibold border-b border-b-white">
          Result
        </h4>
        <p className="text-center font-semibold text-lg">
          {match.team1} VS {match.team2}
        </p>
        <article className="flex justify-between">
          <h4 className="capitalize font-semibold">Toss</h4>
          <p>
            {match.tossWinner} won the toss and elected to {match.tossDecision}
          </p>
        </article>
        <article
          className={`flex justify-between my-2 ${
            match.team1Overs === 50 ||
            match.team1Wickets === 10 ||
            match.status === 'completed'
              ? 'opacity-40'
              : ''
          }`}
        >
          <article className="flex items-center justify-center">
            <h2 className="font-semibold text-lg">{match.team1}</h2>
            {renderLiveSign()}
          </article>
          <p className="font-semibold">
            {match.team1Runs}/{match.team1Wickets} ({match.team1Overs} overs /{' '}
            {match.team1Overs * 6} balls)
          </p>
        </article>
        <article
          className={`flex justify-between my-2 ${
            match.team2Overs === 50 ||
            match.team2Wickets === 10 ||
            match.status === 'completed' ||
            match.team2Runs > match.team1Runs
              ? 'opacity-40'
              : ''
          }`}
        >
          <article className="flex items-center justify-center">
            <h2 className="font-semibold text-lg">{match.team2}</h2>
            {renderLiveSign()}
          </article>
          <p className="font-semibold">
            {match.team2Runs}/{match.team2Wickets} ({match.team2Overs} overs /{' '}
            {match.team2Overs * 6} balls)
          </p>
        </article>
        <h4 className="capitalize font-semibold border-t border-t-white">
          Status: {match.status}
        </h4>
      </motion.section>
    </Link>
  );
}

export default MatchCard;
