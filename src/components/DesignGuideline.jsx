import './DesignGuideline.css'
import { FaSpaghettiMonsterFlying } from 'react-icons/fa6'

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
      { name: 'Accent Green', code: '--color-accent-green', value: '#10b981', usage: '補助アクセント' },
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
          <h3>Works Card / Detail Modal</h3>
          <p>カードは「何の案件か → 何をしたか → いつの案件か」の順で、短時間で把握できる構成にします。</p>
          <ol className="guideline-plain-list">
            <li className="guideline-plain-item">
              <strong>1. 案件名（最初に読む）</strong>
              <code>例: ポモドーロアプリ（個人制作）</code>
              <small>カードを開かなくても、案件の種類が分かるようにする。</small>
            </li>
            <li className="guideline-plain-item">
              <strong>2. 担当範囲（次に読む）</strong>
              <code>例: 情報設計 / UI / プロトタイプ</code>
              <small>自分の役割を1行で示し、比較しやすくする。</small>
            </li>
            <li className="guideline-plain-item">
              <strong>3. 年・ツール（最後に確認）</strong>
              <code>例: YEAR 2026 / Figma / Storybook</code>
              <small>時期と技術要素を末尾に置き、複数案件を並べて比較しやすくする。</small>
            </li>
          </ol>
          <div className="guideline-plain-meta">
            <p><strong>構造:</strong> Thumbnail / Title / Meta / Action</p>
            <p><strong>状態:</strong> default / hover / active を枠線と影で差分化</p>
            <p><strong>可読性:</strong> タイトル2行以内、メタは短文で統一</p>
          </div>
          <div className="component-preview-card">
            <article className="guideline-work-card-preview">
              <div className="guideline-work-card-thumb">16:9</div>
              <div className="guideline-work-card-body">
                <h4>ポモドーロアプリ（個人制作）</h4>
                <p>担当範囲: 情報設計 / UI / プロトタイプ</p>
                <span>詳細を見る</span>
              </div>
            </article>
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

        <article className="guideline-card">
          <h3>Skill Ring</h3>
          <p>スキルをカテゴリ別に整理し、リングで相対的な強みをひと目で伝える構成にします。</p>
          <ol className="guideline-plain-list">
            <li className="guideline-plain-item">
              <strong>1. カテゴリで整理</strong>
              <code>例: デザイン / 開発 / UX / その他</code>
              <small>近いスキルをまとめて、全体のバランスを把握しやすくする。</small>
            </li>
            <li className="guideline-plain-item">
              <strong>2. リングで相対値を表示</strong>
              <code>例: Figma 75%</code>
              <small>厳密な評価ではなく、得意領域の目安として可視化する。</small>
            </li>
            <li className="guideline-plain-item">
              <strong>3. アイコンで認識性を補助</strong>
              <code>画像がない場合はフォールバックアイコンを表示</code>
              <small>視覚的に識別しやすくし、情報欠損を防ぐ。</small>
            </li>
          </ol>
          <div className="guideline-plain-meta">
            <p><strong>構造:</strong> Ring / Icon / Label</p>
            <p><strong>状態:</strong> カードはカテゴリ単位でグルーピング</p>
            <p><strong>可読性:</strong> ラベルは短く、アイコンとセットで表示</p>
          </div>
          <div className="component-preview-card">
            <div className="guideline-skill-ring-preview">
              <div className="guideline-skill-ring" aria-hidden="true">
                <span className="guideline-skill-ring-inner">
                  <img
                    src={`${import.meta.env.BASE_URL}skills/figma.png`}
                    alt="Figma"
                    className="guideline-skill-icon-image"
                  />
                </span>
              </div>
              <div className="guideline-skill-meta">
                <strong>Figma</strong>
                <small>Skill Ring Sample</small>
              </div>
            </div>
          </div>
        </article>

        <article className="guideline-card">
          <h3>Character (かもめ)</h3>
          <p>ヘッダー上を飛行する装飾キャラクター。遊びごころのあるアニメーションを入れたくて入れてみました。</p>
          <div className="component-preview-card component-preview-card-plain">
            <div className="guideline-motion-preview bird-only" aria-hidden="true">
              <svg className="guideline-bird-svg bird-a" viewBox="0 0 32 16">
                <path className="guideline-bird-path" d="M2 12 Q8 2 16 12 Q24 2 30 12" />
              </svg>
              <svg className="guideline-bird-svg bird-b" viewBox="0 0 32 16">
                <path className="guideline-bird-path" d="M2 12 Q8 2 16 12 Q24 2 30 12" />
              </svg>
            </div>
          </div>
        </article>

        <article className="guideline-card">
          <h3>Character (かに)</h3>
          <p>ページ右下でふわふわ動く装飾キャラクター。遊びごころのあるアニメーションを入れたくて入れてみました。</p>
          <div className="component-preview-card component-preview-card-plain">
            <div className="guideline-motion-preview crab-only" aria-hidden="true">
              <FaSpaghettiMonsterFlying className="guideline-crab-icon" />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default DesignGuideline
