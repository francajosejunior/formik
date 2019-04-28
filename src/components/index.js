import React from 'react'
import { Button } from '@material-ui/core'

const Counter = ({ counter, dispatch }) => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
      >
        Count
      </Button>
      <br />
    </>
  )
}

export default Counter
