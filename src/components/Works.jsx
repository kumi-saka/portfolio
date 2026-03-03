import { createElement } from 'react'
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
    scope: ['情報設計', 'UI', 'プロトタイプ', '進行管理', '実装連携'],
    tools: ['Cursor AI', 'Storybook', 'Spotify API（想定）'],
    note: 'ノーコードを起点に制作し、デザインツールを使わずにUI設計を進行。コンポーネントはStorybookで管理し、設計と実装の往復をしやすい構成にしています。',
    techSummary: 'ノーコード構築、コンポーネントをStorybook管理、Spotify連携は設計済み（実装途中）。',
    impact: 'デモ公開とUIカタログ運用を実現し、改善サイクルを回せる開発土台を構築。',
    caseSummary: {
      challenge: '学習プロジェクトでも、実務に近い設計・改善フローを再現したい。',
      approach: 'コンポーネント単位で仕様を分解し、Storybookで見た目と状態を検証。GitHub Pagesで公開し、改善サイクルを回せる状態を整備。',
      result: 'デモ公開とUIカタログ運用まで実装。UX改善を継続できる土台を構築。',
    },
    appUrl: 'https://kumi-saka.github.io/pomodoro-study-music/',
    appLabel: 'デモサイト',
    storybookUrl: 'https://695f311e6b1f9784a5cc8058-enwmtuvkju.chromatic.com/',
    repoUrl: 'https://github.com/kumi-saka/pomodoro-study-music/',
    titleIcon: FaClock,
  },
  {
    title: '占いアプリ CS・CX達成のための発案・構築・運用全般',
    year: '2019',
    responsibilities: ['デザイン', 'ディレクション', 'CX'],
    scope: ['情報設計', 'UI', '進行管理', '改善運用'],
    tools: ['Adobe XD', 'Googleスプレッドシート', 'Google Analytics'],
    impact: '継続的な改善運用を通じて、CS/CXの観点で施策立案から実装連携までを推進。',
    titleIcon: FaMoon,
  },
  {
    title: '事業会社 コーポレートサイトリニューアル',
    year: '2019',
    responsibilities: ['デザイン', 'ディレクション'],
    scope: ['情報設計', 'UI', '進行管理'],
    tools: ['Adobe XD', 'Figma'],
    impact: 'コーポレート情報の構造を再設計し、事業理解を促進する情報導線へ刷新。',
    titleIcon: FaBuilding,
  },
  {
    title: '保育士専門学校オフィシャルサイトリニューアル',
    year: '2018',
    responsibilities: ['デザイン', 'コーディング'],
    scope: ['情報設計', 'UI', '実装連携'],
    tools: ['Adobe XD', 'Photoshop'],
    impact: '受験検討層の閲覧体験を意識した導線設計で、学校情報への到達性を改善。',
    titleIcon: FaChild,
  },
  {
    title: '電話占い サービスロゴデザイン作成',
    year: '2018',
    responsibilities: ['デザイン'],
    scope: ['コンセプト設計', 'UI', 'ビジュアル設計'],
    tools: ['Illustrator', 'Photoshop'],
    impact: 'サービスコンセプトを視覚言語へ落とし込み、媒体横断で使えるブランド基盤を整備。',
    titleIcon: FaPenNib,
  },
  {
    title: '電話占いサイト・クリエイティブデザインリニューアル',
    year: '2018',
    responsibilities: ['デザイン', 'コーディング'],
    scope: ['情報設計', 'UI', '実装連携'],
    tools: ['Adobe XD', 'Photoshop'],
    impact: '既存クリエイティブを整理し、更新運用を見据えたUIデザインへ再構成。',
    titleIcon: FaMoon,
  },
  {
    title: 'グループ会社（人材領域） コーポレートサイトリニューアル',
    year: '2017',
    responsibilities: ['デザイン', 'コーディング'],
    scope: ['情報設計', 'UI', '実装連携'],
    tools: ['Adobe XD', 'Photoshop'],
    impact: '企業情報の見せ方を再設計し、採用・事業両面で伝わる構成へ刷新。',
    titleIcon: FaUsers,
  },
  {
    title: '食品系商社コーポレートサイト リニューアル',
    year: '2017',
    responsibilities: ['デザイン', 'サブコーディング'],
    scope: ['情報設計', 'UI', '実装連携'],
    tools: ['Adobe XD', 'Googleスプレッドシート'],
    impact: '部門間連携で制作進行を安定化し、公開までの実装連携を円滑に推進。',
    titleIcon: FaShippingFast,
  },
  {
    title: '国内メーカー化粧品ブランドの海外向けサイト 新規構築',
    year: '2016',
    responsibilities: ['デザイン', 'サブコーディング'],
    scope: ['情報設計', 'UI', '実装連携'],
    tools: ['Adobe XD', 'Google Analytics'],
    impact: '海外向けブランド訴求を意識したUIを構築し、グローバル展開の初期基盤を整備。',
    titleIcon: FaPaintBrush,
  },
  {
    title: 'グループ会社（人材領域） 新卒採用サイトリニューアル',
    year: '2016',
    responsibilities: ['デザイン', 'サブコーディング'],
    scope: ['情報設計', 'UI', '実装連携'],
    tools: ['Adobe XD', 'Googleスプレッドシート'],
    impact: '学生向けの情報優先度を再設計し、採用導線を整理したサイト体験へ改善。',
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
      <p className="works-lead">
        本ページには、公開可能な範囲で2019年までの主な案件と最近の個人制作を掲載しています。
        <br />
        クライアントワークや社内システム案件の詳細は、守秘義務の観点から掲載可能な範囲で一部のみ記載しています。
      </p>

      <div className="works-list">
        {works.map((work, index) => {
          const toolIcons = (work.tools || [])
            .filter((tool) => Boolean(toolIconMap[tool]))
            .slice(0, 3)
          const TitleIcon = work.titleIcon || FaCode

          return (
            <div key={index} className="work-item">
              <div className="work-item-content">
                <div className="work-inline-tools" aria-label="使用ツールアイコン">
                  {toolIcons.length > 0 ? (
                    toolIcons.map((tool) => (
                      <span key={tool} className="work-tool-icon-chip" title={tool}>
                        {createElement(toolIconMap[tool], {
                          className: `work-tool-icon ${getToolIconClass(tool)}`
                        })}
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
                {work.techSummary && (
                  <p className="work-tech-summary">
                    <span className="work-tech-summary-label">技術要約:</span>
                    {work.techSummary}
                  </p>
                )}
                {work.impact && (
                  <p className="work-impact">
                    <span className="work-impact-label">成果（公開可能範囲）:</span>
                    {work.impact}
                  </p>
                )}
                {work.caseSummary && (
                  <div className="work-case-summary">
                    <p className="work-case-item"><span className="work-case-label">課題:</span>{work.caseSummary.challenge}</p>
                    <p className="work-case-item"><span className="work-case-label">施策:</span>{work.caseSummary.approach}</p>
                    <p className="work-case-item"><span className="work-case-label">成果:</span>{work.caseSummary.result}</p>
                  </div>
                )}
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
                {work.scope && work.scope.length > 0 && (
                  <div className="work-scope">
                    <span className="work-label">担当範囲:</span>
                    <span className="work-scope-list">{work.scope.join(' / ')}</span>
                  </div>
                )}
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
