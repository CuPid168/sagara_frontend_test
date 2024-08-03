import { UNIVERSITIES } from '@data/student'
import { TStudent } from '../types/student'

const firstNames = [
  'Agus',
  'Budi',
  'Citra',
  'Dewi',
  'Eko',
  'Fajar',
  'Gita',
  'Hadi',
  'Indra',
  'Joko',
  'Kartika',
  'Lina',
  'Mira',
  'Nina',
  'Oka',
  'Putu',
  'Rina',
  'Sari',
  'Tono',
  'Umi',
  'Vina',
  'Wawan',
  'Yudi',
  'Zara',
]

const lastNames = [
  'Prasetyo',
  'Saputra',
  'Susanti',
  'Wijaya',
  'Nugroho',
  'Kusuma',
  'Purnama',
  'Rahmawati',
  'Santoso',
  'Handayani',
  'Mulyadi',
  'Lestari',
  'Permana',
  'Rahayu',
  'Suryadi',
  'Utama',
  'Suharto',
  'Wibowo',
  'Yulianto',
  'Zulkarnain',
]

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateRandomPhoneNumber(): string {
  const prefix = '+62'
  const number = Math.floor(Math.random() * 9000000000) + 1000000000 // 10 digit number
  return `${prefix}${number}`
}

function generateRandomFullName(): string {
  const firstName = getRandomElement(firstNames)
  const lastName = getRandomElement(lastNames)
  return `${firstName} ${lastName}`
}

function generateRandomStudent(): TStudent {
  const image =
    'https://images.pexels.com/photos/24770171/pexels-photo-24770171/free-photo-of-portrait-of-child-with-crown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const fullName = generateRandomFullName()
  const email = `${fullName.toLowerCase().replace(/ /g, '')}@example.com`
  const phone = generateRandomPhoneNumber()
  const instance = getRandomElement(UNIVERSITIES)
  const createdAt = new Date().getTime()

  return {
    image,
    fullName,
    email,
    phone,
    instance,
    createdAt,
  }
}

function generateDummyData(count: number): TStudent[] {
  const data: TStudent[] = []

  for (let i = 0; i < count; i++) {
    data.push(generateRandomStudent())
  }

  return data
}

export function getStudentsData() {
  const storageData = localStorage.getItem('students')

  if (storageData) {
    return JSON.parse(storageData) as TStudent[]
  }

  const data = generateDummyData(20)

  localStorage.setItem('students', JSON.stringify(data))

  return data
}
