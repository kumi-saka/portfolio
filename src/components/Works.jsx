import './Works.css'

const works = [
  {
    title: '占いアプリ CS・CX達成のための発案・構築・運用全般',
    year: '2019',
    responsibilities: ['デザイン', 'ディレクション', 'CX'],
    tools: ['Adobe XD', 'Googleスプレッドシート', 'Google Analytics'],
    thumbnail: '/works-art/the-orrery.jpg',
    thumbnailPosition: '50% 34%',
    thumbnailScale: 1.03
  },
  {
    title: '事業会社 コーポレートサイトリニューアル',
    year: '2019',
    responsibilities: ['デザイン', 'ディレクション'],
    tools: ['Adobe XD', 'Figma'],
    thumbnail: '/works-art/portraits-stock-exchange.jpg',
    thumbnailPosition: '50% 36%',
    thumbnailScale: 1.04
  },
  {
    title: '保育士専門学校オフィシャルサイトリニューアル',
    year: '2018',
    responsibilities: ['デザイン', 'コーディング'],
    tools: ['Adobe XD', 'Photoshop'],
    thumbnail: '/works-art/childrens-games.jpg',
    thumbnailPosition: '50% 34%',
    thumbnailScale: 1.03
  },
  {
    title: '電話占い サービスロゴデザイン作成',
    year: '2018',
    responsibilities: ['デザイン'],
    tools: ['Illustrator', 'Photoshop'],
    thumbnail: '/works-art/vintage-printers-mark.png',
    thumbnailPosition: '50% 50%',
    thumbnailScale: 1
  },
  {
    title: '電話占いサイト・クリエイティブデザインリニューアル',
    year: '2018',
    responsibilities: ['デザイン', 'コーディング'],
    tools: ['Adobe XD', 'Photoshop'],
    thumbnail: '/works-art/kindt-fortune-teller.jpg',
    thumbnailPosition: '50% 37%',
    thumbnailScale: 1.05
  },
  {
    title: 'グループ会社（人材領域） コーポレートサイトリニューアル',
    year: '2017',
    responsibilities: ['デザイン', 'コーディング'],
    tools: ['Adobe XD', 'Photoshop'],
    thumbnail: '/works-art/cotton-merchants-office.jpg',
    thumbnailPosition: '50% 38%',
    thumbnailScale: 1.03
  },
  {
    title: '食品系商社コーポレートサイト リニューアル',
    year: '2017',
    responsibilities: ['デザイン', 'サブコーディング'],
    tools: ['Adobe XD', 'Googleスプレッドシート'],
    thumbnail: '/works-art/banquet-still-life.jpg',
    thumbnailPosition: '50% 55%'
  },
  {
    title: '国内メーカー化粧品ブランドの海外向けサイト 新規構築',
    year: '2016',
    responsibilities: ['デザイン', 'サブコーディング'],
    tools: ['Adobe XD', 'Google Analytics'],
    thumbnail: '/works-art/young-woman-toilette.jpg',
    thumbnailPosition: '66% 24%',
    thumbnailScale: 1.08
  },
  {
    title: 'グループ会社（人材領域） 新卒採用サイトリニューアル',
    year: '2016',
    responsibilities: ['デザイン', 'サブコーディング'],
    tools: ['Adobe XD', 'Googleスプレッドシート'],
    thumbnail: '/works-art/moulin-de-la-galette.jpg',
    thumbnailPosition: '50% 34%',
    thumbnailScale: 1.03
  }
]

function Works() {
  return (
    <section className="works">
      <h2 className="section-title">Works</h2>

      <div className="works-list">
        {works.map((work, index) => (
          <div key={index} className="work-item">
            {work.thumbnail && (
              <div className="work-thumbnail">
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="work-thumbnail-image"
                  loading="lazy"
                  style={{
                    objectPosition: work.thumbnailPosition || 'center',
                    '--thumb-scale': work.thumbnailScale || 1.04
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            )}
            <div className="work-item-content">
              <h3 className="work-title">{work.title}</h3>
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
        ))}
      </div>
    </section>
  )
}

export default Works
