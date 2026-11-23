import type { Screen } from '../App'

const items: { id: Screen; label: string; icon: string }[] = [
  { id: 'home', label: 'Ana', icon: '◆' },
  { id: 'alphabet', label: 'Azbuka', icon: 'А' },
  { id: 'learn', label: 'Kelime', icon: 'С' },
  { id: 'cards', label: 'Kartlar', icon: '◇' },
  { id: 'quiz', label: 'Quiz', icon: '?' },
]

type Props = {
  current: Screen
  onChange: (s: Screen) => void
}

export function BottomNav({ current, onChange }: Props) {
  return (
    <nav className="bottom-nav" aria-label="Ana menü">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`nav-item${current === item.id ? ' is-active' : ''}`}
          onClick={() => onChange(item.id)}
          aria-current={current === item.id ? 'page' : undefined}
        >
          <span className="nav-icon" aria-hidden>
            {item.icon}
          </span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}
