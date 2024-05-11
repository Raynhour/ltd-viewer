import { MASTERMINDS } from '@/consts/masterminds.enum'

export function iconPath(name: string, { fileType = 'png' } = {}): string {
  name = name.replace(/\s/g, '')
  const type = fileType ? `.${fileType}` : ''
  return `${import.meta.env.VITE_IMAGES_SRC}/Icons/${name}${type}`
}

export function mastermindIconPath(mastermid: string): string {
  return `${import.meta.env.VITE_IMAGES_SRC}/Icons/Items/MastermindVariant${mastermindKey(mastermid)}.png`
}

function mastermindKey(mastermind: string): string {
  const masterminds = {
    [MASTERMINDS.LOCK_IN]: '1',
    [MASTERMINDS.GREED]: '2',
    [MASTERMINDS.REDRAW]: '3',
    [MASTERMINDS.YOLO]: '4',
    [MASTERMINDS.CHAOS]: '5',
    [MASTERMINDS.HYBRID]: '6',
    [MASTERMINDS.FIESTA]: '7',
    [MASTERMINDS.CASH_OUT]: '8',
    [MASTERMINDS.CASTLE]: '9',
    [MASTERMINDS.CARTEL]: '10',
    [MASTERMINDS.CHAMPION]: '11',
    [MASTERMINDS.KINGSGUARD]: '12',
    [MASTERMINDS.DOUBLE_LOCK_IN]: '13',
    [MASTERMINDS.MEGAMIND]: '14'
  }

  let _mastermind = 'undefined'

  if (mastermind in masterminds) _mastermind = masterminds[mastermind as keyof typeof masterminds]

  return _mastermind
}
