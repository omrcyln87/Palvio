import { useCallback, useEffect, useState } from 'react'

const KEY = 'slovo-progress-v1'

export type Progress = {
  learnedIds: string[]
  quizBest: number
  alphabetSeen: string[]
  streak: number
  lastVisit: string | null
}

const defaultProgress: Progress = {
  learnedIds: [],
  quizBest: 0,
  alphabetSeen: [],
  streak: 0,
  lastVisit: null,
}

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { ...defaultProgress }
    return { ...defaultProgress, ...JSON.parse(raw) }
  } catch {
    return { ...defaultProgress }
  }
}

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

function bumpStreak(p: Progress): Progress {
  const today = todayKey()
  if (p.lastVisit === today) return p
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yKey = yesterday.toISOString().slice(0, 10)
  const streak = p.lastVisit === yKey ? p.streak + 1 : 1
  return { ...p, streak, lastVisit: today }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(defaultProgress)

  useEffect(() => {
    const p = bumpStreak(load())
    setProgress(p)
    localStorage.setItem(KEY, JSON.stringify(p))
  }, [])

  const save = useCallback((next: Progress) => {
    setProgress(next)
    localStorage.setItem(KEY, JSON.stringify(next))
  }, [])

  const markLearned = useCallback(
    (id: string) => {
      setProgress((prev) => {
        if (prev.learnedIds.includes(id)) return prev
        const next = { ...prev, learnedIds: [...prev.learnedIds, id] }
        localStorage.setItem(KEY, JSON.stringify(next))
        return next
      })
    },
    [],
  )

  const markLetterSeen = useCallback((letter: string) => {
    setProgress((prev) => {
      if (prev.alphabetSeen.includes(letter)) return prev
      const next = { ...prev, alphabetSeen: [...prev.alphabetSeen, letter] }
      localStorage.setItem(KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const setQuizBest = useCallback((score: number) => {
    setProgress((prev) => {
      if (score <= prev.quizBest) return prev
      const next = { ...prev, quizBest: score }
      localStorage.setItem(KEY, JSON.stringify(next))
      return next
    })
  }, [])

  return { progress, markLearned, markLetterSeen, setQuizBest, save }
}
