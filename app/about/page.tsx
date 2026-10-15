import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
import Image from 'next/image'

import { isRokada } from '@/shared/constants'
import { IconLogo } from '@/shared/icons/IconLogo'
import { IconLogoRokada } from '@/shared/icons/IconLogoRokada'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { Typography } from '@/shared/ui/Typography'

export const metadata: Metadata = {
  title: 'О нас',
}

export default function AboutPage() {
  return (
    <div className='container'>
      <div className='mt-[24px]'>
        <Breadcrumbs
          items={[
            { href: '/', label: 'Главная' },
            { href: '/about', label: 'О нас' },
          ]}
        />
      </div>
      <div className='mt-[32px] flex flex-col gap-[32px] md:mt-[60px] md:gap-[64px]'>
        <div>
          {isRokada ? (
            <div className='w-[113px] md:w-[412px]'>
              <IconLogoRokada
                className='h-auto w-full'
                height={112}
                width={412}
              />
            </div>
          ) : (
            <div className='w-[123px] md:w-[412px]'>
              <IconLogo className='h-auto w-full' height={190} width={412} />
            </div>
          )}
          <div className='relative mt-[14px] ml-[60px] md:mt-[32px] md:ml-[200px]'>
            <div className='flex max-w-[1200px] flex-col items-end'>
              <div>
                {isRokada ? (
                  <Typography className='max-w-[1060px]' tag='h1' variant='h1'>
                    Надёжные системы{' '}
                    <span className='text-primary-orange'>
                      связи и оповещения
                    </span>{' '}
                    для объектов{' '}
                    <span className='text-primary-orange'>любого масштаба</span>
                  </Typography>
                ) : (
                  <Typography className='max-w-[1000px]' tag='h1' variant='h1'>
                    Надёжные{' '}
                    <span className='text-primary-orange'>
                      пожарные системы
                    </span>{' '}
                    для объектов{' '}
                    <span className='text-primary-orange'>
                      любого назначения
                    </span>
                  </Typography>
                )}
                <Typography
                  className='mt-4 max-w-[600px] md:mt-[24px]'
                  variant='p1'>
                  {isRokada ? (
                    <>
                      Компания «РОКАДА» специализируется на разработке, поставке
                      и внедрении современных систем оповещения, громкой связи
                      и музыкальной трансляции для объектов разного масштаба.
                    </>
                  ) : (
                    <>
                      Компания «СИГНУМ» специализируется на разработке, поставке
                      и внедрении современных систем пожарной безопасности,
                      соответствующих требованиям действующих нормативов
                      и стандартов.
                    </>
                  )}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        {isRokada ? (
          <>
            <div>
              <Typography className='text-primary-grey' variant='h2'>
                Что мы предлагаем
              </Typography>
              <Typography
                className='text-primary-black mt-2 max-w-[700px] md:mt-4'
                variant='h2'>
                Компания ROKADA специализируется на производстве современного
                оборудования для:
              </Typography>
              <div className='mt-[24px] flex w-full max-w-[1000px] flex-col items-end gap-4 md:mt-[32px]'>
                {[
                  'Оперативного оповещения при чрезвычайных ситуациях',
                  'Организации музыкального вещания',
                  'Установки систем громкой связи',
                  'Создания каналов двусторонней коммуникации',
                ].map(item => (
                  <div
                    className='border-primary-grey w-full max-w-[700px] rounded-[6px] border-[1px] p-[10px]'
                    key={item}>
                    <Typography className='text-primary-black' variant='p1'>
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Typography className='text-primary-grey' variant='h2'>
                Где применяется наше оборудование
              </Typography>
              <Typography
                className='text-primary-black mt-2 max-w-[700px] md:mt-4'
                variant='h2'>
                Наши системы успешно работают на самых разных объектах по всей
                России. Мы оснастили современным оборудованием:
              </Typography>
              <div className='mt-[24px] flex w-full max-w-[1000px] flex-col items-end gap-4 md:mt-[32px]'>
                {[
                  'Учебные заведения',
                  'Торговые комплексы',
                  'Магазины',
                  'Банковские учреждения',
                  'Исправительные колонии',
                  'Производственные площадки',
                  'Спортивные арены',
                  'Дорожные объекты',
                ].map(item => (
                  <div
                    className='flex w-full max-w-[700px] items-center gap-2'
                    key={item}>
                    <div className='bg-primary-orange size-4 shrink-0 rounded-[2px]'></div>
                    <Typography className='text-primary-black' variant='p1'>
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Typography className='text-primary-grey' variant='h2'>
                Почему выбирают нас
              </Typography>
              <Typography
                className='text-primary-black mt-2 max-w-[700px] md:mt-4'
                variant='h2'>
                Наши решения выгодно отличаются:
              </Typography>
              <div className='relative mt-[24px] flex w-full max-w-[1000px] flex-col items-end gap-4 md:mt-[32px]'>
                <Image
                  alt='РОКАДА'
                  className='absolute -top-[10px] -right-[130px] hidden h-[177px] w-[181px] md:-top-[250px] md:-right-[300px] md:block md:h-[430px] md:w-[341px]'
                  height={430}
                  src='/images/rokada/about/1.png'
                  width={341}
                />
                <Image
                  alt='РОКАДА'
                  className='absolute top-[100px] -left-[80px] hidden h-[108px] w-[111px] md:top-[80px] md:right-[700px] md:left-auto md:block md:h-[283px] md:w-[309px]'
                  height={283}
                  src='/images/rokada/about/2.png'
                  width={309}
                />
                {[
                  'Интуитивно понятным управлением',
                  'Минимальными затратами на монтаж',
                  'Экономичным энергопотреблением',
                  'Оптимальным набором компонентов',
                ].map(item => (
                  <div
                    className='border-primary-grey w-full max-w-[700px] rounded-[6px] border-[1px] p-[10px]'
                    key={item}>
                    <Typography className='text-primary-black' variant='p1'>
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div className='md:mt-[140px]'>
              <Typography className='text-primary-grey' variant='h2'>
                Поддержка на всех этапах
              </Typography>
              <Typography
                className='text-primary-black mt-2 max-w-[700px] md:mt-4'
                variant='h2'>
                Мы обеспечиваем полный цикл обслуживания:
              </Typography>
              <div className='mt-[24px] flex w-full max-w-[1000px] flex-col items-end gap-4 md:mt-[32px]'>
                {[
                  'Квалифицированные консультации по всем вопросам',
                  'Помощь в подборе оборудования ',
                  'Предоставление всей необходимой документации',
                  'Выезд специалистов для решения сложных задач',
                  'Оперативное реагирование на запросы и обращения',
                ].map((item, index) => (
                  <div
                    className='flex w-full max-w-[700px] items-center gap-2'
                    key={item}>
                    <div className='border-primary-orange flex size-8 shrink-0 items-center justify-center rounded-[6px] border-[1px]'>
                      <Typography
                        className='text-primary-orange text-[20px]'
                        variant='p1-highlight'>
                        {index + 1}
                      </Typography>
                    </div>
                    <Typography className='text-primary-black' variant='p1'>
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <Typography className='text-primary-grey' variant='h2'>
                Что мы предлагаем
              </Typography>
              <Typography
                className='text-primary-black mt-2 max-w-[700px] md:mt-4'
                variant='h2'>
                Мы реализуем комплексные решения в области пожарной безопасности
              </Typography>
              <div className='mt-[24px] flex w-full max-w-[1000px] flex-col items-end gap-4 md:mt-[32px]'>
                {[
                  'Автоматические системы пожарной сигнализации',
                  'Системы передачи извещений о пожаре',
                  'Интеграцию пожарных систем с инженерной инфраструктурой объекта',
                  'Проектирование, пусконаладку и техническое сопровождение',
                ].map(item => (
                  <div
                    className='border-primary-grey w-full max-w-[700px] rounded-[6px] border-[1px] p-[10px]'
                    key={item}>
                    <Typography className='text-primary-black' variant='p1'>
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Typography className='text-primary-grey' variant='h2'>
                Где применяется наше оборудование
              </Typography>
              <Typography
                className='text-primary-black mt-2 max-w-[700px] md:mt-4'
                variant='h2'>
                Решения «СИГНУМ» успешно применяются на объектах различного
                масштаба и назначения по всей России
              </Typography>
              <div className='mt-[24px] flex w-full max-w-[1000px] flex-col items-end gap-4 md:mt-[32px]'>
                {[
                  'Образовательные учреждения',
                  'Торговые и бизнес-центры',
                  'Промышленные и складские комплексы',
                  'Медицинские учреждения',
                  'Административные здания',
                  'Спортивные и культурные объекты',
                  'Объекты транспортной инфраструктуры',
                ].map(item => (
                  <div
                    className='flex w-full max-w-[700px] items-center gap-2'
                    key={item}>
                    <div className='bg-primary-orange size-4 shrink-0 rounded-[2px]'></div>
                    <Typography className='text-primary-black' variant='p1'>
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Typography className='text-primary-grey' variant='h2'>
                Почему выбирают СИГНУМ
              </Typography>
              <Typography
                className='text-primary-black mt-2 max-w-[700px] md:mt-4'
                variant='h2'>
                Наши системы проверены на практике. Их ценят за:
              </Typography>
              <div className='relative mt-[24px] flex w-full max-w-[1000px] flex-col items-end gap-4 md:mt-[32px]'>
                <Image
                  alt='СИГНУМ'
                  className='absolute -top-[10px] -right-[130px] h-[177px] w-[181px] md:-top-[200px] md:-right-[200px] md:h-[265px] md:w-[272px]'
                  height={265}
                  src='/images/signum/about/1.png'
                  width={272}
                />
                <Image
                  alt='СИГНУМ'
                  className='absolute top-[100px] -left-[80px] h-[108px] w-[111px] md:top-[20px] md:right-[660px] md:left-auto md:h-[260px] md:w-[268px]'
                  height={260}
                  src='/images/signum/about/2.png'
                  width={268}
                />
                <Image
                  alt='СИГНУМ'
                  className='absolute -right-[80px] -bottom-[40px] h-[124px] w-[126px] md:top-[100px] md:-right-[200px] md:h-[281px] md:w-[288px]'
                  height={281}
                  src='/images/signum/about/3.png'
                  width={288}
                />
                {[
                  'Соответствие требованиям ГОСТ, СП и нормативов МЧС',
                  'Надёжность и стабильную работу в круглосуточном режиме',
                  'Удобство настройки и эксплуатации',
                  'Оптимальное соотношение цены и функциональности',
                  'Возможность масштабирования и модернизации',
                ].map(item => (
                  <div
                    className='border-primary-grey w-full max-w-[700px] rounded-[6px] border-[1px] p-[10px_30px_10px_10px]'
                    key={item}>
                    <Typography className='text-primary-black' variant='p1'>
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Typography className='text-primary-grey' variant='h2'>
                Поддержка на всех этапах
              </Typography>
              <Typography
                className='text-primary-black mt-2 max-w-[700px] md:mt-4'
                variant='h2'>
                Мы сопровождаем заказчика на каждом этапе реализации проекта
              </Typography>
              <div className='mt-[24px] flex w-full max-w-[1000px] flex-col items-end gap-4 md:mt-[32px]'>
                {[
                  'Профессиональные консультации и техническая поддержка',
                  'Помощь в подборе оборудования под конкретный объект',
                  'Предоставление проектной и эксплуатационной документации',
                  'Техническое сопровождение и выезд специалистов',
                  'Оперативное реагирование на запросы и обращения',
                ].map((item, index) => (
                  <div
                    className='flex w-full max-w-[700px] items-center gap-2'
                    key={item}>
                    <div className='border-primary-orange flex size-8 shrink-0 items-center justify-center rounded-[6px] border-[1px]'>
                      <Typography
                        className='text-primary-orange text-[20px]'
                        variant='p1-highlight'>
                        {index + 1}
                      </Typography>
                    </div>
                    <Typography className='text-primary-black' variant='p1'>
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <div className='mt-[32px] md:mt-[130px]'>
        <div className='border-primary-grey mt-[32px] rounded-[10px] border-[1px] p-4 md:mt-[130px] md:p-[32px]'>
          <Typography className='text-primary-black' tag='p' variant='h2'>
            {isRokada
              ? 'Доверьте организацию систем связи и оповещения профессионалам — выберите надёжные решения от ROKADA!'
              : 'СИГНУМ — когда безопасность объекта подтверждена профессиональным подходом.'}
          </Typography>
        </div>
      </div>
    </div>
  )
}
