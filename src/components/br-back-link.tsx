import { Link } from '@tanstack/react-router';

export function BrBackLink() {
  return (
    <Link
      to="/"
      className="br-slide inline-flex items-center gap-2 font-display text-[0.75rem] font-bold uppercase tracking-[0.1em] text-br-muted no-underline transition-colors hover:text-br-ink sm:text-[0.8rem]"
      style={{ animationDelay: '0.05s' }}
    >
      <span aria-hidden="true">&larr;</span>
      HOME
    </Link>
  );
}
