import * as React from 'react'

interface CalloutProps {
  variant?: 'default' | 'primary' | 'secondary'
  children: React.ReactNode
}

export function Callout({ variant = 'default', children }: CalloutProps) {
  const styles = {
    default: 'border-l-4 border-gray-500 bg-gray-50 dark:bg-gray-800',
    primary: 'border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950',
    secondary: 'border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950'
  }

  return (
    <div className={`my-4 rounded-r-lg p-4 ${styles[variant]}`}>
      {children}
    </div>
  )
}