import { Burger, Group, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export function Header() {
  const [opened, { toggle }] = useDisclosure()

  return (
    <Stack>
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
    </Stack>
  )
}
