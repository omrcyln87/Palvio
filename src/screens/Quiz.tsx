import { useMemo, useState } from 'react'
import { words, type Word } from '../data/vocabulary'
import { speakRussian } from '../lib/speech'

type Props = {
  best: number
  onScore: (score: number) => void
}

type Question = {
  word: Word
  options: string[]
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildQuestions(count: number): Question[] {
  const pool = shuffle(words).slice(0, count)
  return pool.map((word) => {
    const distractors = shuffle(words.filter((w) => w.id !== word.id))
      .slice(0, 3)
      .map((w) => w.tr)
    return {
      word,
      options: shuffle([word.tr, ...distractors]),
    }
  })
}

export function Quiz({ best, onScore }: Props) {
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [qi, setQi] = useState(0)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const current = questions[qi]

  function start() {
    setQuestions(buildQuestions(8))
    setQi(0)
    setScore(0)
    setPicked(null)
    setDone(false)
    setStarted(true)
  }

  function choose(option: string) {
    if (picked || !current) return
    setPicked(option)
    const correct = option === current.word.tr
    const nextScore = score + (correct ? 1 : 0)
    if (correct) setScore(nextScore)

    window.setTimeout(() => {
      if (qi + 1 >= questions.length) {
        setDone(true)
        onScore(nextScore)
      } else {
        setQi((i) => i + 1)
        setPicked(null)
      }
    }, 900)
  }

  const progressLabel = useMemo(() => {
    if (!started || done) return null
    return `${qi + 1} / ${questions.length}`
  }, [started, done, qi, questions.length])

  if (!started) {
    return (
      <div className="screen quiz-screen">
        <header className="page-header">
          <p className="page-kicker">Тест</p>
          <h1 className="page-title">Quiz</h1>
          <p className="page-sub">Rusça kelimeyi gör, doğru Türkçeyi seç. Rekorun: {best}/8</p>
        </header>
        <button type="button" className="btn btn-primary btn-block" onClick={start}>
          Başla
        </button>
      </div>
    )
  }

  if (done) {
    return (
      <div className="screen quiz-screen quiz-done">
        <header className="page-header">
          <p className="page-kicker">Готово</p>
          <h1 className="page-title">
            {score}/{questions.length}
          </h1>
          <p className="page-sub">
            {score >= 7 ? 'Harika!' : score >= 4 ? 'İyi gidiyorsun.' : 'Kartlarla biraz daha pratik yap.'}
          </p>
        </header>
        <button type="button" className="btn btn-primary btn-block" onClick={start}>
          Tekrar dene
        </button>
      </div>
    )
  }

  return (
    <div className="screen quiz-screen">
      <header className="page-header">
        <p className="page-kicker">Тест</p>
        <h1 className="page-title">{progressLabel}</h1>
        <p className="page-sub">Skor: {score}</p>
      </header>

      <button type="button" className="quiz-prompt" onClick={() => speakRussian(current.word.ru)}>
        <span className="quiz-ru">{current.word.ru}</span>
        <span className="quiz-latin">{current.word.latin}</span>
        <span className="quiz-listen">Dinlemek için dokun</span>
      </button>

      <div className="quiz-options">
        {current.options.map((opt) => {
          let state = ''
          if (picked) {
            if (opt === current.word.tr) state = ' is-correct'
            else if (opt === picked) state = ' is-wrong'
          }
          return (
            <button
              key={opt}
              type="button"
              className={`quiz-option${state}`}
              onClick={() => choose(opt)}
              disabled={!!picked}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
