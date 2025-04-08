import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({info}) {
    const IMG_URL = 
    "https://images.unsplash.com/photo-1628525805785-cc1d20e7be74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL ="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";

  return (
    <div className="info-box">
  
     <div className='card'>
      <br></br>
      
     <Card sx={{ maxWidth: 340 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        margin-top="0%"
        image={info.humidity > 70 ? RAIN_URL : info.temp > 25 ? HOT_URL : info.temp < 20 ? COLD_URL : IMG_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {
          info.temp > 25 ? <SunnyIcon/> : info.temp < 20 ? <AcUnitIcon/> : info.humidity > 70 ? <ThunderstormIcon/> : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature: {info.temp}°C</p>
          <p>Humidity: {info.humidity}%</p>
          <p>Min Temperature: {info.tempMin}°C</p>
          <p>Max Temperature: {info.tempMax}°C</p>  
          <p>
             The Weather can be described as <li>{info.weather}</li>
              And Feels Like {
              info.feelsLike}&deg;C.
          </p>
        </Typography>
      </CardContent>
    
    </Card>
    </div>
      </div>

  );
}