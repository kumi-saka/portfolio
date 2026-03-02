import './Works.css'
import {
  FaBuilding,
  FaChild,
  FaClock,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaMoon,
  FaPaintBrush,
  FaPenNib,
  FaRobot,
  FaShippingFast,
  FaUserTie,
  FaUsers,
} from 'react-icons/fa'
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiGoogleanalytics,
  SiGooglesheets,
  SiSpotify,
  SiStorybook,
} from 'react-icons/si'

const works = [
  {
    title: 'ポモドーロアプリ（個人制作）',
    year: '2026',
    responsibilities: ['企画', 'ノーコード制作', 'UIデザイン'],
    tools: ['Cursor AI', 'Storybook', 'Spotify API（想定）'],
    note: 'ノーコードで制作。デザインツールは使用せず、コンポーネントはStorybookで管理。Spotify連携により、プレイリスト音楽が流れる実装を想定。まだ音楽は流れません。',
    appUrl: 'https://kumi-saka.github.io/pomodoro-study-music/',
    appLabel: 'デモサイト',
    storybookUrl: 'https://www.chromatic.com/library?appId=695f311e6b1f9784a5cc8058&inviteToken=chpi_a98586385bf34ec6811c7a9a61bd7b11',
    repoUrl: 'https://github.com/kumi-saka/pomodoro-study-music/',
    titleIcon: FaClock,
  },
  {
    title: '占いアプリ CS・CX達成のための発案・構築・運用全般',
    year: '2019',
    responsibilities: ['デザイン', 'ディレクション', 'CX'],
    tools: ['Adobe XD', 'Googleスプレッドシート', 'Google Analytics'],
    titleIcon: FaMoon,
  },
  {
    title: '事業会社 コーポレートサイトリニューアル',
    year: '2019',
    responsibilities: ['デザイン', 'ディレクション'],
    tools: ['Adobe XD', 'Figma'],
    titleIcon: FaBuilding,
  },
  {
    title: '保育士専門学校オフィシャルサイトリニューアル',
    year: '2018',
    responsibilities: ['デザイン', 'コーディング'],
    tools: ['Adobe XD', 'Photoshop'],
    titleIcon: FaChild,
  },
  {
    title: '電話占い サービスロゴデザイン作成',
    year: '2018',
    responsibilities: ['デザイン'],
    tools: ['Illustrator', 'Photoshop'],
    titleIcon: FaPenNib,
  },
  {
    title: '電話占いサイト・クリエイティブデザインリニューアル',
    year: '2018',
    responsibilities: ['デザイン', 'コーディング'],
    tools: ['Adobe XD', 'Photoshop'],
    titleIcon: FaMoon,
  },
  {
    title: 'グループ会社（人材領域） コーポレートサイトリニューアル',
    year: '2017',
    responsibilities: ['デザイン', 'コーディング'],
    tools: ['Adobe XD', 'Photoshop'],
    titleIcon: FaUsers,
  },
  {
    title: '食品系商社コーポレートサイト リニューアル',
    year: '2017',
    responsibilities: ['デザイン', 'サブコーディング'],
    tools: ['Adobe XD', 'Googleスプレッドシート'],
    titleIcon: FaShippingFast,
  },
  {
    title: '国内メーカー化粧品ブランドの海外向けサイト 新規構築',
    year: '2016',
    responsibilities: ['デザイン', 'サブコーディング'],
    tools: ['Adobe XD', 'Google Analytics'],
    titleIcon: FaPaintBrush,
  },
  {
    title: 'グループ会社（人材領域） 新卒採用サイトリニューアル',
    year: '2016',
    responsibilities: ['デザイン', 'サブコーディング'],
    tools: ['Adobe XD', 'Googleスプレッドシート'],
    titleIcon: FaUserTie,
  },
]

const toolIconMap = {
  'Adobe XD': SiAdobexd,
  Photoshop: SiAdobephotoshop,
  Illustrator: SiAdobeillustrator,
  Figma: SiFigma,
  'Google Analytics': SiGoogleanalytics,
  'Googleスプレッドシート': SiGooglesheets,
  'Cursor AI': FaRobot,
  Storybook: SiStorybook,
  'Spotify API（想定）': SiSpotify,
}

const getToolIconClass = (tool) => {
  if (tool === 'Adobe XD') return 'tool-adobe-xd'
  if (tool === 'Photoshop') return 'tool-photoshop'
  if (tool === 'Illustrator') return 'tool-illustrator'
  if (tool === 'Figma') return 'tool-figma'
  if (tool === 'Google Analytics') return 'tool-google-analytics'
  if (tool === 'Googleスプレッドシート') return 'tool-google-sheets'
  if (tool === 'Cursor AI') return 'tool-cursor-ai'
  if (tool === 'Storybook') return 'tool-storybook'
  if (tool === 'Spotify API（想定）') return 'tool-spotify'
  return 'tool-default'
}

function Works() {
  return (
    <section className="works">
      <h2 className="section-title">Works</h2>
      <p className="works-lead">本ページには、2019までの主な案件と最近の個人制作を掲載しています。</p>

      <div className="works-list">
        {works.map((work, index) => {
          const toolIcons = (work.tools || [])
            .map((tool) => ({
              tool,
              Icon: toolIconMap[tool],
            }))
            .filter((item) => Boolean(item.Icon))
            .slice(0, 3)
          const TitleIcon = work.titleIcon || FaCode

          return (
            <div key={index} className="work-item">
              <div className="work-item-content">
                <div className="work-inline-tools" aria-label="使用ツールアイコン">
                  {toolIcons.length > 0 ? (
                    toolIcons.map(({ tool, Icon }) => (
                      <span key={tool} className="work-tool-icon-chip" title={tool}>
                        <Icon className={`work-tool-icon ${getToolIconClass(tool)}`} />
                      </span>
                    ))
                  ) : (
                    <span className="work-tool-icon-chip">
                      <FaCode className="work-tool-icon" />
                    </span>
                  )}
                </div>
                <h3 className="work-title">
                  <span className="work-title-row">
                    <TitleIcon className="work-title-icon" aria-hidden="true" />
                    <span>{work.title}</span>
                  </span>
                </h3>
                {work.note && <p className="work-note">{work.note}</p>}
                {(work.appUrl || work.storybookUrl || work.repoUrl) && (
                  <div className="work-links">
                    {work.appUrl && (
                      <a
                        href={work.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-repo-link"
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
                        <span>{work.appLabel || '公開URL'}</span>
                      </a>
                    )}
                    {work.storybookUrl && (
                      <a
                        href={work.storybookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-repo-link"
                      >
                        <SiStorybook aria-hidden="true" />
                        <span>Storybook（Chromatic）</span>
                      </a>
                    )}
                    {work.repoUrl && (
                      <a
                        href={work.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-repo-link"
                      >
                        <FaGithub aria-hidden="true" />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </div>
                )}
                <div className="work-overview">
                <div className="work-responsibilities">
                  <span className="work-label">担当:</span>
                  <span className="work-responsibilities-list">
                    {work.responsibilities.join('、')}
                  </span>
                </div>
                <div className="work-year">
                  <span className="work-year-label">YEAR</span>
                  <span className="work-year-value">| {work.year}</span>
                </div>
                {work.tools && work.tools.length > 0 && (
                  <div className="work-tools">
                    <span className="work-tools-label">Tools & topics:</span>
                    <div className="work-tools-list">
                      {work.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="work-tool-item">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Works
