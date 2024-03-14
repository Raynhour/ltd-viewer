import { MASTERMINDS } from "@/consts/masterminds.enum"

export function iconPath(name: string): string{
    name = name.replace(/\s/g, '');
    return `https://cdn.legiontd2.com/Icons/${name}.png`
}
export function mastermindIconPath(mastermid: string): string{
    return `https://cdn.legiontd2.com/Icons/Items/MastermindVariant${mastermindKey(mastermid)}.png`
}

function mastermindKey(mastermind: string): string{
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
        [MASTERMINDS.MEGAMIND]: '14',
    }
    
    return masterminds[mastermind]
}
