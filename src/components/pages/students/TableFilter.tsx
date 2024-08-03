import { FILTER_CONDITION_DATA } from '@data/filter'
import {
  Button,
  NumberInput,
  Popover,
  Select,
  TextInput,
  Stack,
} from '@mantine/core'
import {
  TFilterColumn,
  TFilterCondition,
  TFilterData,
} from '../../../utils/types/filter'
import { useState } from 'react'
import type { Dayjs } from 'dayjs'
import { DatePickerInput, DateValue } from '@mantine/dates'
import dayjs from 'dayjs'
import IconFilter from '@components/shared/icons/IconFilter'
import { useDisclosure } from '@mantine/hooks'
import styles from '@styles/components/pages/students/TableFilter.module.css'

interface TableAddFilterProps {
  columns: TFilterColumn[]
  onAdd: (data: TFilterData) => void
}

export function TableAddFilter({ columns, onAdd }: TableAddFilterProps) {
  const [opened, { open, close }] = useDisclosure(false)

  const [selected, setSelected] = useState<TFilterColumn>()
  const [value, setValue] = useState<string | Dayjs | number>()
  const [condition, setCondition] = useState<TFilterCondition>('is')

  const onAddClick = () => {
    console.log(selected, value, condition)
  }

  const onColumnSelect = (value: string | null) => {
    const column = columns.find((column) => column.value === value)
    setSelected(column)
    setValue(undefined)
    setCondition('is')
  }

  const onConditionSelect = (value: string | null) => {
    setCondition((value ?? 'is') as TFilterCondition)
    setValue(undefined)
  }

  const onTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value === '' ? undefined : value)
  }

  const onNumberInputChange = (value: string | number) => {
    setValue(Number(value))
  }

  const onDateSelect = (date: DateValue) => {
    setValue(date === null ? undefined : dayjs(date))
  }

  return (
    <Popover
      position="bottom-start"
      opened={opened}
      classNames={{
        dropdown: styles['popover-dropdown'],
      }}
      onClose={close}
    >
      <Popover.Target>
        <Button
          onClick={open}
          leftSection={<IconFilter size="1.3rem" />}
          variant="default"
        >
          Filters
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack>
          <Stack gap={4}>
            <Select
              placeholder="Select column"
              value={selected?.value}
              onChange={onColumnSelect}
              comboboxProps={{ withinPortal: false }}
              data={columns}
            />
            <Select
              placeholder={
                selected ? 'Select condition' : 'Please select column'
              }
              value={condition}
              disabled={!selected}
              onChange={onConditionSelect}
              comboboxProps={{ withinPortal: false }}
              data={selected ? FILTER_CONDITION_DATA[selected.type] : []}
            />
            {selected === undefined ? null : selected.type === 'string' ? (
              <TextInput
                placeholder="Enter value"
                value={value as string}
                onChange={onTextInputChange}
              />
            ) : selected.type === 'number' ? (
              <NumberInput
                placeholder="Enter value"
                value={value as number}
                allowDecimal
                onChange={onNumberInputChange}
              />
            ) : (
              <DatePickerInput
                placeholder="Pick date"
                value={value ? (value as Dayjs).toDate() : undefined}
                onChange={onDateSelect}
              />
            )}
          </Stack>
          <Button
            disabled={value === undefined && selected === undefined}
            onClick={onAddClick}
          >
            Add Filter
          </Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  )
}
