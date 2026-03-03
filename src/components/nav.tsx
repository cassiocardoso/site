import { Link } from '@tanstack/react-router';

export function Nav() {
  return (
    <nav className="grid grid-cols-2 text-center font-body md:flex md:flex-row md:items-center">
      <Link to="/about" className="mx-4 my-2 cursor-pointer text-lg underline">
        About Me
      </Link>
      <Link to="/blog" className="mx-4 my-2 cursor-pointer text-lg underline">
        Blog
      </Link>
      <Link to="/uses" className="mx-4 my-2 cursor-pointer text-lg underline">
        Uses
      </Link>
      <Link to="/purpose" className="mx-4 my-2 cursor-pointer text-lg underline">
        Purpose
      </Link>
      <a
        href="mailto:caugusto.cardoso@gmail.com"
        className="mx-4 my-2 cursor-pointer text-lg underline"
      >
        Contact
      </a>
    </nav>
  );
}
