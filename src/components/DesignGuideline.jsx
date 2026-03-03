import './DesignGuideline.css'

const colorGroups = [
  {
    title: 'Background',
    swatches: [
      { name: 'Primary', code: '--color-bg-primary', value: '#ffffff', usage: 'ページ全体のベース背景' },
      { name: 'Secondary', code: '--color-bg-secondary', value: '#fafbfc', usage: 'カードやヘッダー背景' },
      { name: 'Tertiary', code: '--color-bg-tertiary', value: '#f4f6f8', usage: '補助的な面・タグ背景' },
    ],
  },
  {
    title: 'Text & Accent',
    swatches: [
      { name: 'Text Primary', code: '--color-text-primary', value: '#1a1d29', usage: '見出し・主要本文' },
      { name: 'Text Secondary', code: '--color-text-secondary', value: 'rgba(26,29,41,0.7)', usage: '本文の補助情報' },
      { name: 'Accent', code: '--color-accent', value: '#DC2626', usage: '強調・アクティブ状態' },
    ],
  },
]

const typeTokens = [
  { sample: 'Section Title', size: '32px', weight: '700', lineHeight: '1.3', usage: '各セクションの見出し' },
  { sample: 'Card Title', size: '18px', weight: '600', lineHeight: '1.5', usage: 'カード内タイトル' },
  { sample: 'Body Text', size: '14px', weight: '400', lineHeight: '1.7', usage: '説明文・本文' },
  { sample: 'Meta / Label', size: '12px', weight: '500', lineHeight: '1.6', usage: '補助テキスト・ラベル' },
]

const spacingTokens = [
  { token: '--spacing-xs', px: 8 },
  { token: '--spacing-sm', px: 16 },
  { token: '--spacing-md', px: 24 },
  { token: '--spacing-lg', px: 32 },
]

const radiusTokens = [
  { token: '--radius-sm', px: 8, usage: 'タグや小要素' },
  { token: '--radius-md', px: 12, usage: '標準カード' },
  { token: '--radius-lg', px: 16, usage: '大きめの面要素' },
]

function DesignGuideline() {
  return (
    <section className="design-guideline">
      <h2 className="section-title">Design Guideline</h2>
      <div className="guideline-philosophy">
        <h3>Design Philosophy</h3>
        <p>わかりやすく、シンプルに。必要な情報が自然に伝わる構成を大切にしています。</p>
        <ul className="philosophy-list">
          <li>情報の優先度を明確化し、視線移動が自然になるレイアウトを設計する</li>
          <li>装飾は目的に合わせて最小限にし、可読性と操作性を優先する</li>
          <li>デザインと実装の往復を前提に、再利用可能なUI単位で構成する</li>
        </ul>
      </div>

      <div className="guideline-grid">
        <article className="guideline-card">
          <h3>Color System</h3>
          <p>淡い背景と高コントラストの文字色を軸に、アクセントで状態を示します。</p>
          <div className="color-group-list">
            {colorGroups.map((group) => (
              <div key={group.title} className="color-group">
                <span className="color-group-title">{group.title}</span>
                <div className="swatch-list">
                  {group.swatches.map((swatch) => (
                    <div key={swatch.code} className="swatch-item">
                      <span className="swatch-color" style={{ backgroundColor: swatch.value }} />
                      <div className="swatch-meta">
                        <strong>{swatch.name}</strong>
                        <code>{swatch.code}</code>
                        <small>{swatch.usage}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="guideline-card">
          <h3>Typography</h3>
          <p>`Inter` と `Noto Sans JP` をベースに、役割ごとにサイズと太さを整理しています。</p>
          <div className="type-token-list">
            {typeTokens.map((token) => (
              <div key={token.sample} className="type-token-item">
                <div
                  className="type-token-sample"
                  style={{ fontSize: token.size, fontWeight: token.weight, lineHeight: token.lineHeight }}
                >
                  {token.sample}
                </div>
                <div className="type-token-meta">
                  <code>font-size: {token.size}</code>
                  <code>font-weight: {token.weight}</code>
                  <small>{token.usage}</small>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="guideline-card">
          <h3>Spacing</h3>
          <p>余白は4pxの倍数を軸にトークン化し、セクションとカード間のリズムを統一します。</p>
          <div className="spacing-list">
            {spacingTokens.map((token) => (
              <div key={token.token} className="spacing-item">
                <code>{token.token}</code>
                <span className="spacing-bar" style={{ width: `${token.px * 3}px` }} />
                <small>{token.px}px</small>
              </div>
            ))}
          </div>
        </article>

        <article className="guideline-card">
          <h3>Card Pattern</h3>
          <p>情報カードは「タイトル / 補足 / メタ情報」の3層で一貫した読み順を作ります。</p>
          <div className="card-preview-list">
            <div className="card-preview-item">
              <span>Card Header</span>
              <code>Title + icon</code>
              <small>まず「何の情報か」を明示</small>
            </div>
            <div className="card-preview-item">
              <span>Card Body</span>
              <code>summary / note / context</code>
              <small>目的と背景を短く伝える</small>
            </div>
            <div className="card-preview-item">
              <span>Card Meta</span>
              <code>year / role / tools</code>
              <small>比較しやすい要素を末尾に整理</small>
            </div>
          </div>
          <div className="radius-list">
            {radiusTokens.map((token) => (
              <div key={token.token} className="radius-item">
                <span className="radius-shape" style={{ borderRadius: `${token.px}px` }} />
                <div className="radius-meta">
                  <code>{token.token}: {token.px}px</code>
                  <small>{token.usage}</small>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default DesignGuideline
