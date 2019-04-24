import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import { increase } from '../redux/counter/counter.actions'

const Counter = ({ counter, dispatch }) => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(increase())}
      >
        Count
      </Button>
      <br />
      {counter}
    </>
  )
}
const mapStateToProps = (state, ownProps) => ({
  counter: state.counter
})

export default connect(mapStateToProps)(Counter)
