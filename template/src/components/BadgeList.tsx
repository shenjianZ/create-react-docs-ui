import * as React from 'react'

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  children: React.ReactNode
}

interface BadgeListProps {
  children: React.ReactNode
}

function Badge({ variant = 'default', children }: BadgeProps) {
  const styles = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
  }

  return (
    <span className={`inline-block rounded-full px-3 py-1 text-sm ${styles[variant]}`}>
      {children}
    </span>
  )
}

export function BadgeList({ children }: BadgeListProps) {
  return (
    <div className="my-4 flex flex-wrap gap-2">
      {React.Children.map(children, child => 
        React.isValidElement(child) ? child : null
      )}
    </div>
  )
}

BadgeList.Badge = Badge