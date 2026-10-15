export const isRokada =
  process.env.ROOT_ID === '2' || process.env.NEXT_PUBLIC_ROOT_ID === '2'

export const EMAIL = isRokada ? 'office@rokada.info' : 'office@signum-nn.ru'

export const PHONE = isRokada ? '+7 (831) 280-90-00' : '+7 (831) 280-90-00'
