
import { useI18n } from '@/contexts/i18n'
import classNames from 'classnames/bind'
import styles from '@/styles/About.module.scss'

const cx = classNames.bind(styles)

const About = () => {
  const { t } = useI18n()
  return (
    <div className={cx('about')}>
      <div className={cx('container')}>
        <div className={cx('header')}>
          <h1 className={cx('title')}>{t('about_title')}</h1>
          <p className={cx('subtitle')}>{t('about_subtitle')}</p>
        </div>

        <div className={cx('grid')}>
          {/* Education Section */}
          <div className={cx('section')}>
            <h2 className={cx('sectionTitle')}>{t('about_sectionTitle1')}</h2>
            <div className={cx('infoItem')}>
              <div className={cx('infoLabel')}>University</div>
              <div className={cx('infoValue')}>University of Information Technology</div>
            </div>
            <div className={cx('infoItem')}>
              <div className={cx('infoLabel')}>Major</div>
              <div className={cx('infoValue')}>Information Technology</div>
            </div>
            <div className={cx('infoItem')}>
              <div className={cx('infoLabel')}>Graduation Year</div>
              <div className={cx('infoValue')}>...</div>
            </div>
            <div className={cx('gpaHighlight')}>
              GPA: .../4.0
            </div>
          </div>

          {/* Certificates Section */}
          {/* <div className={cx('section')}>
            <h2 className={cx('sectionTitle')}>Certificates</h2>
            <div className={cx('certificateItem')}>
              <span className={cx('certName')}>🏆 MOS: Microsoft Office Specialist</span>
              <span className={cx('certDate')}>2023</span>
            </div>
            <div className={cx('certificateItem')}>
              <span className={cx('certName')}>🎓 IELTS Academic: 7.0</span>
              <span className={cx('certDate')}>...</span>
            </div>
            <div className={cx('certificateItem')}>
              <span className={cx('certName')}>💻 Certificate in Computer Science</span>
              <span className={cx('certDate')}>...</span>
            </div>
            <div className={cx('certificateItem')}>
              <span className={cx('certName')}>🌐 TOEFL iBT: 85</span>
              <span className={cx('certDate')}>...</span>
            </div>
          </div> */}

          {/* Work Experience Section */}
          {/* <div className={cx('section')}>
            <h2 className={cx('sectionTitle')}>Work Experience</h2>
            <div className={cx('experienceItem')}>
              <div className={cx('expTitle')}>Frontend Developer Intern</div>
              <div className={cx('expCompany')}>Sai Gon Technology</div>
              <div className={cx('expPeriod')}>June 2025 - October 2025</div>
            </div>
            <div className={cx('experienceItem')}>
              <div className={cx('expTitle')}>Web Developer Freelancer</div>
              <div className={cx('expCompany')}>Upwork</div>
              <div className={cx('expPeriod')}>January 2023 - May 2023</div>
            </div>
            <div className={cx('experienceItem')}>
              <div className={cx('expTitle')}>IT Support Assistant</div>
              <div className={cx('expCompany')}>University IT Department</div>
              <div className={cx('expPeriod')}>September 2022 - December 2022</div>
            </div>
          </div> */}

          {/* Office Skills Section */}
          {/* <div className={cx('section')}>
            <h2 className={cx('sectionTitle')}>Office Skills</h2>
            <div className={cx('skillsGrid')}>
              <div className={cx('skillTag')}>Word</div>
              <div className={cx('skillTag')}>Excel</div>
              <div className={cx('skillTag')}>PowerPoint</div>
              <div className={cx('skillTag')}>CapCut</div>
              <div className={cx('skillTag')}>Google Docs</div>
              <div className={cx('skillTag')}>Google Sheets</div>
            </div>
          </div> */}

          {/* Programming Skills Section */}
          <div className={cx('section')}>
            <h2 className={cx('sectionTitle')}>{t('about_sectionTitle2')}</h2>
            <div className={cx('skillsGrid')}>
              <div className={cx('skillTag')}>HTML</div>
              <div className={cx('skillTag')}>CSS</div>
              <div className={cx('skillTag')}>JavaScript</div>
              <div className={cx('skillTag')}>React</div>
              <div className={cx('skillTag')}>Next.js</div>
              <div className={cx('skillTag')}>Node.js</div>
              <div className={cx('skillTag')}>Express.js</div>
              <div className={cx('skillTag')}>TypeScript</div>
              <div className={cx('skillTag')}>TailwindCSS</div>
              <div className={cx('skillTag')}>MongoDB</div>
              <div className={cx('skillTag')}>Git</div>
              <div className={cx('skillTag')}>Redux</div>
            </div>
          </div>

          {/* Additional Skills Section */}
          <div className={cx('section')}>
            <h2 className={cx('sectionTitle')}>{t('about_sectionTitle3')}</h2>
            <div className={cx('skillsGrid')}>
              <div className={cx('skillTag')}>UI/UX Design</div>
              <div className={cx('skillTag')}>Figma</div>
              <div className={cx('skillTag')}>Video Editing</div>
              <div className={cx('skillTag')}>Word</div>
              <div className={cx('skillTag')}>Excel</div>
              <div className={cx('skillTag')}>PowerPoint</div>
              <div className={cx('skillTag')}>CapCut</div>
              <div className={cx('skillTag')}>Google Docs</div>
              <div className={cx('skillTag')}>Google Sheets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About