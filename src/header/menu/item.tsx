import React from 'react'
import type { ElementType, FC, ReactNode } from 'react'
import Typography from '@razrabs/ui-kit/typography'

type Props = {
  children?: ReactNode
  as?: ElementType
}
export const MenuItem: FC<Props> = ({ children, ...restProps }) => (
  <Typography {...restProps}>{children}</Typography>
)
