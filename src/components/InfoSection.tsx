import macbook from '../assets/images/macbook.png';
import { motion } from 'framer-motion';

function InfoSection() {
  const imgVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <section className="md:mt-[500px] mx-4 md:flex md:flex-col justify-center items-center">
      <motion.article
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="sm:w-[1000px]"
      >
        <h1 className=" mb-6 font-bold text-xl md:text-2xl">
          The movie and TV collection you always wished for. Granted.
        </h1>
        <p className=" text-md ">
          With over 100,000 movies and TV shows to choose from, there’s always
          something great to watch on myTunes and if you watch on Orange TV 4K,
          you’ll be able to enjoy a tremendous selection of your favorite
          content in 4K HDR. So get ready to enjoy episodes of your favorite TV
          shows or hit movies you’ve been waiting to see — anytime, anywhere.
          Just tap to play, or even download if you’re going somewhere you won’t
          have Wi-Fi....
        </p>
        <div className="w-full text-center">
          <button className=" bg-navColor my-4 text-white p-2 px-4 md:px-6 rounded-sm transition-all hover:-translate-y-1 hover:bg-footerColor">
            Read More
          </button>
        </div>
      </motion.article>
      <motion.figure
        variants={imgVariants}
        initial="initial"
        whileInView="animate"
        className="my-8 min-w-[300px]"
      >
        <img src={macbook} alt="Macbook" />
      </motion.figure>
    </section>
  );
}

export default InfoSection;
