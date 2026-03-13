import { useEffect, useState } from 'react'
import './Header.css'
import { FaBriefcase, FaFolderOpen, FaCode, FaPalette } from 'react-icons/fa'

function Header({ activeSection, setActiveSection }) {
  // ランダム表示したい画像をここに追加（public/avatar/random 配下）
  const avatarImages = [
    `${import.meta.env.BASE_URL}avatar/random/avatar-01.png`,
    `${import.meta.env.BASE_URL}avatar/random/avatar-02.png`,
    `${import.meta.env.BASE_URL}avatar/random/avatar-03.png`,
    `${import.meta.env.BASE_URL}avatar/random/avatar-04.png`,
    `${import.meta.env.BASE_URL}avatar/random/avatar-05.png`,
    `${import.meta.env.BASE_URL}avatar/random/avatar-06.png`,
  ]
  const [avatarImageUrl] = useState(() => avatarImages[Math.floor(Math.random() * avatarImages.length)])
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  const profileDescription = '大学卒業後、プログラマー・企画・ゲームシナリオ制作を経験し、その後はWebデザイナーとして受託制作会社でクライアントワークに携わってきました。事業会社ではインハウスデザインに加え、ディレクションやメンバーマネジメント、ユーザー分析、CX設計、UI/UX改善を担当。直近は受託開発会社で、ディレクター兼UI/UXデザイナーとして業務に携わり、現在はUX領域を中心に、ユーザーインタビューやCJM作成を通じた課題整理から改善提案に関わる業務を担当することが多いです。'
  const profileNote = '最近は学習のため、ノーコードでアプリを作ってみたりしています。'

  useEffect(() => {
    if (!isProfileModalOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsProfileModalOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isProfileModalOpen])

  return (
    <div className="header-stack">
      <header className="header">
        <div className="header-container">
          <div className="header-title">
            <div className="header-content-row">
              <div className="header-title-row">
                <div className="header-avatar">
                  <img
                    src={avatarImageUrl}
                    alt="プロフィール画像"
                    className="header-avatar-image"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                <div className="avatar-float-dots" aria-hidden="true">
                  <span className="avatar-float-dot" />
                  <span className="avatar-float-dot" />
                  <span className="avatar-float-dot" />
                  <span className="avatar-float-dot" />
                  <span className="avatar-float-dot" />
                </div>
              </div>
              <div className="header-copy">
                <div className="header-title-text">
                  <h1>sakamoto</h1>
                  <span className="header-subtitle">UI/UXデザイナー</span>
                </div>
                <p className="header-description header-description-clamped">{profileDescription}</p>
                <button
                  type="button"
                  className="header-readmore-button"
                  onClick={() => setIsProfileModalOpen(true)}
                >
                  続きを見る
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="header-nav">
        <div className="header-nav-container">
          <button
            className={`nav-button ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveSection('experience')}
          >
            <FaBriefcase className="nav-icon" />
            <span className="nav-text">Experience</span>
          </button>
          <button
            className={`nav-button ${activeSection === 'works' ? 'active' : ''}`}
            onClick={() => setActiveSection('works')}
          >
            <FaFolderOpen className="nav-icon" />
            <span className="nav-text">Works</span>
          </button>
          <button
            className={`nav-button ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveSection('skills')}
          >
            <FaCode className="nav-icon" />
            <span className="nav-text">Skills</span>
          </button>
          <button
            className={`nav-button ${activeSection === 'guideline' ? 'active' : ''}`}
            onClick={() => setActiveSection('guideline')}
          >
            <FaPalette className="nav-icon" />
            <span className="nav-text">Guideline</span>
          </button>
        </div>
      </nav>

      {isProfileModalOpen ? (
        <div className="header-modal-backdrop" onClick={() => setIsProfileModalOpen(false)}>
          <div
            className="header-modal"
            role="dialog"
            aria-modal="true"
            aria-label="プロフィール詳細"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="header-modal-head">
              <h3 className="header-modal-title">プロフィール詳細</h3>
              <button
                type="button"
                className="header-modal-close"
                onClick={() => setIsProfileModalOpen(false)}
                aria-label="閉じる"
              >
                ×
              </button>
            </div>
            <div className="header-modal-body">
              <p className="header-description">{profileDescription}</p>
              <p className="header-description header-description-note">{profileNote}</p>
              <ul className="header-value-summary">
                <li>
                  <span className="header-value-tag">設計</span>
                  <span className="header-value-text">課題整理から情報設計・画面設計まで、状況に応じて幅広く担当</span>
                </li>
                <li>
                  <span className="header-value-tag">UX</span>
                  <span className="header-value-text">ユーザーインタビュー/CJMを起点に改善提案を実施</span>
                </li>
                <li>
                  <span className="header-value-tag">連携</span>
                  <span className="header-value-text">デザインと実装の橋渡し役として、意思決定と開発をサポート</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Header
