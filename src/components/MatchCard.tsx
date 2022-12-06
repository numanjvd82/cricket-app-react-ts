import { CgMediaLive } from 'react-icons/cg';
import { Match } from '../constants';

function MatchCard({ match }: { match: Match }) {
  return (
    <section className="bg-gray-300 w-[500px] p-2 rounded-lg shadow-lg my-2">
      <h4 className="capitalize font-semibold border-b border-b-white">
        Result
      </h4>
      <p className="text-center font-semibold">
        {match.team1} VS {match.team2}
      </p>
      <article className="flex justify-between">
        <h4 className="capitalize font-semibold">Toss</h4>
        <p>England won the toss and elected to bat</p>
      </article>
      <article className="flex justify-between my-2">
        <h2 className="font-semibold text-lg">England</h2>
        <p className="font-semibold">364/5 (50.0 ov)</p>
      </article>
      <article className="flex justify-between my-2">
        <article className="flex items-center justify-center">
          <h2 className="font-semibold text-lg">Australia</h2>
          <CgMediaLive color="red" className="mx-2" />
        </article>
        <p className="font-semibold">364/5 (50.0 ov)</p>
      </article>
    </section>
  );
}

export default MatchCard;
