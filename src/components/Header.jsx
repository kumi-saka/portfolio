import './Header.css'
import { FaBriefcase, FaFolderOpen, FaCode, FaPalette } from 'react-icons/fa'
import { FaSpaghettiMonsterFlying, FaPlane } from 'react-icons/fa6'

function Header({ activeSection, setActiveSection }) {
  const avatarImageUrl = `${import.meta.env.BASE_URL}avatar/fuzoku-kawayurashisa.jpg`

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-title">
          <div className="header-content-row">
            <div className="header-title-row">
              <div className="header-avatar">
                <img
                  src={avatarImageUrl}
                  alt="風俗三十二相 かわゆらしさう"
                  className="header-avatar-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
              <div className="avatar-float-icons" aria-hidden="true">
                <FaSpaghettiMonsterFlying className="avatar-float-icon avatar-float-icon-monster" />
                <FaPlane className="avatar-float-icon avatar-float-icon-plane" />
              </div>
            </div>
            <div className="header-copy">
              <div className="header-title-text">
                <h1>sakamoto</h1>
                <span className="header-subtitle">UI/UXデザイナー</span>
              </div>
              <p className="header-description">
                大学卒業後、プログラマー・企画・ゲームシナリオ制作を経験し、その後はWebデザイナーとして受託制作会社
                でクライアントワークに携わってきました。事業会社ではインハウスデザインに加え、ディレクションや
                メンバーマネジメント、ユーザー分析、CX設計、UI/UX改善を担当。直近は受託開発会社で、
                ディレクター兼UI/UXデザイナーとして業務に携わり、現在はUX領域を中心に、ユーザーインタビューや
                CJM作成を通じた課題整理から改善提案に関わる業務を担当することが多いです。
              </p>
            </div>
          </div>
        </div>
      </div>
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
    </header>
  )
}

export default Header
