// import { Link } from 'react-router-dom'
import styles from '../../assets/Card.module.css'
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material'
import { CarType } from '../../models/interfaces/ResultApi'


interface CardProps {
  car: CarType
}

const CardCar = ({ car }: CardProps) => {
  return (
    <Grid item xs={7} md={6} lg={4} xl={3} sx={{margin:'auto'}}>
      <Card className={styles.Card}>
        <div className={styles.image_container}>
          <CardMedia
            sx={{ height: 250 }}
            image={car.img[0]}
            title="Foto do carro"
            className={styles.image}
          />
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
          <Button size="small">favorite</Button>
          <Button size="small">Mais detalhes</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CardCar