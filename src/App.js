import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { auth } from './utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { routes } from './utils/routes'

function App() {
  const [loading, setLoading] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const routing = useRoutes(routes(authenticated))

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setAuthenticated(user);
      setLoading(false);
    });
  }, []);

  return (
    loading === true ? (
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <>
        { routing }
      </>
    )
  )
}

export default App
