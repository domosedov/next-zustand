export const __IS_DEV__ = process.env.NODE_ENV !== 'production'
export const __IS_SSR__ = typeof window === 'undefined'
