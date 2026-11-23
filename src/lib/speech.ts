let unlocked = false

export function unlockSpeech() {
  if (unlocked || typeof window === 'undefined') return
  unlocked = true
  try {
    const u = new SpeechSynthesisUtterance('')
    u.volume = 0
    window.speechSynthesis.speak(u)
  } catch {
    /* ignore */
  }
}

export function speakRussian(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  unlockSpeech()
  window.speechSynthesis.cancel()
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = 'ru-RU'
  utter.rate = 0.9
  const voices = window.speechSynthesis.getVoices()
  const ru = voices.find((v) => v.lang.startsWith('ru'))
  if (ru) utter.voice = ru
  window.speechSynthesis.speak(utter)
}
