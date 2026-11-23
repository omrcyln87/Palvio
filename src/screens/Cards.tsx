import { useMemo, useState } from 'react'
import { categories, words, wordsByCategory } from '../data/vocabulary'
import { speakRussian } from '../lib/speech'

type Props = {
  onLearn: (id: string) => void
}

export function Cards({ onLearn }: Props) {
  const [categoryId, setCategoryId] = useState<string>('all')
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const deck = useMemo(() => {
    const list = categoryId === 'all' ? [...words] : wordsByCategory(categoryId)
    return list
  }, [categoryId])

  const card = deck[index % Math.max(deck.length, 1)]

  function resetDeck(id: string) {
    setCategoryId(id)
    setIndex(0)
    setFlipped(false)
  }

  function next() {
    if (!card) return
    onLearn(card.id)
    setFlipped(false)
    setIndex((i) => (i + 1) % deck.length)
  }

  if (!card) {
    return (
      <div className="screen cards-screen">
        <p className="empty">Bu sette kelime yok.</p>
      </div>
    )
  }

  return (
    <div className="screen cards-screen">
      <header className="page-header">
        <p className="page-kicker">Карточки</p>
        <h1 className="page-title">Kartlar</h1>
        <p className="page-sub">
          {index + 1} / {deck.length}
        </p>
      </header>

      <div className="chip-row">
        <button
          type="button"
          className={`chip${categoryId === 'all' ? ' is-active' : ''}`}
          onClick={() => resetDeck('all')}
        >
          Tümü
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`chip${categoryId === c.id ? ' is-active' : ''}`}
            onClick={() => resetDeck(c.id)}
          >
            {c.title}
          </button>
        ))}
      </div>

      <button
        type="button"
        className={`flashcard${flipped ? ' is-flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
        aria-label={flipped ? 'Türkçe çeviriyi gizle' : 'Çeviriyi göster'}
      >
        <div className="flashcard-inner">
          <div className="flashcard-face flashcard-front">
            <span className="flash-ru">{card.ru}</span>
            <span className="flash-hint">Çevirmek için dokun</span>
          </div>
          <div className="flashcard-face flashcard-back">
            <span className="flash-tr">{card.tr}</span>
            <span className="flash-latin">{card.latin}</span>
          </div>
        </div>
      </button>

      <div className="card-actions">
        <button type="button" className="btn btn-ghost" onClick={() => speakRussian(card.ru)}>
          Dinle
        </button>
        <button type="button" className="btn btn-primary" onClick={next}>
          Sonraki
        </button>
      </div>
    </div>
  )
}
