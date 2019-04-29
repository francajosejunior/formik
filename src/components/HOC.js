import React from 'react'
import { withFormik } from 'formik'
import { Paper, Grid, TextField } from '@material-ui/core'

class HOC extends React.Component {
  render() {
    const { values, touched, errors, handleChange, handleBlur } = this.props
    return (
      <Paper>
        <h2>Higher Order Component</h2>
        <br />
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
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </Paper>
    )
  }
}

export default withFormik({
  mapPropsToValues: () => ({ nome: 'Teste' })
})(HOC)
