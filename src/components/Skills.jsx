import './Skills.css'
import { useState } from 'react'
import { FaUserFriends, FaFileAlt, FaRoute, FaSearch, FaChartBar, FaStickyNote, FaSlack } from 'react-icons/fa'

const skills = {
  design: [
    'Photoshop',
    'Illustrator',
    'Adobe XD',
    'Figma'
  ],
  development: [
    'HTML5',
    'CSS',
    'Scss',
    'JavaScript',
    'PHP',
    'WordPress',
    'Git',
    'GitHub'
  ],
  ux: [
    'ユーザーインタビュー',
    'シナリオ作成',
    'CJM作成',
    'SEO',
    'Google Analytics'
  ],
  other: [
    'notion',
    'Slack'
  ]
}

// 統一されたアイコン背景色（シックなグレー）
const ICON_BG_COLOR = '#4b5563'

// プログレスバーのパーセンテージマッピング
const getSkillPercentage = (skill) => {
  const percentageMap = {
    'Photoshop': 42,
    'Illustrator': 40,
    'UI/UXデザイン': 65,
    'Adobe XD': 70,
    'Figma': 75,
    'HTML5': 75,
    'CSS': 75,
    'Scss': 32,
    'JavaScript': 30,
    'PHP': 32,
    'WordPress': 50,
    'Git': 32,
    'GitHub': 37,
    'ユーザーインタビュー': 75,
    'シナリオ作成': 70,
    'CJM作成': 75,
    'SEO': 32,
    'Google Analytics': 35,
    'notion': 50,
    'Slack': 70
  }
  return percentageMap[skill] || 70
}

// パーセンテージに応じてプログレスバーの色の濃さを計算（0.3〜1.0の範囲）
const getProgressColor = (percentage) => {
  const minOpacity = 0.3
  const maxOpacity = 1.0
  const opacity = minOpacity + (percentage / 100) * (maxOpacity - minOpacity)
  return `rgba(220, 38, 38, ${opacity})`
}

// スキル画像パスマッピング（resume.idから取得した画像）
const getSkillImagePath = (skill) => {
  const imageMap = {
    'Photoshop': '/skills/photoshop.png',
    'Illustrator': '/skills/illustrator.png',
    'UI/UXデザイン': '/skills/uiux.png',
    'Adobe XD': '/skills/adobe-xd.png',
    'Figma': '/skills/figma.png',
    'HTML5': '/skills/html5.png',
    'CSS': '/skills/css.png',
    'Scss': '/skills/scss.png',
    'JavaScript': '/skills/javascript.png',
    'PHP': '/skills/php.png',
    'WordPress': '/skills/wordpress.png',
    'Git': '/skills/git.png',
    'GitHub': '/skills/github.png',
    'SEO': '/skills/seo.png',
    'Google Analytics': '/skills/google-analytics.png',
    'ユーザーインタビュー': '/skills/user-interview.png',
    'シナリオ作成': '/skills/scenario.png',
    'CJM作成': '/skills/cjm.png',
    'notion': '/skills/notion.png',
    'Slack': '/skills/slack.png'
  }
  return imageMap[skill] || null
}

// フォールバックアイコンマッピング
const getFallbackIcon = (skill) => {
  const iconMap = {
    'ユーザーインタビュー': FaUserFriends,
    'シナリオ作成': FaFileAlt,
    'CJM作成': FaRoute,
    'SEO': FaSearch,
    'Google Analytics': FaChartBar,
    'notion': FaStickyNote,
    'Slack': FaSlack
  }
  return iconMap[skill] || null
}

// スキルアイコンコンポーネント
function SkillIcon({ skill }) {
  const [imageError, setImageError] = useState(false)
  const imagePath = getSkillImagePath(skill)
  const FallbackIcon = getFallbackIcon(skill)

  // フォールバックアイコンがある場合は、画像が読み込めない場合または画像パスがない場合に表示
  if (FallbackIcon && (imageError || !imagePath)) {
    return (
      <div className="skill-circle-icon-bg">
        <FallbackIcon style={{ color: '#10B981', fontSize: '24px' }} />
      </div>
    )
  }

  // 画像パスがある場合は画像を表示、エラー時はフォールバックアイコンを表示
  if (imagePath && !imageError) {
    return (
      <div className="skill-circle-icon-bg">
        <img
          src={imagePath}
          alt={skill}
          className="skill-icon-image"
          onError={() => setImageError(true)}
        />
      </div>
    )
  }

  // フォールバックアイコンがない場合は何も表示しない
  return null
}

function Skills() {
  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-group">
        <div className="skill-level">
          <h3 className="skill-level-title">デザイン</h3>
          <div className="skill-cards-grid">
            {skills.design.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-circle">
                  <svg className="skill-circle-svg" viewBox="0 0 100 100">
                    <circle
                      className="skill-circle-bg"
                      cx="50"
                      cy="50"
                      r="30"
                    />
                    <circle
                      className="skill-circle-progress"
                      cx="50"
                      cy="50"
                      r="30"
                      strokeDasharray={`${2 * Math.PI * 30}`}
                      strokeDashoffset={`${2 * Math.PI * 30 * (1 - getSkillPercentage(skill) / 100)}`}
                      style={{ stroke: getProgressColor(getSkillPercentage(skill)) }}
                    />
                  </svg>
                  <SkillIcon skill={skill} />
                </div>
                <div className="skill-circle-label">{skill}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-level">
          <h3 className="skill-level-title">開発</h3>
          <div className="skill-cards-grid">
            {skills.development.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-circle">
                  <svg className="skill-circle-svg" viewBox="0 0 100 100">
                    <circle
                      className="skill-circle-bg"
                      cx="50"
                      cy="50"
                      r="30"
                    />
                    <circle
                      className="skill-circle-progress"
                      cx="50"
                      cy="50"
                      r="30"
                      strokeDasharray={`${2 * Math.PI * 30}`}
                      strokeDashoffset={`${2 * Math.PI * 30 * (1 - getSkillPercentage(skill) / 100)}`}
                      style={{ stroke: getProgressColor(getSkillPercentage(skill)) }}
                    />
                  </svg>
                  <SkillIcon skill={skill} />
                </div>
                <div className="skill-circle-label">{skill}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-level">
          <h3 className="skill-level-title">UX</h3>
          <div className="skill-cards-grid">
            {skills.ux.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-circle">
                  <svg className="skill-circle-svg" viewBox="0 0 100 100">
                    <circle
                      className="skill-circle-bg"
                      cx="50"
                      cy="50"
                      r="30"
                    />
                    <circle
                      className="skill-circle-progress"
                      cx="50"
                      cy="50"
                      r="30"
                      strokeDasharray={`${2 * Math.PI * 30}`}
                      strokeDashoffset={`${2 * Math.PI * 30 * (1 - getSkillPercentage(skill) / 100)}`}
                      style={{ stroke: getProgressColor(getSkillPercentage(skill)) }}
                    />
                  </svg>
                  <SkillIcon skill={skill} />
                </div>
                <div className="skill-circle-label">{skill}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-level">
          <h3 className="skill-level-title">その他</h3>
          <div className="skill-cards-grid">
            {skills.other.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-circle">
                  <svg className="skill-circle-svg" viewBox="0 0 100 100">
                    <circle
                      className="skill-circle-bg"
                      cx="50"
                      cy="50"
                      r="30"
                    />
                    <circle
                      className="skill-circle-progress"
                      cx="50"
                      cy="50"
                      r="30"
                      strokeDasharray={`${2 * Math.PI * 30}`}
                      strokeDashoffset={`${2 * Math.PI * 30 * (1 - getSkillPercentage(skill) / 100)}`}
                      style={{ stroke: getProgressColor(getSkillPercentage(skill)) }}
                    />
                  </svg>
                  <SkillIcon skill={skill} />
                </div>
                <div className="skill-circle-label">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
