import { TbCricket } from 'react-icons/tb';
import { motion } from 'framer-motion';
import tabPhone from '../assets/images/tab-phone.png';

function MusicSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-footerColor dark:bg-footerDark text-white"
    >
      <article className="text-center mx-4 md:w-1/2 md:mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-2 flex items-center justify-center"
        >
          <TbCricket className="mr-3 text-2xl" />
          <h2 className="text-2xl font-semibold my-2">Cricket</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl font-semibold my-4"
        >
          45 million songs. Zero ads.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-semibold text-lg md:text-xl "
        >
          Stream over 45 million songs, ad-free. Or download albums and tracks
          to listen to offline. All the music in your personal myTunes library —
          no matter where it came from — lives right alongside the Orange Music
          catalog. Start your free three-month trial with no commitment, and
          cancel anytime.
        </motion.p>
        <button className="bg-red-800 my-2 mt-5 p-3 rounded-md hover:bg-red-400 hover:rounded-lg transition-colors">
          Start Your Trial Now
        </button>
        <p className="text-slate-300 my-2">
          Orange Music is available in myTunes, and for iOS and Android devices.
        </p>
      </article>
      <figure className="mx-8 min-w-[300px] relative md:-mt-[380px] md:top-[400px] flex justify-center items-center object-cover">
        <img className="" src={tabPhone} alt="Music Albums" />
      </figure>
    </motion.section>
  );
}

export default MusicSection;
