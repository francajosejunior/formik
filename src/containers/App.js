import React from 'react'
import { Button } from '@material-ui/core'
import RenderProps from '../components/RenderProps'
import HOC from '../components/HOC'
import './../index.scss'
import User from '../components/User'
import Topo from './Topo'

const App = () => {
  const [example, setExample] = React.useState('renderprops')

  return (
    <>
      <Button onClick={() => setExample('renderprops')}>Render props</Button>
      <Button onClick={() => setExample('hoc')}>HOC</Button>
      <Topo />
      {example === 'renderprops' && <RenderProps />}
      {example === 'hoc' && <HOC />}
      <User />
    </>
  )
}

export default () => <App />
