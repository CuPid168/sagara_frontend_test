import { TFilterColumn } from '../utils/types/filter'

export const PER_PAGE = 5

export const STUDENT_COLUMNS: TFilterColumn[] = [
  {
    label: 'Profile',
    value: 'image',
    type: 'string',
  },
  {
    label: 'Email Address',
    value: 'email',
    type: 'string',
  },
  {
    label: 'Phone Number',
    value: 'phone',
    type: 'string',
  },
  {
    label: 'Instance',
    value: 'instance',
    type: 'string',
  },
  {
    label: 'Created At',
    value: 'createdAt',
    type: 'date',
  },
]

export const UNIVERSITIES = [
  'Universitas Indonesia',
  'Institut Teknologi Bandung',
  'Universitas Gadjah Mada',
  'Universitas Airlangga',
  'Institut Pertanian Bogor',
  'Universitas Padjadjaran',
  'Universitas Diponegoro',
  'Universitas Brawijaya',
  'Universitas Sebelas Maret',
  'Universitas Hasanuddin',
  'Universitas Sumatera Utara',
  'Universitas Negeri Yogyakarta',
  'Institut Teknologi Sepuluh Nopember',
  'Universitas Udayana',
  'Universitas Andalas',
  'Universitas Riau',
  'Universitas Jenderal Soedirman',
  'Universitas Sriwijaya',
  'Universitas Lampung',
  'Universitas Syiah Kuala',
]
