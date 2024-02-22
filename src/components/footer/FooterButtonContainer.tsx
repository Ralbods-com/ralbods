'use client';

import { useSession } from 'next-auth/react';
import LogoutButton from '../ui/button/auth/LogoutButton';
import ColorThemeToggle from '../ui/toggle/theme/ColorThemeToggle';

export default function FooterButtonContainer() {
  const { data: session } = useSession();

  if (session?.user) {
    return <LogoutButton />;
  } else {
    return <ColorThemeToggle />;
  }
}
