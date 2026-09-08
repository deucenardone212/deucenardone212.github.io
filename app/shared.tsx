import Link from './site-link';
import { ArrowUpRight } from 'lucide-react';
export function Header() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <Link className="wordmark" href="/">
          THOMAS NARDONE<span>ENGINEERING PORTFOLIO</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#about">About</Link>
          <Link className="nav-contact" href="/#contact">
            Contact <ArrowUpRight size={14} />
          </Link>
        </nav>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="wrap">
      <span>© 2026 Thomas Nardone</span>
      <span>Mechanical Engineering · Virginia Tech</span>
      <a href="#main">Back to top ↑</a>
    </footer>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Tools and focus areas">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
