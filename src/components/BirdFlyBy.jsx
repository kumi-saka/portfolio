import { useEffect, useRef, useState } from 'react'
import { FaSpaghettiMonsterFlying } from 'react-icons/fa6'
import './BirdFlyBy.css'

const MIN_INTERVAL_MS = 5500
const MAX_INTERVAL_MS = 12000
const FIRST_FLIGHT_MIN_MS = 800
const FIRST_FLIGHT_MAX_MS = 1800

const randomBetween = (min, max) => Math.random() * (max - min) + min
const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

function BirdFlyBy() {
  const [flight, setFlight] = useState(null)
  const nextTimerRef = useRef(null)
  const endTimerRef = useRef(null)
  const flightCountRef = useRef(0)

  useEffect(() => {
    let isMounted = true
    let isFirst = true

    const schedule = () => {
      const delay = isFirst
        ? 140
        : randomBetween(MIN_INTERVAL_MS, MAX_INTERVAL_MS)
      isFirst = false

      nextTimerRef.current = window.setTimeout(() => {
        if (!isMounted) return

        const fromLeft = flightCountRef.current === 0 ? false : Math.random() > 0.5
        const startY = randomBetween(18, 34)
        const endY = clamp(
          startY + randomBetween(-8, 8),
          8,
          46
        )
        const duration = randomBetween(30, 46)
        setFlight({
          id: Date.now(),
          fromX: fromLeft ? '-24vw' : '124vw',
          toX: fromLeft ? '124vw' : '-24vw',
          fromY: `${startY}px`,
          toY: `${endY}px`,
          facing: fromLeft ? 1 : -1,
          duration,
          pulseDuration: randomBetween(3.2, 4.6),
        })
        flightCountRef.current += 1

        endTimerRef.current = window.setTimeout(() => {
          if (isMounted) {
            setFlight(null)
            schedule()
          }
        }, duration * 1000)
      }, delay)
    }

    schedule()
    return () => {
      isMounted = false
      if (nextTimerRef.current) window.clearTimeout(nextTimerRef.current)
      if (endTimerRef.current) window.clearTimeout(endTimerRef.current)
    }
  }, [])

  return (
    <div className="bird-layer" aria-hidden="true">
      {flight ? (
        <div
          key={flight.id}
          className="flight-cluster flight-birds"
          style={{
            '--flight-from-x': flight.fromX,
            '--flight-to-x': flight.toX,
            '--flight-from-y': flight.fromY,
            '--flight-to-y': flight.toY,
            '--flight-duration': `${flight.duration}s`,
            '--facing': flight.facing,
            '--small-behind-x': `${flight.facing === 1 ? -46 : 46}px`,
            '--small-chase-dir': `${flight.facing === 1 ? -1 : 1}`,
            '--pulse-duration': `${flight.pulseDuration}s`,
          }}
        >
          <div className="birds-scene">
            <div className="bird-track bird-track-large">
              <div className="icon-node bird-large">
                <div className="icon-pulse">
                  <svg className="bird-icon" viewBox="0 0 32 16">
                    <path className="bird-icon-line" d="M2 12 Q8 2 16 12 Q24 2 30 12" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bird-track bird-track-small">
              <div className="bird-small-chase-motion">
                <div className="icon-node bird-small">
                  <div className="icon-pulse">
                    <svg className="bird-icon" viewBox="0 0 32 16">
                      <path className="bird-icon-line" d="M2 12 Q8 2 16 12 Q24 2 30 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="monster-fixed" aria-hidden="true">
        <FaSpaghettiMonsterFlying className="monster-icon" />
      </div>
    </div>
  )
}

export default BirdFlyBy
