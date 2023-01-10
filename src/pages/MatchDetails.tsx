import { useLocation } from 'react-router-dom';
import DetailCard from '../components/DetailCard';
import LineGraph from '../components/LineGraph';
import { Match } from '../constants';

function MatchDetails() {
  const location = useLocation();
  const match = location.state.match as Match;
  return (
    <>
      <LineGraph id={match.id} />
      <DetailCard match={match} />
    </>
  );
}

export default MatchDetails;
