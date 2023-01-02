import { useLocation } from 'react-router-dom';
import { Match } from '../constants';

function MatchDetails() {
  const location = useLocation();
  const match = location.state.match as Match;
  return (
    <>
      <h1>Match Details</h1>
    </>
  );
}

export default MatchDetails;
