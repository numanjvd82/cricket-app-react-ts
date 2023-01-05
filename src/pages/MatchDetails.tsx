import { useLocation } from 'react-router-dom';
import DetailCard from '../components/DetailCard';
import { Match } from '../constants';

function MatchDetails() {
  const location = useLocation();
  const match = location.state.match as Match;
  return (
    <>
      <DetailCard match={match} />
    </>
  );
}

export default MatchDetails;
