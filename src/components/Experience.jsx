import './Experience.css'

const experiences = [
  {
    period: '2003 - 2007',
    title: '大学卒業',
    description: '法学部政治経済学科を卒業',
    company: ''
  },
  {
    period: '2007 - 2009',
    title: 'COBOLプログラマ',
    company: 'ITベンダー会社',
    description: 'プログラマ・SEとして保険システムの保守運用業務に従事',
    tasks: ['デザイン', 'コーディング', '企画制作進行']
  },
  {
    period: '2009 - 2010',
    title: 'デザイナー/プランナー',
    company: 'デジタルコンテンツ制作会社',
    description: 'デザイナーとしてコンテンツサイト、新聞などの広告クリエイティブを作成。プランナーとして配信コンテンツ企画、制作、進行を担当',
    tasks: ['デザイン', 'コーディング', '企画制作進行']
  },
  {
    period: '2010 - 2016',
    title: 'デザイナー',
    company: 'インハウスサービス（エンタメ・求人業界）',
    description: '自社のエンタメ系・求人サイト（ポータル、LP、WPブログ）の制作を担当。反響数字に基づき週単位でPDCAを実施。デザイナーチームのマネジメントも担当。',
    tasks: ['デザイン', 'コーディング', 'メンバーマネジメント']
  },
  {
    period: '2016 - 2018',
    title: 'デザイナー',
    company: '受託製作会社',
    description: '化粧品・教育・製造・人材など他業種に大手クライアントのコーポレートサイト、採用サイト、プロダクトサイト、サービスサイトのリニューアルを担当。',
    tasks: ['デザイン', 'コーディング', 'サブディレクション']
  },
  {
    period: '2018 - 2020',
    title: 'デザイナー',
    company: 'インハウス事業会社',
    description: 'コーポレートや自社サービスのサイト・広告・ブランディングなど会社のクリエイティブ全般のデザインを担当。ユーザーインタビュー、カスタマージャーニーマップ作成などのカスタマーサクセス領域も担当。',
    tasks: ['デザイン', 'ディレクション', 'CX']
  },
  {
    period: '2020 -',
    title: 'UI/UXデザイナー・ディレクター',
    company: '受託制作・開発事業会社',
    description: '基幹システムや教育関連など幅広い業界のアプリやサイトの受託業務をメインに、ユーザーリサーチからUI/UX改善提案・デザイン作成まで一貫して行なっています。',
    tasks: ['ディレクション', 'デザイン', 'UX検討', 'たまにコーディング']
  }
]

function Experience() {
  // 新しい順に並び替え（配列を逆順にする）
  const sortedExperiences = [...experiences].reverse()

  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-list">
        {sortedExperiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-period">{exp.period}</div>
            <div className="experience-content">
              <h3 className="experience-title">
                {exp.title}
                {exp.company && <span className="experience-company"> ｜{exp.company}</span>}
              </h3>
              <p className="experience-description">{exp.description}</p>
              {exp.tasks && (
                <div className="experience-tasks">
                  <span className="experience-tasks-label">担当業務：</span>
                  {exp.tasks.map((task, taskIndex) => (
                    <span key={taskIndex} className="experience-task">
                      {task}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
