export function unitCoords(unit: string, rows: number) {
  const coordsString = unit.split(':')[1].split('|')
  const formattedCoords = coordsString.map((coord) => {
    return +coord * 2
  })

  //@NOTE the y axis in game is reversed
  const reversedY = rows - formattedCoords[1]
  return {
    x: formattedCoords[0],
    y: reversedY
  }
}

export const championCoords = (
  championLocation: string,
  rows: number
): { x: number; y: number } => {
  const coords = championLocation.split('|').map((coord) => +coord * 2)
  const reversedY = rows - coords[1]
  return {
    x: coords[0],
    y: reversedY
  }
}
