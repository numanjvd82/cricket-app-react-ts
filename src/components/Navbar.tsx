import { motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';

const navbarSpring = {
  type: 'spring',
  damping: 30,
  stiffness: 200,
  duration: 1,
};

const logoVariants = {
  initial: {
    opacity: 0,
    x: -100,
    scale: 0,
  },
  animate: {
    opacity: 1,
    x: [0, 100, 0],
    scale: 1,
    transition: {
      ...navbarSpring,
      delay: 0.5,
    },
  },
};

function Navbar() {
  return (
    <>
      <motion.nav
        initial={{ width: '30%', opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        transition={navbarSpring}
        className="bg-navColor py-3 dark:bg-navDark text-white px-16  justify-between items-center flex flex-col md:flex-row"
      >
        <div className="logo">
          <motion.p
            variants={logoVariants}
            initial="initial"
            animate="animate"
            className="font-semibold text-2xl tracking-wider cursor-pointer"
          >
            LiveCric
          </motion.p>
        </div>
        <ul className="flex my-1 py-1">
          <li className="mx-3 text-sm cursor-pointer hover:border-b-2 transition-all font-semibold first:ml-0 last:mr-0">
            <Link to="/matches">Live Matches</Link>
          </li>
        </ul>
      </motion.nav>
      <Outlet />
    </>
  );
}

export default Navbar;
