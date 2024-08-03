import { Group, Paper } from '@mantine/core'
import { TFilterData } from '../../../utils/types/filter'

interface FilterListProps {
  filters: TFilterData[]
}

export function FilterList({ filters }: FilterListProps) {
  return (
    <Group>
      {filters.map((filter, i) => (
        <Paper key={`filter-${i}`} p="xs" radius="sm" withBorder>
          {filter.column}
        </Paper>
      ))}
    </Group>
  )
}
