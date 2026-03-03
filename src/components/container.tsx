import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Container({ children }: Props) {
  return <div className="mx-auto max-w-[60rem] px-8">{children}</div>;
}
