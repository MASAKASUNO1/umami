'use client';
import { Text } from 'react-basics';
import Link from 'next/link';
import classNames from 'classnames';
import ThemeButton from 'components/input/ThemeButton';
import LanguageButton from 'components/input/LanguageButton';
import ProfileButton from 'components/input/ProfileButton';
import useMessages from 'components/hooks/useMessages';
import HamburgerButton from 'components/common/HamburgerButton';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.css';

export function NavBar() {
  const pathname = usePathname();
  const { formatMessage, labels } = useMessages();

  const links = [
    { label: formatMessage(labels.dashboard), url: '/dashboard' },
    { label: formatMessage(labels.websites), url: '/websites' },
    { label: formatMessage(labels.reports), url: '/reports' },
    { label: formatMessage(labels.settings), url: '/settings' },
  ].filter(n => n);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Text>Masami</Text>
      </div>
      <div className={styles.links}>
        {links.map(({ url, label }) => {
          return (
            <Link
              key={url}
              href={url}
              className={classNames({ [styles.selected]: pathname.startsWith(url) })}
            >
              <Text>{label}</Text>
            </Link>
          );
        })}
      </div>
      <div className={styles.actions}>
        <ThemeButton />
        <LanguageButton />
        <ProfileButton />
      </div>
      <div className={styles.mobile}>
        <HamburgerButton />
      </div>
    </div>
  );
}

export default NavBar;
