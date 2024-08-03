import { TableAddFilter } from '@components/pages/students/TableFilter'
import { DefaultLayout } from '@components/shared/layouts/DefaultLayout'
import {
  Avatar,
  Button,
  Group,
  Pagination,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { useEffect, useMemo, useState } from 'react'
import { TStudent } from '../utils/types/student'
import { getStudentsData } from '../utils/helpers/student'
import { PER_PAGE, STUDENT_COLUMNS } from '@data/student'
import { TableColumnSettings } from '@components/pages/students/TableColumnSettings'
import { useListState } from '@mantine/hooks'
import { TColumnSettings } from '../utils/types/filter'
import dayjs from 'dayjs'
import { TableHeader } from '@components/pages/students/TableHeader'
import styles from '@styles/components/pages/students/page.module.css'

export default function Student() {
  const [students, setStudents] = useState<TStudent[]>()
  const [val, setVal] = useState('')
  const [page, setPage] = useState(1)
  const [columns, columnsHandlers] = useListState<TColumnSettings>(
    STUDENT_COLUMNS.map(({ label, value }) => ({
      label,
      value,
      show: true,
    }))
  )
  const [sortBy, setSortBy] = useState<string>('createdAt')
  const [sortByDirection, setSortByDirection] = useState<'asc' | 'desc'>('desc')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setStudents(getStudentsData())
    }
  }, [])

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setVal(value)
  }

  const onSortByChange = (value: string) => {
    if (value === sortBy) {
      setSortByDirection((c) => (c === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortBy(value)
      setSortByDirection('asc')
    }
  }

  const onColumnSettingsChange = (index: number) => {
    columnsHandlers.setItemProp(index, 'show', !columns[index].show)
  }

  const onPageChange = (value: number) => {
    setPage(value)
  }

  const filteredStudents = useMemo(() => {
    if (!students) return []

    const searchedStudents = students.filter((student) => {
      return STUDENT_COLUMNS.some((column) => {
        if (column.value === 'image') return true

        const value = student[column.value as keyof TStudent]

        if (typeof value !== 'string') return false

        return value.toLowerCase().includes(val.toLowerCase())
      })
    })

    // sort searchedStudents by sortBy with sortByDirection
    return searchedStudents.sort((a, b) => {
      if (sortBy === 'createdAt') {
        if (sortByDirection === 'asc') {
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          )
        }

        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }

      const valueA = a[sortBy as keyof TStudent] as unknown as string
      const valueB = b[sortBy as keyof TStudent] as unknown as string

      if (sortByDirection === 'asc') {
        return valueA.localeCompare(valueB)
      }

      return valueB.localeCompare(valueA)
    })
  }, [students, val, sortBy, sortByDirection])

  const shownStudents = filteredStudents.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  )

  const totalPages = Math.ceil((filteredStudents.length ?? 0) / PER_PAGE)

  return (
    <DefaultLayout title="Student">
      <Stack gap="lg">
        <Title order={1}>Data Student</Title>
        <Group justify="space-between">
          <Group>
            <TableAddFilter
              columns={STUDENT_COLUMNS.filter(
                (column) => column.value !== 'image'
              )}
              onAdd={() => console.log('add filter')}
            />
            <Button leftSection={<IconPlus size="1.3rem" />}>
              Add Student
            </Button>
          </Group>
          <Group>
            <TextInput
              placeholder="Search"
              leftSection={<IconSearch size="1.3rem" />}
              fw={500}
              value={val}
              onChange={onSearchChange}
            />
            <TableColumnSettings
              columns={columns}
              onChange={onColumnSettingsChange}
            />
          </Group>
        </Group>
        <Table.ScrollContainer minWidth={1024}>
          <Table
            verticalSpacing="xl"
            classNames={{ th: styles['table-header'] }}
          >
            <Table.Thead>
              <Table.Tr>
                {columns.map(
                  (column) =>
                    column.show && (
                      <Table.Th bg="gray.0" key={column.value}>
                        <TableHeader
                          sorted={
                            sortBy === column.value
                              ? sortByDirection
                              : undefined
                          }
                          onClick={() => onSortByChange(column.value)}
                        >
                          <Text size="sm" fw={700}>
                            {column.label}
                          </Text>
                        </TableHeader>
                      </Table.Th>
                    )
                )}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {shownStudents?.map((student, i) => (
                <Table.Tr key={`student-${i}`}>
                  {columns.map((column) => {
                    if (!column.show) return null

                    let value = student[column.value as keyof TStudent]

                    if (typeof value !== 'string') {
                      value = dayjs(value).format('dddd, MMMM D, YYYY')
                    }

                    if (column.value === 'image') {
                      return (
                        <Table.Td key={column.value} fw={700} c="gray.9">
                          <Avatar
                            src={value}
                            alt="Student profile"
                            radius="999px"
                            size="lg"
                          />
                        </Table.Td>
                      )
                    }

                    return (
                      <Table.Td key={column.value} fw={700} c="gray.9">
                        {value}
                      </Table.Td>
                    )
                  })}
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
        <Group justify="center">
          <Pagination total={totalPages} value={page} onChange={onPageChange} />
        </Group>
      </Stack>
    </DefaultLayout>
  )
}
