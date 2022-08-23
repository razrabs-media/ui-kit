import { CSSProperties } from 'react'
import type { ElementType, ReactNode } from 'react'

export type StyleBadgeProps = {
  wide?: boolean
  letterSpacing?: CSSProperties['letterSpacing']
  color?: 'primary' | 'secondary' | 'brand'
  margin?: CSSProperties['margin']
}

export type BadgeProps = {
  as?: ElementType
  className?: string
  children?: ReactNode
  itemProp?: string
} & StyleBadgeProps
