import { useMemo, useState } from 'react'
import { categories, wordsByCategory, type Word } from '../data/vocabulary'
import { speakRussian } from '../lib/speech'

type Props = {
  learnedIds: string[]
  onLearn: (id: string) => void
}

export function Learn({ learnedIds, onLearn }: Props) {
  const [categoryId, setCategoryId] = useState(categories[0].id)
  const [selected, setSelected] = useState<Word | null>(null)

  const list = useMemo(() => wordsByCategory(categoryId), [categoryId])
  const cat = categories.find((c) => c.id === categoryId)!

  return (
    <div className="screen learn-screen">
      <header className="page-header">
        <p className="page-kicker">Слова</p>
        <h1 className="page-title">Kelimeler</h1>
        <p className="page-sub">{cat.subtitle}</p>
      </header>

      <div className="chip-row" role="tablist" aria-label="Kategoriler">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={c.id === categoryId}
            className={`chip${c.id === categoryId ? ' is-active' : ''}`}
            onClick={() => {
              setCategoryId(c.id)
              setSelected(null)
            }}
          >
            {c.title}
          </button>
        ))}
      </div>

      <ul className="word-list">
        {list.map((word) => {
          const known = learnedIds.includes(word.id)
          return (
            <li key={word.id}>
              <button
                type="button"
                className={`word-row${known ? ' is-known' : ''}${selected?.id === word.id ? ' is-open' : ''}`}
                onClick={() => {
                  setSelected(word)
                  speakRussian(word.ru)
                }}
              >
                <span className="word-ru">{word.ru}</span>
                <span className="word-tr">{word.tr}</span>
                {known && <span className="word-badge">öğrendim</span>}
              </button>
            </li>
          )
        })}
      </ul>

      {selected && (
        <div className="word-detail">
          <p className="word-detail-ru">{selected.ru}</p>
          <p className="word-detail-latin">{selected.latin}</p>
          <p className="word-detail-tr">{selected.tr}</p>
          <div className="word-detail-actions">
            <button type="button" className="btn btn-ghost" onClick={() => speakRussian(selected.ru)}>
              Tekrar dinle
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onLearn(selected.id)}
              disabled={learnedIds.includes(selected.id)}
            >
              {learnedIds.includes(selected.id) ? 'Öğrenildi' : 'Öğrendim'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
