import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css';
export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/167761227/photo/air-pollution-city.jpg?s=612x612&w=0&k=20&c=qxeovmbB4hRbn_UMNG0jaHdphmEL4EDwRXmZV7tZtfE=";
    const HOT_URL="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=TrdzfkrLvvrvp5CWEqh5C2DNS13jrgLo849g6T583So=";
    const COLD_URL="https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=ID6SPra-gNgAYY7F9p_7_eVLgoxZJeD3N95Nu3LOY9I=";
    const RAIN_URL="https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.jpg?s=1024x1024&w=is&k=20&c=6D4nOCZt39KSqx0-nDyxSj6n8JFrSI5cSCDUUt4o17w=";
    return(
        <div className="InfoBox">
         <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL:info.temp>30?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80 ?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The Weather can be described as <b>{info.weather}</b> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
  </div>
    )
}