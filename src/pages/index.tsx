import { DefaultLayout } from '@components/shared/layouts/DefaultLayout'
import { CHART_DATA } from '@data/dashboard'
import { BarChart } from '@mantine/charts'
import {
  Avatar,
  Center,
  Group,
  Image,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { IconCalendar, IconTrendingUp } from '@tabler/icons-react'
import { useState } from 'react'

export default function Dashboard() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2023, 11, 29),
    new Date(2024, 0, 4),
  ])

  return (
    <DefaultLayout title="Dashboard">
      <Stack gap="4rem">
        <Group justify="space-between">
          <DatePickerInput
            leftSection={<IconCalendar size="1.3rem" />}
            type="range"
            placeholder="Pick dates range"
            value={value}
            valueFormat="MMM DD, YYYY"
            onChange={setValue}
          />
          <Select
            w="8rem"
            placeholder="Select"
            allowDeselect={false}
            data={['Daily']}
            defaultValue={'Daily'}
          />
        </Group>
        <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xl">
          <Paper p="lg">
            <Stack>
              <Group justify="space-between">
                <Title order={5} c="dimmed">
                  Total Students
                </Title>
                <Center p="xs" bg="blue.0">
                  <Avatar
                    src="/dashboard/students.png"
                    alt="students"
                    radius={0}
                  />
                </Center>
              </Group>
              <Title order={2}>513</Title>
              <Group wrap="nowrap" gap="xs">
                <Center c="teal.5">
                  <IconTrendingUp size="1.3rem" />
                </Center>
                <Text size="xs" c="teal.5">
                  8.5%
                </Text>
                <Text size="xs" c="dimmed">
                  Up from yesterday
                </Text>
              </Group>
            </Stack>
          </Paper>
          <Paper p="lg">
            <Stack>
              <Group justify="space-between">
                <Title order={5} c="dimmed">
                  Total Certified Students
                </Title>
                <Center p="xs" bg="red.0">
                  <Avatar
                    src="/dashboard/certified.png"
                    alt="certified"
                    radius={0}
                  />
                </Center>
              </Group>
              <Title order={2}>489</Title>
              <Group wrap="nowrap" gap="xs">
                <Center c="teal.5">
                  <IconTrendingUp size="1.3rem" />
                </Center>
                <Text size="xs" c="teal.5">
                  8.5%
                </Text>
                <Text size="xs" c="dimmed">
                  Up from yesterday
                </Text>
              </Group>
            </Stack>
          </Paper>
          <Paper p="lg">
            <Stack>
              <Group justify="space-between">
                <Title order={5} c="dimmed">
                  Average Certification Score
                </Title>
                <Center p="xs" bg="teal.0">
                  <Avatar
                    src="/dashboard/average.png"
                    alt="average"
                    radius={0}
                  />
                </Center>
              </Group>
              <Title order={2}>84.62</Title>
              <Group wrap="nowrap" gap="xs">
                <Center c="teal.5">
                  <IconTrendingUp size="1.3rem" />
                </Center>
                <Text size="xs" c="teal.5">
                  8.5%
                </Text>
                <Text size="xs" c="dimmed">
                  Up from yesterday
                </Text>
              </Group>
            </Stack>
          </Paper>
        </SimpleGrid>
        <BarChart
          h={800}
          data={CHART_DATA}
          dataKey="label"
          series={[{ name: 'Many Students', color: 'primary' }]}
        />
      </Stack>
    </DefaultLayout>
  )
}
