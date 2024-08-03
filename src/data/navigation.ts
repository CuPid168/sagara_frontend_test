import { IconLayoutGrid, IconSchool } from '@tabler/icons-react'

export const NAVIGATION = [
  {
    label: 'Dashboard',
    icon: IconLayoutGrid,
    path: '/',
  },
  {
    label: 'Students',
    icon: IconSchool,
    path: '/students',
  },
] as const
