import styles from '../../assets/Card.module.css'
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button, Divider } from '@mui/material'
import { CarType } from '../../models/interfaces/ResultApi'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import { api } from '../../lib/axios'
import FavoriteIcon from '@mui/icons-material/Favorite';
import SpeedIcon from '@mui/icons-material/Speed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface CardProps {
  car: CarType
  setCars?: React.Dispatch<React.SetStateAction<CarType[] | undefined>>
}

const CardCar = ({ car }: CardProps) => {

  const { auth } = useContext(AuthContext)

  
  const handleFavorite = () => {
    console.log(`/${auth?.id}/favorite/${car.id}`);
    
    api.post('/' + auth?.id + '/' + 'favorite/' + car.id)
  }
  
  const handleUnfavorite = () => {
    api.post(`/3/favorite/1`)
  }

  const idList: string[] = []
  auth?.favoriteCars && auth?.favoriteCars.map((car) => idList.push(car.id))

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
          <Typography gutterBottom variant="h6" sx={{fontWeight:'bold'}} component="div">
            {car.model}
            <Typography color='gray'>
              {car.brand}
            </Typography>
          </Typography>
          <Typography color='text.primary' sx={{fontWeight:'bold', marginTop:'30px'}} variant='h6' fontSize={16}>
            R$: {car.value}
          </Typography> 
          <Divider color='gray' sx={{marginY:'15px'}} />
          <Grid container>
            <Grid item xs={6}>
              <Typography width='full' display='flex'>
                <SpeedIcon sx={{marginRight:'10px'}} />
                {car.km} Km
              </Typography>
              <Typography width='full' display='flex'>
                <CalendarMonthIcon sx={{marginRight:'10px'}} />
                {car.year}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
        {/* {auth?.favoriteCars.includes(car.id) ? ( */}
        {idList.includes(car.id) ? (
          <Button onClick={handleUnfavorite}>
            <FavoriteIcon color='error' />
          </Button>
        ) : (      
          <Button onClick={handleFavorite}>
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