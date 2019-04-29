import React from 'react'
import { Button, Paper, TextField } from '@material-ui/core'
import { Formik } from 'formik'

class RenderProps extends React.Component {
  render() {
    return (
      <Paper>
        <h2>Render Props</h2>
        <br />
        <Formik>
          {({ values, handleChange, handleBlur }) => (
            <form>
              <TextField
                name="nome"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nome}
              />
              <Button type="submit">Salvar</Button>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        </Formik>
      </Paper>
    )
  }
}

export default RenderProps
