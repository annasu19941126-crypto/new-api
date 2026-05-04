import { cn } from '@/lib/utils'

const BRAND_LETTERS = [
  { letter: 'A', bg: '#FFD93D', color: '#2D2A26', rotate: '-3deg' },
  { letter: 'B', bg: '#6BCB77', color: '#FFFFFF', rotate: '2deg' },
  { letter: 'C', bg: '#4D96FF', color: '#FFFFFF', rotate: '-2deg' },
  { letter: 'D', bg: '#FF6B9D', color: '#FFFFFF', rotate: '3deg' },
] as const

interface BrandIconProps {
  className?: string
}

// 2×2 grid icon for header / sidebar icon slots
export function BrandIcon({ className }: BrandIconProps) {
  return (
    <div
      className={cn('grid grid-cols-2 gap-[2px] p-[2px]', className)}
      aria-label='ABCDTOKEN'
    >
      {BRAND_LETTERS.map(({ letter, bg, color }) => (
        <span
          key={letter}
          style={{
            background: bg,
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '9px',
            fontWeight: 800,
            color,
            fontFamily: "'Nunito', sans-serif",
            lineHeight: 1,
            aspectRatio: '1',
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  )
}

interface BrandLogoFullProps {
  className?: string
  size?: 'sm' | 'md'
}

// Full horizontal logo: [A][B][C][D] TOKEN
export function BrandLogoFull({ className, size = 'md' }: BrandLogoFullProps) {
  const letterSize = size === 'sm' ? '16px' : '24px'
  const letterPadding = size === 'sm' ? '2px 5px' : '2px 8px'
  const letterRadius = size === 'sm' ? '5px' : '8px'
  const tokenSize = size === 'sm' ? '14px' : '20px'

  return (
    <div className={cn('flex items-center', className)}>
      <div className='flex items-center gap-1'>
        {BRAND_LETTERS.map(({ letter, bg, color, rotate }) => (
          <span
            key={letter}
            style={{
              background: bg,
              borderRadius: letterRadius,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: letterSize,
              fontWeight: 800,
              color,
              fontFamily: "'Nunito', sans-serif",
              padding: letterPadding,
              lineHeight: 1.3,
              transform: `rotate(${rotate})`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <span
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 700,
          fontSize: tokenSize,
          color: '#2D2A26',
          marginLeft: '6px',
          letterSpacing: '0.5px',
        }}
      >
        TOKEN
      </span>
    </div>
  )
}
