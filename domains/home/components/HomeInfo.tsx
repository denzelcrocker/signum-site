import { isRokada } from '@/shared/constants'
import { Typography } from '@/shared/ui/Typography'

export const HomeInfo = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4'>
        <div className='bg-secondary-card flex flex-col rounded-[6px] p-[24px]'>
          <Typography className='flex-1' variant='p2'>
            {isRokada ? (
              <>
                Компания «РОКАДА» специализируется на разработке, поставке и
                внедрении современных систем оповещения, громкой связи и
                музыкальной трансляции для объектов разного масштаба.
              </>
            ) : (
              <>
                Компания «СИГНУМ» специализируется на разработке, поставке и
                внедрении современных систем пожарной безопасности,
                соответствующих требованиям действующих нормативов и стандартов.
              </>
            )}
          </Typography>
          <Typography className='text-primary-grey mt-[32px]' variant='p1'>
            Что мы предлагаем
          </Typography>
        </div>
        <div className='bg-secondary-card flex flex-col rounded-[6px] p-[24px]'>
          <Typography className='flex-1' variant='p2'>
            {isRokada ? (
              <>
                Наши системы успешно работают на самых разных объектах по всей
                России.
              </>
            ) : (
              <>
                Решения «СИГНУМ» успешно применяются на объектах различного
                масштаба и назначения по всей России
              </>
            )}
          </Typography>
          <Typography className='text-primary-grey mt-[32px]' variant='p1'>
            Область применения
          </Typography>
        </div>
        <div className='bg-secondary-card flex flex-col rounded-[6px] p-[24px]'>
          <Typography className='flex-1' tag='div' variant='p2'>
            <ul className='list-disc pl-[20px]'>
              {isRokada ? (
                <>
                  <li>Оперативного оповещения при чрезвычайных ситуациях</li>
                  <li>Организации музыкального вещания</li>
                  <li>Установки систем громкой связи</li>
                  <li>Создания каналов двусторонней коммуникации</li>
                </>
              ) : (
                <>
                  <li>Автоматические системы пожарной сигнализации;</li>
                  <li>
                    Интеграцию пожарных систем с инженерной инфраструктурой
                    объекта;
                  </li>
                  <li>
                    Проектирование, пусконаладку и техническое сопровождение.
                  </li>
                </>
              )}
            </ul>
          </Typography>
          <Typography className='text-primary-grey mt-[32px]' variant='p1'>
            Комплексные решения в области пожарной безопасности
          </Typography>
        </div>
      </div>
    </div>
  )
}
