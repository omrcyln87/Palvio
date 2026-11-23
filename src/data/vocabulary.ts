export type Word = {
  id: string
  ru: string
  tr: string
  latin: string
  category: string
}

export type Category = {
  id: string
  title: string
  subtitle: string
}

export const categories: Category[] = [
  { id: 'greetings', title: 'Selamlaşma', subtitle: 'İlk cümleler' },
  { id: 'basics', title: 'Temel kelimeler', subtitle: 'Her gün lazım' },
  { id: 'food', title: 'Yemek & içecek', subtitle: 'Sofrada' },
  { id: 'travel', title: 'Seyahat', subtitle: 'Yolda' },
  { id: 'numbers', title: 'Sayılar', subtitle: '1–10' },
]

export const words: Word[] = [
  // greetings
  { id: 'g1', ru: 'привет', tr: 'merhaba (samimi)', latin: 'privet', category: 'greetings' },
  { id: 'g2', ru: 'здравствуйте', tr: 'merhaba (resmi)', latin: 'zdravstvuyte', category: 'greetings' },
  { id: 'g3', ru: 'доброе утро', tr: 'günaydın', latin: 'dobroye utro', category: 'greetings' },
  { id: 'g4', ru: 'добрый день', tr: 'iyi günler', latin: 'dobryy den', category: 'greetings' },
  { id: 'g5', ru: 'добрый вечер', tr: 'iyi akşamlar', latin: 'dobryy vecher', category: 'greetings' },
  { id: 'g6', ru: 'пока', tr: 'görüşürüz', latin: 'poka', category: 'greetings' },
  { id: 'g7', ru: 'спасибо', tr: 'teşekkürler', latin: 'spasibo', category: 'greetings' },
  { id: 'g8', ru: 'пожалуйста', tr: 'lütfen / rica ederim', latin: 'pozhaluysta', category: 'greetings' },
  { id: 'g9', ru: 'извините', tr: 'affedersiniz', latin: 'izvinite', category: 'greetings' },
  { id: 'g10', ru: 'как дела?', tr: 'nasılsın?', latin: 'kak dela?', category: 'greetings' },

  // basics
  { id: 'b1', ru: 'да', tr: 'evet', latin: 'da', category: 'basics' },
  { id: 'b2', ru: 'нет', tr: 'hayır', latin: 'net', category: 'basics' },
  { id: 'b3', ru: 'я', tr: 'ben', latin: 'ya', category: 'basics' },
  { id: 'b4', ru: 'ты', tr: 'sen', latin: 'ty', category: 'basics' },
  { id: 'b5', ru: 'он / она', tr: 'o (erkek / kadın)', latin: 'on / ona', category: 'basics' },
  { id: 'b6', ru: 'вода', tr: 'su', latin: 'voda', category: 'basics' },
  { id: 'b7', ru: 'дом', tr: 'ev', latin: 'dom', category: 'basics' },
  { id: 'b8', ru: 'друг', tr: 'arkadaş', latin: 'drug', category: 'basics' },
  { id: 'b9', ru: 'любовь', tr: 'aşk', latin: 'lyubov', category: 'basics' },
  { id: 'b10', ru: 'время', tr: 'zaman', latin: 'vremya', category: 'basics' },

  // food
  { id: 'f1', ru: 'хлеб', tr: 'ekmek', latin: 'khleb', category: 'food' },
  { id: 'f2', ru: 'чай', tr: 'çay', latin: 'chay', category: 'food' },
  { id: 'f3', ru: 'кофе', tr: 'kahve', latin: 'kofe', category: 'food' },
  { id: 'f4', ru: 'молоко', tr: 'süt', latin: 'moloko', category: 'food' },
  { id: 'f5', ru: 'яблоко', tr: 'elma', latin: 'yabloko', category: 'food' },
  { id: 'f6', ru: 'суп', tr: 'çorba', latin: 'sup', category: 'food' },
  { id: 'f7', ru: 'мясо', tr: 'et', latin: 'myaso', category: 'food' },
  { id: 'f8', ru: 'рыба', tr: 'balık', latin: 'ryba', category: 'food' },
  { id: 'f9', ru: 'сыр', tr: 'peynir', latin: 'syr', category: 'food' },
  { id: 'f10', ru: 'вкусный', tr: 'lezzetli', latin: 'vkusnyy', category: 'food' },

  // travel
  { id: 't1', ru: 'аэропорт', tr: 'havaalanı', latin: 'aeroport', category: 'travel' },
  { id: 't2', ru: 'поезд', tr: 'tren', latin: 'poyezd', category: 'travel' },
  { id: 't3', ru: 'билет', tr: 'bilet', latin: 'bilet', category: 'travel' },
  { id: 't4', ru: 'отель', tr: 'otel', latin: 'otel', category: 'travel' },
  { id: 't5', ru: 'карта', tr: 'harita', latin: 'karta', category: 'travel' },
  { id: 't6', ru: 'где?', tr: 'nerede?', latin: 'gde?', category: 'travel' },
  { id: 't7', ru: 'сколько?', tr: 'ne kadar?', latin: 'skolko?', category: 'travel' },
  { id: 't8', ru: 'помогите', tr: 'yardım edin', latin: 'pomogite', category: 'travel' },
  { id: 't9', ru: 'туалет', tr: 'tuvalet', latin: 'tualet', category: 'travel' },
  { id: 't10', ru: 'метро', tr: 'metro', latin: 'metro', category: 'travel' },

  // numbers
  { id: 'n1', ru: 'один', tr: 'bir', latin: 'odin', category: 'numbers' },
  { id: 'n2', ru: 'два', tr: 'iki', latin: 'dva', category: 'numbers' },
  { id: 'n3', ru: 'три', tr: 'üç', latin: 'tri', category: 'numbers' },
  { id: 'n4', ru: 'четыре', tr: 'dört', latin: 'chetyre', category: 'numbers' },
  { id: 'n5', ru: 'пять', tr: 'beş', latin: 'pyat', category: 'numbers' },
  { id: 'n6', ru: 'шесть', tr: 'altı', latin: 'shest', category: 'numbers' },
  { id: 'n7', ru: 'семь', tr: 'yedi', latin: 'sem', category: 'numbers' },
  { id: 'n8', ru: 'восемь', tr: 'sekiz', latin: 'vosem', category: 'numbers' },
  { id: 'n9', ru: 'девять', tr: 'dokuz', latin: 'devyat', category: 'numbers' },
  { id: 'n10', ru: 'десять', tr: 'on', latin: 'desyat', category: 'numbers' },
]

export function wordsByCategory(categoryId: string): Word[] {
  return words.filter((w) => w.category === categoryId)
}
