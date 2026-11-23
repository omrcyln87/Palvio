import { useState } from 'react'
import { alphabet, type Letter } from '../data/alphabet'
import { speakRussian } from '../lib/speech'

type Props = {
  seen: string[]
  onSeen: (letter: string) => void
}

export function Alphabet({ seen, onSeen }: Props) {
  const [active, setActive] = useState<Letter | null>(null)

  function open(letter: Letter) {
    setActive(letter)
    onSeen(letter.cyrillic)
    speakRussian(letter.cyrillic)
  }

  return (
    <div className="screen alphabet-screen">
      <header className="page-header">
        <p className="page-kicker">Азбука</p>
        <h1 className="page-title">Alfabe</h1>
        <p className="page-sub">Harfe dokun, dinle ve örnek kelimeyi gör.</p>
      </header>

      <div className="letter-grid">
        {alphabet.map((letter, i) => {
          const isSeen = seen.includes(letter.cyrillic)
          return (
            <button
              key={letter.cyrillic}
              type="button"
              className={`letter-cell${isSeen ? ' is-seen' : ''}`}
              style={{ animationDelay: `${Math.min(i, 20) * 18}ms` }}
              onClick={() => open(letter)}
              aria-label={`${letter.cyrillic}, ${letter.name}`}
            >
              <span className="letter-cyr">{letter.cyrillic}</span>
              <span className="letter-lat">{letter.latin}</span>
            </button>
          )
        })}
      </div>

      {active && (
        <div className="sheet-backdrop" onClick={() => setActive(null)} role="presentation">
          <div
            className="sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="letter-sheet-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="sheet-close" onClick={() => setActive(null)} aria-label="Kapat">
              ×
            </button>
            <p id="letter-sheet-title" className="sheet-letter">
              {active.cyrillic}
              <span>{active.cyrillic.toLowerCase()}</span>
            </p>
            <p className="sheet-name">
              {active.name} · <em>{active.latin}</em>
            </p>
            <p className="sheet-tip">{active.tip}</p>
            <div className="sheet-example">
              <button
                type="button"
                className="btn btn-primary btn-speak"
                onClick={() => speakRussian(active.example.ru)}
              >
                Dinle · {active.example.ru}
              </button>
              <p>
                <strong>{active.example.tr}</strong>
                <span>{active.example.latin}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
