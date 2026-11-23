export type Letter = {
  cyrillic: string
  name: string
  latin: string
  tip: string
  example: { ru: string; tr: string; latin: string }
}

export const alphabet: Letter[] = [
  { cyrillic: 'А', name: 'а', latin: 'a', tip: 'Türkçe “a” gibi', example: { ru: 'мама', tr: 'anne', latin: 'mama' } },
  { cyrillic: 'Б', name: 'бэ', latin: 'b', tip: 'Türkçe “b”', example: { ru: 'банк', tr: 'banka', latin: 'bank' } },
  { cyrillic: 'В', name: 'вэ', latin: 'v', tip: 'Türkçe “v”', example: { ru: 'вода', tr: 'su', latin: 'voda' } },
  { cyrillic: 'Г', name: 'гэ', latin: 'g', tip: 'Sert “g” (göl gibi)', example: { ru: 'город', tr: 'şehir', latin: 'gorod' } },
  { cyrillic: 'Д', name: 'дэ', latin: 'd', tip: 'Türkçe “d”', example: { ru: 'дом', tr: 'ev', latin: 'dom' } },
  { cyrillic: 'Е', name: 'е', latin: 'ye', tip: '“ye” gibi (yer)', example: { ru: 'есть', tr: 'var / yemek', latin: 'yest' } },
  { cyrillic: 'Ё', name: 'ё', latin: 'yo', tip: '“yo” gibi (yol)', example: { ru: 'ёлка', tr: 'çam ağacı', latin: 'yolka' } },
  { cyrillic: 'Ж', name: 'жэ', latin: 'zh', tip: 'Fransız “j” / “jurnal”deki j', example: { ru: 'жизнь', tr: 'hayat', latin: 'zhizn' } },
  { cyrillic: 'З', name: 'зэ', latin: 'z', tip: 'Türkçe “z”', example: { ru: 'зима', tr: 'kış', latin: 'zima' } },
  { cyrillic: 'И', name: 'и', latin: 'i', tip: 'Türkçe “i”', example: { ru: 'имя', tr: 'isim', latin: 'imya' } },
  { cyrillic: 'Й', name: 'и краткое', latin: 'y', tip: 'Kısa “y” (çay)', example: { ru: 'мой', tr: 'benim', latin: 'moy' } },
  { cyrillic: 'К', name: 'ка', latin: 'k', tip: 'Türkçe “k”', example: { ru: 'кофе', tr: 'kahve', latin: 'kofe' } },
  { cyrillic: 'Л', name: 'эль', latin: 'l', tip: 'Türkçe “l”', example: { ru: 'любовь', tr: 'aşk', latin: 'lyubov' } },
  { cyrillic: 'М', name: 'эм', latin: 'm', tip: 'Türkçe “m”', example: { ru: 'мир', tr: 'dünya / barış', latin: 'mir' } },
  { cyrillic: 'Н', name: 'эн', latin: 'n', tip: 'Türkçe “n”', example: { ru: 'ночь', tr: 'gece', latin: 'noch' } },
  { cyrillic: 'О', name: 'о', latin: 'o', tip: 'Vurgusuzken “a”ya yaklaşır', example: { ru: 'окно', tr: 'pencere', latin: 'okno' } },
  { cyrillic: 'П', name: 'пэ', latin: 'p', tip: 'Türkçe “p”', example: { ru: 'привет', tr: 'merhaba', latin: 'privet' } },
  { cyrillic: 'Р', name: 'эр', latin: 'r', tip: 'Titrek “r”', example: { ru: 'Россия', tr: 'Rusya', latin: 'Rossiya' } },
  { cyrillic: 'С', name: 'эс', latin: 's', tip: 'Türkçe “s”', example: { ru: 'слово', tr: 'kelime', latin: 'slovo' } },
  { cyrillic: 'Т', name: 'тэ', latin: 't', tip: 'Türkçe “t”', example: { ru: 'там', tr: 'orada', latin: 'tam' } },
  { cyrillic: 'У', name: 'у', latin: 'u', tip: 'Türkçe “u”', example: { ru: 'утро', tr: 'sabah', latin: 'utro' } },
  { cyrillic: 'Ф', name: 'эф', latin: 'f', tip: 'Türkçe “f”', example: { ru: 'кофе', tr: 'kahve', latin: 'kofe' } },
  { cyrillic: 'Х', name: 'ха', latin: 'kh', tip: 'Boğazdan “h” (ah!)', example: { ru: 'хорошо', tr: 'iyi', latin: 'khorosho' } },
  { cyrillic: 'Ц', name: 'цэ', latin: 'ts', tip: '“ts” (pizza’daki gibi)', example: { ru: 'цвет', tr: 'renk', latin: 'tsvet' } },
  { cyrillic: 'Ч', name: 'че', latin: 'ch', tip: 'Türkçe “ç”', example: { ru: 'чай', tr: 'çay', latin: 'chay' } },
  { cyrillic: 'Ш', name: 'ша', latin: 'sh', tip: 'Türkçe “ş”', example: { ru: 'школа', tr: 'okul', latin: 'shkola' } },
  { cyrillic: 'Щ', name: 'ща', latin: 'shch', tip: 'Yumuşak uzun “ş”', example: { ru: 'борщ', tr: 'borş', latin: 'borshch' } },
  { cyrillic: 'Ъ', name: 'твёрдый знак', latin: '″', tip: 'Sert işaret — ses yok, ayırır', example: { ru: 'объект', tr: 'nesne', latin: 'obyekt' } },
  { cyrillic: 'Ы', name: 'ы', latin: 'y', tip: 'Derin “ı” — dil geride', example: { ru: 'ты', tr: 'sen', latin: 'ty' } },
  { cyrillic: 'Ь', name: 'мягкий знак', latin: '′', tip: 'Yumuşak işaret — önceki harfi yumuşatır', example: { ru: 'день', tr: 'gün', latin: 'den′' } },
  { cyrillic: 'Э', name: 'э', latin: 'e', tip: 'Açık “e” (elma)', example: { ru: 'это', tr: 'bu', latin: 'eto' } },
  { cyrillic: 'Ю', name: 'ю', latin: 'yu', tip: '“yu” gibi', example: { ru: 'юг', tr: 'güney', latin: 'yug' } },
  { cyrillic: 'Я', name: 'я', latin: 'ya', tip: '“ya” gibi', example: { ru: 'яблоко', tr: 'elma', latin: 'yabloko' } },
]
