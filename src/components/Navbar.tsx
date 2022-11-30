import { motion } from 'framer-motion';
import linksData from './Links';

function returnLinks() {
  return linksData.map((link) => {
    return (
      <li
        className="mx-3 text-sm cursor-pointer hover:border-b-2 transition-all font-semibold first:ml-0 last:mr-0"
        key={link.id}
      >
        <a href={link.path}>{link.name}</a>
      </li>
    );
  });
}

const navbarSpring = {
  type: 'spring',
  damping: 30,
  stiffness: 200,
  duration: 1,
};

function Navbar() {
  return (
    <motion.nav
      initial={{ width: '30%', opacity: 0 }}
      animate={{ width: '100%', opacity: 1 }}
      transition={navbarSpring}
      className="bg-navColor py-3 dark:bg-navDark text-white px-16  justify-between items-center flex flex-col md:flex-row"
    >
      <div className="logo">
        <p className="font-semibold text-2xl tracking-wider">LiveCric</p>
      </div>
      <ul className="flex my-1 py-1">{returnLinks()}</ul>
    </motion.nav>
  );
}

export default Navbar;
