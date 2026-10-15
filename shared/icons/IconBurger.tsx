export const IconBurger = ({ color = '#DB4004' }: { color?: string }) => {
  return (
    <svg
      fill='none'
      height='17'
      viewBox='0 0 29 17'
      width='29'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M0.5 0.5L28.5 0.499998' stroke={color} strokeLinecap='round' />
      <path d='M0.5 8.5L28.5 8.5' stroke={color} strokeLinecap='round' />
      <path d='M0.5 16.5L28.5 16.5' stroke={color} strokeLinecap='round' />
    </svg>
  )
}
