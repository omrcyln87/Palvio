import { useState } from 'react'
import { BottomNav } from './components/BottomNav'
import { useProgress } from './hooks/useProgress'
import { unlockSpeech } from './lib/speech'
import { Alphabet } from './screens/Alphabet'
import { Cards } from './screens/Cards'
import { Home } from './screens/Home'
import { Learn } from './screens/Learn'
import { Quiz } from './screens/Quiz'
import './App.css'

export type Screen = 'home' | 'alphabet' | 'learn' | 'cards' | 'quiz'

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const { progress, markLearned, markLetterSeen, setQuizBest } = useProgress()

  function navigate(s: Screen) {
    unlockSpeech()
    setScreen(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <main className="app-main">
        {screen === 'home' && <Home progress={progress} onNavigate={navigate} />}
        {screen === 'alphabet' && (
          <Alphabet seen={progress.alphabetSeen} onSeen={markLetterSeen} />
        )}
        {screen === 'learn' && (
          <Learn learnedIds={progress.learnedIds} onLearn={markLearned} />
        )}
        {screen === 'cards' && <Cards onLearn={markLearned} />}
        {screen === 'quiz' && <Quiz best={progress.quizBest} onScore={setQuizBest} />}
      </main>
      <BottomNav current={screen} onChange={navigate} />
    </div>
  )
}
