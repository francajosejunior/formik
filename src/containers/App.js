import React from 'react'
import { Button } from '@material-ui/core'
import RenderProps from '../components/RenderProps'
import HOC from '../components/HOC';

const App = () => {
  const [example, setExample] = React.useState('renderprops')

  return (
    <>
      <Button onClick={() => setExample('renderprops')}>Render props</Button>
      <Button onClick={() => setExample('hoc')}>HOC</Button>
      <br />
      {example === 'renderprops' && <RenderProps />}
      {example === 'hoc' && <HOC />}
    </>
  )
}

export default () => <App />
