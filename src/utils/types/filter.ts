import { FILTER_CONDITION_VALUES } from '@data/filter'

export type TFilterColumn = {
  label: string
  value: string
  type: 'string' | 'date' | 'number'
}

export type TFilterCondition = (typeof FILTER_CONDITION_VALUES)[number]

export type TFilterData = {
  column: string
  condition: TFilterCondition
  value: string
}

export type TColumnSettings = {
  label: string
  value: string
  show: boolean
}
