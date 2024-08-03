import { Popover, Stack, Checkbox, ActionIcon } from '@mantine/core'
import { TColumnSettings } from '../../../utils/types/filter'
import { useDisclosure } from '@mantine/hooks'
import styles from '@styles/components/pages/students/TableFilter.module.css'
import { IconSettings } from '@tabler/icons-react'

interface TableColumnSettingsProps {
  columns: TColumnSettings[]
  onChange: (index: number) => void
}

export function TableColumnSettings({
  columns,
  onChange,
}: TableColumnSettingsProps) {
  const [opened, { open, close }] = useDisclosure(false)

  const onClick = (value: string) => () => {
    onChange(columns.findIndex((columnData) => columnData.value === value))
  }

  return (
    <Popover
      position="bottom-end"
      opened={opened}
      classNames={{
        dropdown: styles['popover-dropdown'],
      }}
      onClose={close}
    >
      <Popover.Target>
        <ActionIcon
          onClick={open}
          variant="default"
          c="dimmed"
          radius="sm"
          size="lg"
        >
          <IconSettings size="1.3rem" />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack>
          {columns.map((column) => (
            <Checkbox
              key={column.value}
              checked={column.show}
              onChange={onClick(column.value)}
              label={column.label}
            />
          ))}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  )
}
