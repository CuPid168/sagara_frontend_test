import { Group, UnstyledButton, UnstyledButtonProps } from '@mantine/core'
import {
  IconArrowDown,
  IconArrowsUpDown,
  IconArrowUp,
} from '@tabler/icons-react'
import styles from '@styles/components/pages/students/TableHeader.module.css'

interface TableHeaderProps extends UnstyledButtonProps {
  children: React.ReactNode
  sorted?: 'asc' | 'desc'
  onClick?: () => void
}

export function TableHeader({
  children,
  sorted,
  onClick,
  ...props
}: TableHeaderProps) {
  return (
    <UnstyledButton
      w="100%"
      h="100%"
      onClick={onClick}
      py="xs"
      className={styles.button}
      {...props}
    >
      <Group wrap="nowrap">
        {children}
        {sorted === 'asc' ? (
          <IconArrowUp size="1rem" />
        ) : sorted === 'desc' ? (
          <IconArrowDown size="1rem" />
        ) : (
          <IconArrowsUpDown size="1rem" />
        )}
      </Group>
    </UnstyledButton>
  )
}
