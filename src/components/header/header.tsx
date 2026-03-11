
import classNames from 'classnames/bind'
import styles from './header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from '@/contexts/theme'
import { Language, useI18n } from '@/contexts/i18n'
const cx = classNames.bind(styles)

const header = () => {
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useI18n()

  const isActive = (href: string) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname.startsWith(href)
  }

  return (
    <header className={cx('header')}>
      <div className={cx('inner')}>
        <div className={cx('left')}>
          <Link href="/" className={cx('logo')} aria-label="Home">
            BIO
          </Link>
        </div>

        <nav className={cx('nav')} aria-label="Primary">
          <Link href="/" className={cx('navLink', { active: isActive('/') })}>
            {t('nav_home')}
          </Link>
           <Link href="/about" className={cx('navLink', { active: isActive('/about') })}>
            {t('nav_about')}
          </Link>
          <Link href="/project" className={cx('navLink', { active: isActive('/project') })}>
            {t('nav_project')}
          </Link>
          <Link href="/hobbie" className={cx('navLink', { active: isActive('/hobbie') })}>
            {t('nav_hobbie')}
          </Link>
          <Link href="/contact" className={cx('navLink', { active: isActive('/contact') })}>
            {t('nav_contact')}
          </Link>
        </nav>

        <div className={cx('right')}>
          <div className={cx('actions')}>
            <button
              type="button"
              className={cx('themeToggle')}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? t('header_theme_light') : t('header_theme_dark')}
            </button>

            <select
              className={cx('languageSelect')}
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              aria-label="Language"
            >
              <option value="vi">VI</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}

export default header