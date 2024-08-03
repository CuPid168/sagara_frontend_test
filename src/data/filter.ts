export const FILTER_CONDITION_VALUES = [
  'is',
  'isNot',
  'largerThan',
  'smallerThan',
] as const

export const FILTER_CONDITION_DATA = {
  string: [
    {
      label: 'Equal',
      value: 'is',
    },
    {
      label: 'Not Equal',
      value: 'isNot',
    },
  ],
  number: [
    {
      label: 'Equal',
      value: 'is',
    },
    {
      label: 'Not Equal',
      value: 'isNot',
    },
    {
      label: 'Larger Than',
      value: 'largerThan',
    },
    {
      label: 'Smaller Than',
      value: 'smallerThan',
    },
  ],
  date: [
    {
      label: 'Equal',
      value: 'is',
    },
    {
      label: 'Not Equal',
      value: 'isNot',
    },
    {
      label: 'After',
      value: 'largerThan',
    },
    {
      label: 'Before',
      value: 'smallerThan',
    },
  ],
}

export const FILTER_CONDITION_LABELS = {
  string: ['equal', 'Not Equal'],
  number: ['equal', 'Not Equal', 'Larger Than', 'Smaller Than'],
  date: ['equal', 'Not Equal', 'After', 'Before'],
} as const
