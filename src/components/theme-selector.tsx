import { Fragment } from 'react';

import { useTheme, type ThemeMode } from '@/lib/theme-context';

const MODES: Array<{ value: ThemeMode; label: string }> = [
  { value: 'auto', label: 'Auto' },
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
];

export function ThemeSelector() {
  const { mode, setMode } = useTheme();

  return (
    <div className="theme-switch">
      {MODES.map(({ value, label }) => (
        <Fragment key={value}>
          <input
            checked={mode === value}
            id={label}
            name="theme-switch"
            onChange={() => setMode(value)}
            type="radio"
            className="sr-only"
          />
          <label htmlFor={label} className="theme-switch-label">
            {label}
          </label>
        </Fragment>
      ))}
      <div className="theme-switch-indicator" aria-hidden="true" />
    </div>
  );
}
