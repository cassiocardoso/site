import { Link } from '@tanstack/react-router';

type Props = {
  to: string;
  label: string;
  accent?: boolean;
};

export function BrButton({ to, label, accent }: Props) {
  return (
    <Link
      to={to}
      className={`br-btn relative z-10 flex min-h-[44px] items-center justify-center border-2 border-br-ink px-4 py-3 text-center font-display text-[0.8rem] font-bold tracking-[0.1em] no-underline transition-colors ${
        accent
          ? 'bg-br-accent text-br-bg'
          : 'bg-br-bg text-br-ink hover:bg-br-accent hover:text-br-bg'
      }`}
    >
      {label}
    </Link>
  );
}
