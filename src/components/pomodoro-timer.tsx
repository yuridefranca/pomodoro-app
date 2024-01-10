import { useEffect, useState } from 'react'
import { useInterval } from '../hooks/useInterval'
import { TimerDisplay } from './timer-display'
import { Button } from './button'
import { setTheme } from '../utils/set-theme'
import restingAlertMP3 from '../assets/sounds/bell-finish.mp3'
import workingAlertMP3 from '../assets/sounds/bell-start.mp3'

interface Props {
  cycles: number
  longRestingTime: number
  shortRestingTime: number
  workingTime: number
}

export function PomodoroTimer({
  cycles,
  longRestingTime,
  shortRestingTime,
  workingTime,
}: Props): JSX.Element {
  const [timeToShow, setTimeToShow] = useState(workingTime)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isWorking, setIsWorking] = useState(true)
  const [currentCycle, setCurrentCycle] = useState(1)

  setTheme(isWorking ? 'working' : 'resting')

  useInterval(
    () => {
      setTimeToShow(timeToShow - 1)
    },
    isTimerRunning ? 1000 : null
  )

  useEffect(() => {
    if (timeToShow !== 0) return

    const restingAlert = new Audio(restingAlertMP3)
    const workingAlert = new Audio(workingAlertMP3)

    const currentStatus = isWorking ? 'working' : 'resting'
    setTheme(currentStatus)

    if (currentStatus !== 'working') {
      const shouldRestartPomodoro = currentCycle === cycles
      setCurrentCycle(shouldRestartPomodoro ? 1 : currentCycle + 1)
      if (shouldRestartPomodoro) setIsTimerRunning(false)
      setIsWorking(true)
      setTimeToShow(workingTime)
      if (!shouldRestartPomodoro) workingAlert.play()
      return
    }

    const restingTime =
      currentCycle < cycles ? shortRestingTime : longRestingTime
    setIsWorking(false)
    setTimeToShow(restingTime)
    restingAlert.play()
  }, [
    currentCycle,
    cycles,
    isWorking,
    longRestingTime,
    shortRestingTime,
    timeToShow,
    workingTime,
  ])

  return (
    <>
      <section className="c-pomodoro flex flex-col gap-y-20">
        <div className="c-pomodoro--timer flex flex-col justify-center items-center gap-4 w-96 h-96">
          <TimerDisplay timeToShow={timeToShow} />
          <span className="text-2xl">{isWorking ? 'Working' : 'Resting'}</span>
          <div className='c-pomodoro--cycles'>
            {Array.from({ length: cycles }, (_, index) => (
              <span key={index} className={ currentCycle >= (index + 1) ? 'completed' :  '' }></span>
            ))}
          </div>
        </div>
        <div className="c-pomodoro--buttons flex flex-column justify-evenly gap-x-10">
          <Button
            text="Play/Pause"
            className="btn btn-solid-primary w-full"
            onClickFn={() => {
              if (currentCycle === 1) {
                new Audio(workingAlertMP3).play()
              }
              setIsTimerRunning(!isTimerRunning)
            }}
          />
          <Button
            text="Reset"
            className="btn btn-solid-primary w-full"
            onClickFn={() => {
              setIsTimerRunning(false)
              setIsWorking(true)
              setCurrentCycle(1)
              setTimeToShow(workingTime)
            }}
          />
        </div>
      </section>
    </>
  )
}
