import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useAuthValue } from '../utils/authContext'

const Login = () => {
  const { setAuthenticated } = useAuthValue()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const submit = async (event) => {
    event.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthenticated(userCredential)
    })
  }

  return (
    <Form onSubmit={submit} autoComplete="false">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required="required"
          onChange={(e) => {setEmail(e.target.value)}}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          required="required"
          onChange={(e) => {setPassword(e.target.value)}}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Login
