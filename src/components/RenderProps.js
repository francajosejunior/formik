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

const validate = values => {
  let errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  //...

  return errors
}

class RenderProps extends React.Component {
  render() {
    return (
      <Paper>
        <h2>Render Props</h2>
        <br />
        <Formik initialValues={initialValues} validate={validate}>
          {propsFormik => {
            const { values, errors, handleChange, handleBlur } = propsFormik
            return (
              <form>
                <Grid container spacing={24}>
                  <Grid item>
                    <TextField
                      name="nome"
                      label="Nome"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nome}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      name="email"
                      label="E-mail"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={!!errors.email}
                    />
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <InputLabel htmlFor="age-helper">Age</InputLabel>
                      <Select
                        value={values.idade || ''}
                        name="idade"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        input={<Input name="input-age" id="age-helper" />}
                      >
                        <MenuItem value="">
                          <em>Selecionar</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.admin}
                          name="admin"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          color="primary"
                        />
                      }
                      label="Admin"
                    />
                  </Grid>
                </Grid>
                <br />
                <Button type="submit" variant="raised" color="primary">
                  Salvar
                </Button>

                <h4>Values</h4>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
                <h4>Errros</h4>
                <pre>{JSON.stringify(errors, 0, 2)}</pre>
              </form>
            )
          }}
        </Formik>
      </Paper>
    )
  }
}

export default RenderProps
