import React from 'react'

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occured: {error.toString()}</div>
)

export default ErrorMessage
