import * as React from 'react'

interface StepProps {
  step: number
  title: string
  children: React.ReactNode
}

interface StepListProps {
  children: React.ReactNode
}

function Step({ step, title, 'data-title': dataTitle, children }: StepProps & { 'data-title'?: string }) {
  // 优先使用 title，如果没有则使用 data-title
  const displayTitle = title || dataTitle
  
  return (
    <div className="relative pb-8 last:pb-0">
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
        {step}
      </div>
      <div className="ml-12">
        <h4 className="mb-2 font-semibold">{displayTitle}</h4>
        <div className="text-gray-600 dark:text-gray-300">{children}</div>
      </div>
    </div>
  )
}

export function StepList({ children }: StepListProps) {
  const steps = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<StepProps> => {
      if (!React.isValidElement(child)) return false
      
      const childProps = child.props as any
      
      // 检查 props 中是否有 data-title 属性（通过我们的转换，title 变成了 data-title）
      if (childProps && Object.prototype.hasOwnProperty.call(childProps, 'data-title')) return true
      
      // 检查 props 中是否有 node.tagName === 'steplist-step'
      if (childProps?.node?.tagName === 'steplist-step') return true
      
      // 检查 props 中是否有 title 属性（直接使用的情况）
      if (childProps && Object.prototype.hasOwnProperty.call(childProps, 'title')) return true
      
      return false
    }
  )

  return (
    <div className="my-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
      {steps.map((step, index) => 
        React.cloneElement(step, { 
          key: index,
          step: index + 1 
        })
      )}
    </div>
  )
}

StepList.Step = Step