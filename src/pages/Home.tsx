// ui-components
import TickerWrapper from '@components/Ticker/TickerWrapper'

// context
import TickerState from '@context/ticker/state'
const Home = () => {
  return (
    <TickerState>
      <TickerWrapper />
    </TickerState>
  )
}

export default Home