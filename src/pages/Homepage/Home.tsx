import { useWidth } from "../../hooks/useWidth"
import './Home.css'
import banner_full from '../../assets/banner_full.jpg'
import banner_mobile from '../../assets/banner_mobile.jpg'
import { useContext } from "react"
import { AuthContext } from '../../contexts/AuthContext'
import { Button } from "@mui/material"
import GetUserLoged from "../../lib/GetUserLoged"
const Home = () => {

  const { auth, setAuth } = useContext(AuthContext)

  const userLoged = GetUserLoged()

  userLoged && setAuth(userLoged)

  return (
    <>
      <div className="container_banner">
      <img
          src={(useWidth() === 'xs') ? banner_mobile : banner_full}
          loading="lazy"
      />
    </div>
      <h1>Home</h1>
       <p>valor do auth {auth?.email}</p>
       <Button sx={{width:'50px', height: '90px'}} variant="contained" color='error'>Contained</Button>
            <Button
            id="basic-button"
            aria-haspopup="true"
            >
            </Button>
            <button>click me</button>
    </>
  )
}

export default Home