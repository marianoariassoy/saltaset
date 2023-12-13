import { useState, useEffect } from 'react'

const Countdown = () => {
  const targetDate = new Date('December 19, 2023 11:00:00 GMT-05:00').getTime()
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  function calculateTimeRemaining() {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  return (
    <div className='flex items-center gap-x-12 text-xl text-center'>
      <div className='countdown-item'>
        <span className='font-bold text-5xl'>{timeRemaining.days}</span>
        <p>Días</p>
      </div>
      <div className='countdown-item'>
        <span className='font-bold text-5xl'>{timeRemaining.hours}</span>
        <p>Horas</p>
      </div>
      <div className='countdown-item'>
        <span className='font-bold text-5xl'>{timeRemaining.minutes}</span>
        <p>Minutos</p>
      </div>
      <div className='countdown-item'>
        <span className='font-bold text-5xl'>{timeRemaining.seconds}</span>
        <p>Segundos</p>
      </div>
    </div>
  )
}

export default Countdown
