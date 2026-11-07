import { cn } from '../../../../lib/cn'

export function DemoHeader({ title, subtitle }) {
  return (
    <div className="flex items-center justify-between gap-3 bg-brand px-4.5 py-3.5">
      <span className="text-sm font-semibold text-white">{title}</span>
      <span className="text-xs text-lilac-300">{subtitle}</span>
    </div>
  )
}

export function StagePills({ stages, activeIndex = 1, className, itemClassName }) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <div className={cn('grid gap-1.5 text-center text-xs font-semibold', itemClassName)}>
        {stages.map((stage, index) => {
          const tone =
            index === activeIndex
              ? 'bg-brand text-white'
              : index < activeIndex
                ? 'bg-lilac-400 text-white'
                : 'bg-lilac-100 text-brand'

          return (
            <span
              key={stage}
              className={cn('whitespace-nowrap rounded-lg px-2.5 py-2', tone)}
            >
              {stage}
            </span>
          )
        })}
      </div>
    </div>
  )
}
