import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import authSlice from './store/authSlice'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-sc'></div>
  ) : null
}

export default App
