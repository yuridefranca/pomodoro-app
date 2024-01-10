import { Header } from './components/header'
import { PomodoroTimer } from './components/pomodoro-timer'

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-column justify-center items-center">
        <PomodoroTimer
          cycles={4}
          longRestingTime={15}
          shortRestingTime={5}
          workingTime={25}
        />
      </main>
    </>
  )
}

export default App
