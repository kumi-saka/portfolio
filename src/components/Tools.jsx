import './Tools.css'

const tools = [
  {
    name: 'Adobe XD',
    icon: '/tools/adobe-xd.png'
  },
  {
    name: 'Googleスプレッドシート',
    icon: '/tools/google-sheets.png'
  },
  {
    name: 'Google Analytics',
    icon: '/tools/google-analytics.png'
  }
]

function Tools() {
  return (
    <section className="tools">
      <h2 className="section-title">Tools & topics</h2>

      <div className="tools-list">
        {tools.map((tool, index) => (
          <div key={index} className="tool-item">
            <div className="tool-icon">
              <img
                src={tool.icon}
                alt={tool.name}
                className="tool-icon-image"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            <div className="tool-name">{tool.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tools
