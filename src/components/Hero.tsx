import { motion } from 'framer-motion';

function Hero() {
  const heroSpring = {
    type: 'spring',
    damping: 30,
    stiffness: 200,
    duration: 1,
  };

  return (
    <motion.section
      initial={{ width: '30%', opacity: 0 }}
      animate={{ width: '100%', opacity: 1 }}
      transition={heroSpring}
      className="bg-hero-img bg-no-repeat bg-cover relative h-screen text-white before:w-full before:h-full before:absolute before:bg-black/70 before:top-0 before:left-0 before:z-0"
    >
      <div className="flex flex-col justify-center items-center h-full">
        <motion.article
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-center w-full md:w-1/2 z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl my-5 font-bold"
          >
            LiveCric
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="my-5 font-semibold text-xl"
          >
            Your music, movies, and TV shows take center stage.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            myTunes is the best way to organize and enjoy the music, movies, and
            TV shows you already have — and shop for the ones you want. Enjoy
            all the entertainment myTunes has to offer on your Mac and PC.
          </motion.p>
        </motion.article>
      </div>
    </motion.section>
  );
}

export default Hero;
