import styles from '../../assets/Card.module.css'
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material'
import { CarType } from '../../models/interfaces/ResultApi'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, useState } from 'react'
import { api } from '../../lib/axios'
import FavoriteIcon from '@mui/icons-material/Favorite';
// import { GetCars } from '../../lib/getCars'


interface CardProps {
  car: CarType
  setCars: React.Dispatch<React.SetStateAction<CarType[] | undefined>>
}

const CardCar = ({ car }: CardProps) => {

  const { auth, setAuth } = useContext(AuthContext)
  const [callGet, setCallGet] = useState('')

  
  const handleFavorite = ( idCar: string ) => {
    const userAddFavorite = auth
    userAddFavorite?.favoriteCars.push(idCar)
    setAuth(userAddFavorite)
    api.put(`/users/${auth?.id}`, userAddFavorite)
    console.log(callGet);
    setCallGet(' ')
  }

  return (
    <Grid item xs={7} md={6} lg={4} xl={3} sx={{margin:'auto'}}>
      <Card className={styles.Card}>
        <div className={styles.image_container}>
          <NavLink to={`/cardetailed/${car.id}`}>
            <CardMedia
              sx={{ height: 250 }}
              image={car.img}
              title="Foto do carro"
              className={styles.image}
              />
          </NavLink>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {car.model}
          </Typography>
          <Typography color='text.secondary' >
            <Typography color='text.primary' variant='caption' fontSize={16}>
              Marca:
            </Typography> 
            {car.brand}
          </Typography>
          <Typography color='text.secondary' >
            <Typography color='text.primary' variant='caption' fontSize={16}>
              Ano: 
            </Typography>
            {car.year}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Typography color='text.primary' variant='caption' fontSize={16}>
              Preço: 
            </Typography>
            {car.value}
          </Typography>
        </CardContent>
        <CardActions>
        {auth?.favoriteCars.includes(car.id) ? (
          <Button>
            <FavoriteIcon color='error' />
          </Button>
        ) : (      
          <Button onClick={() => handleFavorite(car.id)} size="small">
            <FavoriteIcon color='disabled' />
          </Button>
        )}
          <NavLink to={`/cardetailed/${car.id}`}>
            <Button size="small">Mais detalhes</Button>
          </NavLink>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CardCar