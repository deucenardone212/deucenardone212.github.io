import type { ComponentProps } from 'react';
// Plain document navigation keeps the portfolio independent of a server runtime.
export default function SiteLink({ children, ...props }: ComponentProps<'a'>) {
  return <a {...props}>{children}</a>;
}
