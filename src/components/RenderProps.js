import React from 'react'
import { Button, Paper, TextField, Grid } from '@material-ui/core'
import { Formik, Field } from 'formik'
import TextField2 from './TextField2'

const initialValues = { nome: '', email: '' }

class RenderProps extends React.Component {
  render() {
    return (
      <Paper>
        <h2>Render Props</h2>
        <br />
        <Formik initialValues={initialValues}>
          {({ values, handleChange, handleBlur }) => (
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
              </Grid>
              <br />
              <Button type="submit" variant="raised" color="primary">
                Salvar
              </Button>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        </Formik>
      </Paper>
    )
  }
}

export default RenderProps
