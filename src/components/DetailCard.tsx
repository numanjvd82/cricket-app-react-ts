import { Match } from '../constants';

function DetailCard({ match }: { match: Match }) {
  return (
    <div className="bg-white rounded shadow-lg p-6">
      <div className="flex justify-between mb-4">
        <div>
          <div className="text-2xl font-bold text-center">{match.team1}</div>
          <img src={match.team1Image} alt="Team 1 Logo" />
        </div>
        <div>
          <div className="text-2xl font-bold text-center">{match.team2}</div>
          <img src={match.team2Image} alt="Team 2 Logo" />
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <div className="text-4xl font-bold bg-gray-400 px-3 p-1 text-gray-100 shadow-lg rounded-lg ">
          {match.team1Runs}
        </div>
        <div className="text-4xl font-bold bg-gray-400 px-3 p-1 text-gray-100 shadow-lg rounded-lg ">
          {match.team2Runs}
        </div>
      </div>
      <div className="mb-4">
        <div className="text-gray-600">Location: {match.venue}</div>
        <div className="text-gray-600 font-semibold">
          {match.date} {match.time}
        </div>
      </div>
      <div className="mb-4">
        <div className="text-gray-600 font-bold uppercase">{match.status}</div>
        <div className="text-gray-600">Toss Winner: {match.tossWinner}</div>
        <div className="text-gray-600">Toss Decision: {match.tossDecision}</div>
      </div>
      <div className="text-gray-600 font-bold uppercase">
        Man of the match: {match.manOfTheMatch ? match.manOfTheMatch : '-'}
      </div>
    </div>
  );
}

export default DetailCard;
