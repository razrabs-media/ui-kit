import React from 'react'
import type { FC } from 'react'
import Badge from '@razrabs/ui-kit/badge'

type ChiefBadgeProps = {
  wide?: boolean
  className?: string
}
export const ChiefBadge: FC<ChiefBadgeProps> = (props) => (
  <Badge color='brand' {...props}>
    От главреда
  </Badge>
)
