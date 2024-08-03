import { AppShell, Container } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Navbar } from './subcomponents/Navbar'
import { Header } from './subcomponents/Header'
import Head from 'next/head'

interface DefaultLayoutProps {
  children: React.ReactNode
  title: string
}

export function DefaultLayout({ children, title }: DefaultLayoutProps) {
  const [opened, { toggle }] = useDisclosure()

  return (
    <>
      <Head>
        <title>{`${title} - Sagara`}</title>
      </Head>
      <AppShell
        layout="alt"
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Container size="96rem">
            <Header />
          </Container>
        </AppShell.Header>
        <AppShell.Navbar>
          <Navbar />
        </AppShell.Navbar>
        <AppShell.Main bg="gray.1">
          <Container size="96rem">{children}</Container>
        </AppShell.Main>
      </AppShell>
    </>
  )
}
