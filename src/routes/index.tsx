import { createFileRoute } from '@tanstack/react-router';

import { BrButton } from '@/components/br-button';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-br-bg font-body selection:bg-br-accent/15">
      <div className="mx-auto max-w-[72rem] px-4 py-6 sm:px-6 md:px-10 md:py-12">
        {/* HTML tag deco — opening */}
        <div
          className="br-slide mb-3 font-mono text-[0.65rem] tracking-wider text-br-faint sm:mb-4 sm:text-[0.7rem]"
          style={{ animationDelay: '0.05s' }}
        >
          &lt;body&gt;
        </div>

        {/* Main headline */}
        <div className="br-slam overflow-hidden" style={{ animationDelay: '0.1s' }}>
          <h1
            className="m-0 font-display text-br-ink leading-[0.82]"
            style={{
              fontSize: 'clamp(2.4rem, 9.2vw, 7.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}
          >
            CASSIO
            <br />
            CARDOSO
          </h1>
        </div>

        {/* Subtitle row */}
        <div
          className="br-slide mt-4 flex flex-wrap items-center gap-3 sm:mt-6 sm:gap-4 md:mt-8"
          style={{ animationDelay: '0.25s' }}
        >
          <div className="h-[3px] w-10 bg-br-ink sm:w-16 md:w-28" />
          <span className="font-display text-[1rem] font-bold uppercase tracking-[0.12em] text-br-ink sm:text-[1.2rem] sm:tracking-[0.15em] md:text-[1.5rem]">
            Frontend Engineer
          </span>
        </div>

        {/* Bio section */}
        <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:mt-14 md:grid-cols-[3fr_2fr] md:gap-16">
          <div className="br-slide" style={{ animationDelay: '0.35s' }}>
            <p className="m-0 text-[1rem] leading-[1.5] text-br-body sm:text-[1.15rem] md:text-[1.3rem]">
              I build things for the web. Passionate about crafting interfaces that feel
              right&mdash;fast, elegant, intentional. Working with tech since 2010. Based in Berlin.
            </p>
            <p className="m-0 mt-3 text-[0.8rem] text-br-muted sm:mt-4 sm:text-[0.85rem]">
              Full-stack capable &middot; JavaScript ecosystem &middot; React specialist
            </p>
          </div>

          {/* Nav buttons */}
          <nav className="br-slide grid grid-cols-2 gap-3" style={{ animationDelay: '0.45s' }}>
            <BrButton to="/about" label="ABOUT" />
            <BrButton to="/blog" label="BLOG" />
            <BrButton to="/uses" label="USES" />
            <BrButton to="/purpose" label="PURPOSE" />
            <BrButton to="/resume" label="RESUME" accent />
          </nav>
        </div>

        {/* Decorative bar */}
        <div
          className="br-slide mt-10 flex gap-[2px] sm:mt-14 sm:gap-[3px] md:mt-20"
          style={{ animationDelay: '0.55s' }}
          aria-hidden="true"
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="h-4 flex-1 bg-br-ink sm:h-6"
              style={{ opacity: i % 3 === 0 ? 0.15 : i % 3 === 1 ? 0.08 : 0.04 }}
            />
          ))}
        </div>

        {/* Footer */}
        <footer
          className="br-slide mt-6 flex flex-wrap items-end justify-between gap-4 sm:mt-8"
          style={{ animationDelay: '0.6s' }}
        >
          <span className="font-mono text-[0.65rem] tracking-wider text-br-faint sm:text-[0.7rem]">
            &lt;/body&gt;
          </span>
          <div className="flex items-center gap-4 text-[0.7rem] text-br-subtle sm:gap-6 sm:text-[0.75rem]">
            <span>Berlin, DE</span>
            <span>est. 2010</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
