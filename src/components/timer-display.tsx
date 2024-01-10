import { secondsToTime } from '../utils/seconds-to-time'

interface Props {
  timeToShow: number
}

export function TimerDisplay({ timeToShow }: Props): JSX.Element {
  return <span className='text-7xl'>{secondsToTime(timeToShow)}</span>
}
