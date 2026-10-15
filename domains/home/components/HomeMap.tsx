'use client'

import { geoAzimuthalEqualArea } from 'd3-geo'
import Link from 'next/link'
import { useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  type ProjectionFunction,
} from 'react-simple-maps'

import type { MapInstallation } from '@/shared/api/types'

import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'

const RUSSIA_TOPO_JSON = '/data/russia.topo.json'

const MAP_WIDTH = 1000
const MAP_HEIGHT = 573

const MARKER_RADIUS = 5

/** Размеры в координатах viewBox — SVG-текст не измерить до отрисовки. */
const TOOLTIP_CHAR_WIDTH = 7.4
const TOOLTIP_PADDING_X = 12
const TOOLTIP_HEIGHT = 30
const TOOLTIP_OFFSET_Y = 12

const projection = geoAzimuthalEqualArea()
  .rotate([-100, -60, 0])
  .scale(812)
  .translate([544, 394])

/** ComposableMap ждёт ProjectionFunction, но для тултипа нужен и сам geoProjection. */
const russiaProjection = projection as unknown as ProjectionFunction

interface HomeMapProps {
  installations: MapInstallation[]
}

interface HoveredMarker {
  name: string
  x: number
  y: number
}

const MapTooltip = ({ name, x, y }: HoveredMarker) => {
  const width = name.length * TOOLTIP_CHAR_WIDTH + TOOLTIP_PADDING_X * 2
  const isAbove = y - TOOLTIP_OFFSET_Y - TOOLTIP_HEIGHT >= 0

  // Прижимаем к краям, иначе подпись у границы карты обрежется.
  const left = Math.min(
    Math.max(x - width / 2, 0),
    Math.max(MAP_WIDTH - width, 0),
  )
  const top = isAbove
    ? y - TOOLTIP_OFFSET_Y - TOOLTIP_HEIGHT
    : y + TOOLTIP_OFFSET_Y

  return (
    <g pointerEvents='none'>
      <rect
        fill='var(--background)'
        height={TOOLTIP_HEIGHT}
        rx={6}
        stroke='var(--primary-grey)'
        strokeWidth={1}
        width={width}
        x={left}
        y={top}
      />
      <text
        dominantBaseline='middle'
        fill='var(--primary-black)'
        fontSize={14}
        textAnchor='middle'
        x={left + width / 2}
        y={top + TOOLTIP_HEIGHT / 2}>
        {name}
      </text>
    </g>
  )
}

export const HomeMap = ({ installations }: HomeMapProps) => {
  const [hovered, setHovered] = useState<HoveredMarker | null>(null)

  return (
    <div className='container'>
      <div className='flex items-center justify-between gap-4'>
        <Typography className='text-primary-grey' tag='p' variant='h2'>
          Реализованные проекты
        </Typography>
        <Link className='hidden md:block' href='/objects'>
          <Button>Подробнее</Button>
        </Link>
      </div>

      <div className='mt-6 overflow-hidden rounded-[6px]'>
        <ComposableMap
          height={MAP_HEIGHT}
          projection={russiaProjection}
          style={{ height: 'auto', width: '100%' }}
          width={MAP_WIDTH}>
          <Geographies geography={RUSSIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  geography={geo}
                  key={geo.rsmKey}
                  stroke='#fff'
                  strokeWidth={0.5}
                  style={{
                    default: {
                      fill: 'var(--secondary-gray-50)',
                      outline: 'none',
                    },
                    hover: {
                      fill: 'var(--secondary-gray-50)',
                      outline: 'none',
                    },
                    pressed: {
                      fill: 'var(--secondary-gray-50)',
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {installations.map(({ coordinates: [lon, lat], name }) => {
            const [x, y] = projection([lon, lat]) ?? []

            return (
              <Marker coordinates={[lon, lat]} key={`${name}-${lon}-${lat}`}>
                <circle
                  className='cursor-pointer'
                  fill='var(--primary-orange)'
                  onMouseEnter={() =>
                    x !== undefined && y !== undefined
                      ? setHovered({ name, x, y })
                      : undefined
                  }
                  onMouseLeave={() => setHovered(null)}
                  r={MARKER_RADIUS}
                />
              </Marker>
            )
          })}

          {/* Последним в SVG — иначе регионы и маркеры перекроют тултип. */}
          {hovered ? <MapTooltip {...hovered} /> : null}
        </ComposableMap>
      </div>

      <Link className='mt-4 block md:hidden' href='/objects'>
        <Button className='w-full'>Подробнее</Button>
      </Link>
    </div>
  )
}
