import { StepCard } from './StepCard'

const steps = [
  {
    description: 'Тип здания, площадь, ключевые ограничения и стадия проекта.',
    step: 'шаг 01',
    title: 'Опишите объект',
  },
  {
    description:
      'Состав системы, перечень оборудования и комплект документации.',
    step: 'шаг 02',
    title: 'Получите конфигурацию',
  },
  {
    description:
      'Консультация по монтажу, настройке и дальнейшей эксплуатации.',
    step: 'шаг 03',
    title: 'Запустите без лишних рисков',
  },
]

export const HomeSteps = () => {
  return (
    <div className='container'>
      <div className='grid gap-4 md:grid-cols-3'>
        {steps.map(({ description, step, title }) => (
          <StepCard
            description={description}
            key={step}
            step={step}
            title={title}
          />
        ))}
      </div>
    </div>
  )
}
