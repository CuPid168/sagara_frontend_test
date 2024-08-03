import { NAVIGATION } from '@data/navigation'
import { Anchor, Group, Image, Stack, Text } from '@mantine/core'
import Link from 'next/link'
import styles from '@styles/components/layouts/DefaultLayout/Navbar.module.css'
import { useRouter } from 'next/router'

export function Navbar() {
  const router = useRouter()

  return (
    <Stack py="xl" px="lg" bg="#1C1C1C" h="100%" gap="3.125rem">
      <Image src="/logo.png" alt="SagaraLogo" pr="6rem" />
      <Stack>
        <Text c="dimmed">MENU</Text>
        {NAVIGATION.map(({ label, icon: Icon, path }, i) => (
          <Anchor
            className={styles['navbar-link']}
            mod={{ active: path === router.pathname }}
            component={Link}
            key={path}
            href={path}
          >
            <Icon />
            {label}
          </Anchor>
        ))}
      </Stack>
    </Stack>
  )
}
