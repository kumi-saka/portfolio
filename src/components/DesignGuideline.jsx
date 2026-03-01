import { useEffect, useState } from 'react'
import './DesignGuideline.css'

const fallbackColorVars = [
  '--color-navy-accent',
  '--color-accent',
  '--color-accent-green',
  '--color-bg-primary',
  '--color-bg-secondary',
  '--color-text-primary'
]

const fallbackSpacingVars = [
  '--spacing-xs',
  '--spacing-sm',
  '--spacing-md',
  '--spacing-lg',
  '--spacing-xl',
  '--spacing-2xl'
]

const fallbackRadiusVars = ['--radius-sm', '--radius-md', '--radius-lg']
const fallbackShadowVars = ['--shadow-sm', '--shadow-md', '--shadow-lg']
const typographyTokens = [
  {
    name: 'Page Title',
    htmlTag: 'h1',
    size: '24px',
    weight: 700,
    lineHeight: 1.3,
    sample: 'sakamoto',
    usage: 'ページの主題（プロフィール名）'
  },
  {
    name: 'Section Title',
    htmlTag: 'h2',
    size: '32px',
    weight: 700,
    lineHeight: 1.3,
    sample: 'Experience',
    usage: '主要セクション見出し'
  },
  {
    name: 'Card Title',
    htmlTag: 'h3',
    size: '18px',
    weight: 600,
    lineHeight: 1.5,
    sample: 'コーポレートサイトリニューアル',
    usage: 'カード単位の見出し'
  },
  {
    name: 'Body',
    htmlTag: 'p',
    size: '14px',
    weight: 400,
    lineHeight: 1.7,
    sample: '本文テキストの読みやすさを重視した標準サイズ。',
    usage: '説明文・段落'
  },
  {
    name: 'Caption / Tag',
    htmlTag: 'span',
    size: '12px',
    weight: 500,
    lineHeight: 1.5,
    sample: 'Tools & topics',
    usage: '補助情報・タグ'
  }
]

const toLabel = (name) =>
  name
    .replace(/^--/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (s) => s.toUpperCase())

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
  '--color-border-hover': 'Border Hover'
}

const colorUsageMap = {
  '--color-navy-accent': 'ページ上部ライン、見出し色、ガイド系の基調色',
  '--color-accent': 'タブのアクティブ状態、強調テキスト・アイコン',
  '--color-accent-hover': 'アクセントのホバー状態',
  '--color-accent-light': 'アクセントの薄い背景（補助ハイライト）',
  '--color-accent-green': 'Experience の年表示/ドット、Skills の分析リング',
  '--color-bg-primary': 'ページ全体の背景',
  '--color-bg-secondary': 'ヘッダー・カードなどの面背景',
  '--color-bg-tertiary': 'タグ/小要素背景、ホバー時の補助背景',
  '--color-text-primary': '見出し・主要テキスト',
  '--color-text-secondary': '本文・説明文',
  '--color-text-tertiary': '補助テキスト',
  '--color-border': '通常の境界線',
  '--color-border-hover': 'ホバー時の境界線'
}

const getColorUsage = (name) => colorUsageMap[name] || '補助カラー'
const getColorLabel = (name) => colorLabelMap[name] || toLabel(name)

const colorGroups = [
  {
    title: 'Accent',
    vars: [
      '--color-navy-accent',
      '--color-accent',
      '--color-accent-hover',
      '--color-accent-light',
      '--color-accent-green'
    ]
  },
  {
    title: 'Background',
    vars: ['--color-bg-primary', '--color-bg-secondary', '--color-bg-tertiary']
  },
  {
    title: 'Text',
    vars: ['--color-text-primary', '--color-text-secondary', '--color-text-tertiary']
  },
  {
    title: 'Border',
    vars: ['--color-border', '--color-border-hover']
  }
]

const shadowUsageMap = {
  '--shadow-sm': {
    where: 'Experience/Tools カードの通常状態',
    rule: '情報をフラットに見せたい通常時の基本影。'
  },
  '--shadow-md': {
    where: 'Experience/Works/Tools カードの hover 時',
    rule: 'インタラクティブ要素を強調したい時にのみ付与。'
  },
  '--shadow-lg': {
    where: '現状未使用（モーダル・重要告知などの候補）',
    rule: '画面内で最も目立たせたい層に限定して使用。'
  }
}

const getShadowUsage = (name) =>
  shadowUsageMap[name] || {
    where: '要確認',
    rule: '用途を決めてから使用。'
  }

const radiusUsageMap = {
  '--radius-sm': {
    where: 'タグ、バッジ、補助UI',
    rule: '小さい要素を軽く丸めたい時に使う。'
  },
  '--radius-md': {
    where: 'カード、リスト、通常コンテナ',
    rule: '基本の面要素は原則これを使う。'
  },
  '--radius-lg': {
    where: '強調カード、ヒーロー領域',
    rule: '視線誘導したい大きい要素に限定して使う。'
  }
}

const getRadiusUsage = (name) =>
  radiusUsageMap[name] || {
    where: '要確認',
    rule: '要素サイズと文脈に合わせて選定。'
  }

const getRootCustomProps = () => {
  const names = new Set()
  for (const sheet of Array.from(document.styleSheets)) {
    let rules
    try {
      rules = sheet.cssRules
    } catch {
      continue
    }
    if (!rules) continue
    for (const rule of Array.from(rules)) {
      if (!rule.selectorText || !rule.style) continue
      if (!rule.selectorText.includes(':root')) continue
      for (const propName of Array.from(rule.style)) {
        if (propName.startsWith('--')) names.add(propName)
      }
    }
  }
  return Array.from(names)
}

function DesignGuideline() {
  const [colorTokens, setColorTokens] = useState([])
  const [spacingTokens, setSpacingTokens] = useState([])
  const [radiusTokens, setRadiusTokens] = useState([])
  const [shadowTokens, setShadowTokens] = useState([])

  useEffect(() => {
    const root = document.documentElement
    const computed = getComputedStyle(root)
    const rootVars = getRootCustomProps()

    const colorVars =
      rootVars.filter((v) => v.startsWith('--color-')).sort() || fallbackColorVars
    const spacingVars =
      rootVars.filter((v) => v.startsWith('--spacing-')).sort() || fallbackSpacingVars
    const radiusVars =
      rootVars.filter((v) => v.startsWith('--radius-')).sort() || fallbackRadiusVars
    const shadowVars =
      rootVars.filter((v) => v.startsWith('--shadow-')).sort() || fallbackShadowVars

    const resolvedColorVars = (colorVars.length > 0 ? colorVars : fallbackColorVars).map((name) => ({
      name,
      label: getColorLabel(name),
      value: computed.getPropertyValue(name).trim()
    }))

    const resolvedSpacingVars = (spacingVars.length > 0 ? spacingVars : fallbackSpacingVars).map((name) => ({
      name,
      label: toLabel(name),
      value: computed.getPropertyValue(name).trim()
    }))

    const resolvedRadiusVars = (radiusVars.length > 0 ? radiusVars : fallbackRadiusVars).map((name) => ({
      name,
      label: toLabel(name),
      value: computed.getPropertyValue(name).trim()
    }))

    const resolvedShadowVars = (shadowVars.length > 0 ? shadowVars : fallbackShadowVars).map((name) => ({
      name,
      label: toLabel(name),
      value: computed.getPropertyValue(name).trim()
    }))

    setColorTokens(resolvedColorVars)
    setSpacingTokens(resolvedSpacingVars)
    setRadiusTokens(resolvedRadiusVars)
    setShadowTokens(resolvedShadowVars)
  }, [])

  const colorTokenMap = Object.fromEntries(colorTokens.map((token) => [token.name, token]))

  return (
    <section className="design-guideline">
      <h2 className="section-title">Design Guideline</h2>

      <div className="guideline-philosophy">
        <h3>Design Philosophy</h3>
        <p>このページをデザインする際の方針。わかりやすく、シンプルに。</p>
        <ul className="philosophy-list">
          <li>情報の優先順位を決め、上から自然に読める構成にする。</li>
          <li>装飾は最小限にして、内容が主役になる見た目にする。</li>
          <li>動きや色は意味がある部分だけに使い、迷わせないUIにする。</li>
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
                          <small>{getColorUsage(token.name)}</small>
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
          <p>見た目のサイズとHTMLの見出しレベル（semantic）を分けて管理。</p>
          <div className="type-token-list">
            {typographyTokens.map((token) => (
              <div key={token.name} className="type-token-item">
                <div
                  className="type-token-sample"
                  style={{
                    fontSize: token.size,
                    fontWeight: token.weight,
                    lineHeight: token.lineHeight
                  }}
                >
                  {token.sample}
                </div>
                <div className="type-token-meta">
                  <span>{token.name}</span>
                  <code>
                    {token.size} / {token.weight} / line-height {token.lineHeight}
                  </code>
                  <small>Semantic: {token.htmlTag}</small>
                  <small>使用箇所: {token.usage}</small>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="guideline-card">
          <h3>Spacing</h3>
          <p>:root の spacing 変数を自動で読み取り可視化。</p>
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
                <small>使用箇所: {getShadowUsage(shadow.name).where}</small>
                <small>使い分け: {getShadowUsage(shadow.name).rule}</small>
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
                  <small>使用箇所: {getRadiusUsage(radius.name).where}</small>
                  <small>使い分け: {getRadiusUsage(radius.name).rule}</small>
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
