import { useEffect, useState } from 'react'
import './DesignGuideline.css'

const fallbackColors = [
  ['--color-navy-accent', '#1d3557', 'ページ上部ライン、見出し色、ガイド系の基調色'],
  ['--color-accent', '#dc2626', 'タブのアクティブ状態、強調テキスト・アイコン'],
  ['--color-accent-hover', '#ef4444', 'アクセントのホバー状態'],
  ['--color-accent-light', 'rgba(220, 38, 38, 0.1)', 'アクセントの薄い背景（補助ハイライト）'],
  ['--color-accent-green', '#10b981', 'Experience の年表示/ドット、Skills の分析リング'],
  ['--color-bg-primary', '#f8fafc', 'ページ全体の背景'],
  ['--color-bg-secondary', '#ffffff', 'ヘッダー・カードなどの面背景'],
  ['--color-bg-tertiary', '#f1f5f9', 'タグ/小要素背景、ホバー時の補助背景'],
  ['--color-text-primary', '#1f2937', '見出し・主要テキスト'],
  ['--color-text-secondary', '#4b5563', '本文・説明文'],
  ['--color-text-tertiary', '#6b7280', '補助テキスト'],
  ['--color-border', '#e2e8f0', '通常の境界線'],
  ['--color-border-hover', '#cbd5e1', 'ホバー時の境界線'],
]

const fallbackSpacing = [
  ['--spacing-xs', '8px'],
  ['--spacing-sm', '12px'],
  ['--spacing-md', '16px'],
  ['--spacing-lg', '24px'],
  ['--spacing-xl', '32px'],
  ['--spacing-2xl', '48px'],
]

const fallbackRadius = [
  ['--radius-sm', '8px'],
  ['--radius-md', '12px'],
  ['--radius-lg', '16px'],
]

const fallbackShadow = [
  ['--shadow-sm', '0 1px 2px rgba(0, 0, 0, 0.08)'],
  ['--shadow-md', '0 10px 20px rgba(0, 0, 0, 0.08)'],
  ['--shadow-lg', '0 20px 40px rgba(0, 0, 0, 0.12)'],
]

const colorGroups = [
  {
    title: 'Accent',
    vars: [
      '--color-navy-accent',
      '--color-accent',
      '--color-accent-hover',
      '--color-accent-light',
      '--color-accent-green',
    ],
  },
  {
    title: 'Background',
    vars: ['--color-bg-primary', '--color-bg-secondary', '--color-bg-tertiary'],
  },
  {
    title: 'Text',
    vars: ['--color-text-primary', '--color-text-secondary', '--color-text-tertiary'],
  },
  {
    title: 'Border',
    vars: ['--color-border', '--color-border-hover'],
  },
]

const colorLabelMap = {
  '--color-navy-accent': 'Accent Navy',
  '--color-accent': 'Accent Red',
  '--color-accent-hover': 'Accent Red Hover',
  '--color-accent-light': 'Accent Red Light',
  '--color-accent-green': 'Accent Green',
  '--color-bg-primary': 'Background Primary',
  '--color-bg-secondary': 'Background Secondary',
  '--color-bg-tertiary': 'Background Tertiary',
  '--color-text-primary': 'Text Primary',
  '--color-text-secondary': 'Text Secondary',
  '--color-text-tertiary': 'Text Tertiary',
  '--color-border': 'Border Default',
  '--color-border-hover': 'Border Hover',
}

const colorUsageMap = Object.fromEntries(fallbackColors.map(([name, _, usage]) => [name, usage]))

const shadowUsageMap = {
  '--shadow-sm': {
    where: 'Experience/Tools カードの通常状態',
    rule: '情報をフラットに見せたい通常時の基本影。',
  },
  '--shadow-md': {
    where: 'Experience/Works/Tools カードの hover 時',
    rule: 'インタラクティブ要素を強調したい時にのみ付与。',
  },
  '--shadow-lg': {
    where: '現状未使用（モーダル・重要告知などの候補）',
    rule: '画面内で最も目立たせたい層に限定して使用。',
  },
}

const radiusUsageMap = {
  '--radius-sm': { where: 'タグ、バッジ、補助UI', rule: '小さい要素を軽く丸めたい時に使う。' },
  '--radius-md': { where: 'カード、リスト、通常コンテナ', rule: '基本の面要素は原則これを使う。' },
  '--radius-lg': { where: '強調カード、ヒーロー領域', rule: '視線誘導したい大きい要素に限定して使う。' },
}

const typographyTokens = [
  { name: 'Page Title', semantic: 'h1', size: '24px', weight: 700, lineHeight: 1.3, sample: 'sakamoto' },
  { name: 'Section Title', semantic: 'h2', size: '32px', weight: 700, lineHeight: 1.3, sample: 'Works' },
  {
    name: 'Card Title',
    semantic: 'h3',
    size: '18px',
    weight: 600,
    lineHeight: 1.5,
    sample: 'コーポレートサイトリニューアル',
  },
  {
    name: 'Body',
    semantic: 'p',
    size: '14px',
    weight: 400,
    lineHeight: 1.7,
    sample: '本文テキストの読みやすさを重視した標準サイズ。',
  },
  { name: 'Caption / Tag', semantic: 'span', size: '12px', weight: 500, lineHeight: 1.5, sample: 'Tools & topics' },
]

const toLabel = (name) => name.replace(/^--/, '').replace(/-/g, ' ')

const readToken = (style, name, fallback) => {
  const value = style.getPropertyValue(name).trim()
  return value || fallback
}

function DesignGuideline() {
  const [colorTokens, setColorTokens] = useState(
    fallbackColors.map(([name, value]) => ({ name, label: colorLabelMap[name] || toLabel(name), value })),
  )
  const [spacingTokens, setSpacingTokens] = useState(
    fallbackSpacing.map(([name, value]) => ({ name, label: toLabel(name), value })),
  )
  const [radiusTokens, setRadiusTokens] = useState(
    fallbackRadius.map(([name, value]) => ({ name, label: toLabel(name), value })),
  )
  const [shadowTokens, setShadowTokens] = useState(
    fallbackShadow.map(([name, value]) => ({ name, label: toLabel(name), value })),
  )

  useEffect(() => {
    const rootStyle = getComputedStyle(document.documentElement)

    setColorTokens(
      fallbackColors.map(([name, value]) => ({
        name,
        label: colorLabelMap[name] || toLabel(name),
        value: readToken(rootStyle, name, value),
      })),
    )
    setSpacingTokens(
      fallbackSpacing.map(([name, value]) => ({
        name,
        label: toLabel(name),
        value: readToken(rootStyle, name, value),
      })),
    )
    setRadiusTokens(
      fallbackRadius.map(([name, value]) => ({
        name,
        label: toLabel(name),
        value: readToken(rootStyle, name, value),
      })),
    )
    setShadowTokens(
      fallbackShadow.map(([name, value]) => ({
        name,
        label: toLabel(name),
        value: readToken(rootStyle, name, value),
      })),
    )
  }, [])

  const colorTokenMap = Object.fromEntries(colorTokens.map((token) => [token.name, token]))

  return (
    <section className="design-guideline">
      <h2 className="section-title">Design Guideline</h2>

      <div className="guideline-philosophy">
        <h3>Design Philosophy</h3>
        <p>このページをデザインする際の方針。わかりやすく、シンプルに。</p>
        <ul className="philosophy-list">
          <li>情報の優先順位と読み順を明確にし、ユーザーが迷わない構成にする。</li>
          <li>装飾は最小限に抑え、コンテンツが主役になる見た目を追求する。</li>
          <li>動きや色は意味のある箇所だけに使い、ユーザー体験を向上させる。</li>
          <li>読みやすさを損なわない範囲で、ちょっとした遊び心を加える。</li>
        </ul>
      </div>

      <div className="guideline-grid">
        <article className="guideline-card">
          <h3>Color</h3>
          <div className="color-group-list">
            {colorGroups.map((group) => {
              const tokens = group.vars.map((name) => colorTokenMap[name]).filter(Boolean)
              if (tokens.length === 0) return null
              return (
                <div key={group.title} className="color-group">
                  <h4 className="color-group-title">{group.title}</h4>
                  <div className="swatch-list">
                    {tokens.map((token) => (
                      <div key={token.name} className="swatch-item">
                        <span className="swatch-color" style={{ backgroundColor: token.value }} />
                        <div className="swatch-meta">
                          <span>{token.label}</span>
                          <code>{token.value}</code>
                          <small>{colorUsageMap[token.name] || '補助カラー'}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </article>

        <article className="guideline-card">
          <h3>Typography</h3>
          <div className="type-token-list">
            {typographyTokens.map((token) => (
              <div key={token.name} className="type-token-item">
                <div
                  className="type-token-sample"
                  style={{ fontSize: token.size, fontWeight: token.weight, lineHeight: token.lineHeight }}
                >
                  {token.sample}
                </div>
                <div className="type-token-meta">
                  <span>{token.name}</span>
                  <code>
                    {token.size} / {token.weight} / line-height {token.lineHeight}
                  </code>
                  <small>Semantic: {token.semantic}</small>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="guideline-card">
          <h3>Spacing</h3>
          <div className="spacing-list">
            {spacingTokens.map((space) => (
              <div key={space.name} className="spacing-item">
                <span>{space.label}</span>
                <div className="spacing-bar" style={{ width: space.value }} />
                <code>{space.value}</code>
              </div>
            ))}
          </div>
        </article>

        <article className="guideline-card">
          <h3>Motion</h3>
          <p>タブ切替時は方向連動のスライド＋フェードで自然に誘導。</p>
          <ul>
            <li>Duration: 360ms</li>
            <li>Easing: ease-out</li>
            <li>Effect: opacity + translateX</li>
          </ul>
        </article>

        <article className="guideline-card">
          <h3>Cards</h3>
          <p>カードの基本表現（背景・境界線・影）と、運用ルール。</p>
          <div className="card-preview-list">
            {shadowTokens.map((shadow) => (
              <div key={shadow.name} className="card-preview-item" style={{ boxShadow: shadow.value }}>
                <span>{shadow.label}</span>
                <code>{shadow.value}</code>
                <small>使用箇所: {(shadowUsageMap[shadow.name] || {}).where || '要確認'}</small>
                <small>使い分け: {(shadowUsageMap[shadow.name] || {}).rule || '用途を決めてから使用。'}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="guideline-card">
          <h3>Roundness</h3>
          <p>丸み（radius）トークンと、使い分け基準。</p>
          <div className="radius-list">
            {radiusTokens.map((radius) => (
              <div key={radius.name} className="radius-item">
                <div className="radius-shape" style={{ borderRadius: radius.value }} />
                <div className="radius-meta">
                  <span>{radius.label}</span>
                  <code>{radius.value}</code>
                  <small>使用箇所: {(radiusUsageMap[radius.name] || {}).where || '要確認'}</small>
                  <small>使い分け: {(radiusUsageMap[radius.name] || {}).rule || '要素サイズと文脈に合わせて選定。'}</small>
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
