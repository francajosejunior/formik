import React from 'react'
import {
  Button,
  Paper,
  TextField,
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Input,
  FormLabel,
  FormControlLabel,
  Checkbox
} from '@material-ui/core'
import { Formik, Field } from 'formik'
import TextField2 from './TextField2'

const initialValues = { nome: '', email: '' }

class RenderProps extends React.Component {
  render() {
    return (
      <Paper>
        <h2>Render Props</h2>
        <br />
        <Formik validateOnBlur={false}>
          {propsFormk => {
            return (
              <div>
                <input type="text" name="nome" onChange={propsFormk.onChange} />
                <pre>{JSON.stringify(propsFormk, null, 2)}</pre>
              </div>
            )
          }}
        </Formik>
      </Paper>
    )
  }
}

export default RenderProps
