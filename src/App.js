import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { auth } from './utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { routes } from './utils/routes'
import { AuthProvider } from './utils/authContext'

function App() {
  const [loading, setLoading] = useState(true)
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
        <span className="visually-hidden">Loading...</span>
      </div>
    ) : (
      <AuthProvider value={{authenticated}}>
        { routing }
      </AuthProvider>
    )
  )
}

export default App
