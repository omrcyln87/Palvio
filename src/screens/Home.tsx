import type { Progress } from '../hooks/useProgress'
import type { Screen } from '../App'
import { words } from '../data/vocabulary'
import { alphabet } from '../data/alphabet'

type Props = {
  progress: Progress
  onNavigate: (s: Screen) => void
}

export function Home({ progress, onNavigate }: Props) {
  const learned = progress.learnedIds.length
  const letters = progress.alphabetSeen.length
  const pct = Math.round((learned / words.length) * 100)

  return (
    <div className="screen home-screen">
      <header className="hero">
        <div className="hero-atmosphere" aria-hidden />
        <p className="hero-brand animate-rise">Slovo</p>
        <h1 className="hero-title animate-rise delay-1">
          Rusça,<br />kelime kelime.
        </h1>
        <p className="hero-sub animate-rise delay-2">
          Azbukadan günlük konuşmaya — Türkçe açıklamalarla.
        </p>
        <div className="hero-cta animate-rise delay-3">
          <button type="button" className="btn btn-primary" onClick={() => onNavigate('alphabet')}>
            Azbukaya başla
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => onNavigate('learn')}>
            Kelimeler
          </button>
        </div>
      </header>

      <section className="section progress-section">
        <h2 className="section-title">İlerlemen</h2>
        <p className="section-sub">Bu cihazda saklanır.</p>
        <div className="progress-meter" role="img" aria-label={`Kelime ilerlemesi yüzde ${pct}`}>
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <ul className="stat-list">
          <li>
            <strong>{learned}</strong>
            <span>/{words.length} kelime</span>
          </li>
          <li>
            <strong>{letters}</strong>
            <span>/{alphabet.length} harf</span>
          </li>
          <li>
            <strong>{progress.streak}</strong>
            <span>gün seri</span>
          </li>
          <li>
            <strong>{progress.quizBest}</strong>
            <span>quiz rekoru</span>
          </li>
        </ul>
      </section>

      <section className="section path-section">
        <h2 className="section-title">Yol haritası</h2>
        <ol className="path-list">
          <li>
            <button type="button" onClick={() => onNavigate('alphabet')}>
              <span className="path-step">1</span>
              <span>
                <strong>Azbuka</strong>
                <em>33 harf, ses ve ipuçları</em>
              </span>
            </button>
          </li>
          <li>
            <button type="button" onClick={() => onNavigate('learn')}>
              <span className="path-step">2</span>
              <span>
                <strong>Kelime setleri</strong>
                <em>Selamlaşma, yemek, seyahat…</em>
              </span>
            </button>
          </li>
          <li>
            <button type="button" onClick={() => onNavigate('cards')}>
              <span className="path-step">3</span>
              <span>
                <strong>Kartlar</strong>
                <em>Çevirip ezberle</em>
              </span>
            </button>
          </li>
          <li>
            <button type="button" onClick={() => onNavigate('quiz')}>
              <span className="path-step">4</span>
              <span>
                <strong>Quiz</strong>
                <em>Kendini test et</em>
              </span>
            </button>
          </li>
        </ol>
      </section>
    </div>
  )
}
