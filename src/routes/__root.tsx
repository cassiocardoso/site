import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from '@/lib/theme-context';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
