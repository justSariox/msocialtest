import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
    as?: T
    variant:
        | 'h1'
        | 'body1'
        | 'body2'
        | 'caption'

    className?: string
    children?: ReactNode
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
    props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
    const { variant, className, as: Component = 'p', ...restProps } = props

    return <Component className={`${s[variant]} ${className}`} {...restProps} />
}