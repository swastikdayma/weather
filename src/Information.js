import {Box, Typography,styled} from '@mui/material';
import {LocationOn, SettingsBrightness, Opacity,Brightness5, Dehaze,Cloud} from '@mui/icons-material';

const Row= styled(Typography)({
    padding:'10px',
    fontSize: '20px',
    letterSpacing: 2,
    '& > svg': {
         marginRight: 10  
    }
});

const BlankMessage= styled(Typography)({
  color : 'red',
  margin : 50,
  padding : 20
})

function Information({result}) {
    return (
    result && Object.keys(result).length > 0 ?
    <Box style={{margin:'30px 60px'}}>
        <Row> <LocationOn/>Location: {result.name}, {result.sys.country}</Row >
        <Row><SettingsBrightness/>Temprature: {result.main.temp} </Row>
        <Row> <Opacity/>Humidity:{result.main.humidity} </Row>
        <Row> <Brightness5/> Sun Rise: { new Date(result.sys.sunrise * 1000).toLocaleTimeString()} </Row>
        <Row> <Brightness5/> Sun Set: { new Date(result.sys.sunset * 1000).toLocaleTimeString()} </Row>
        <Row><Dehaze/> Humidity: {result.weather[0].main}  </Row>
        <Row> <Cloud/> Cloud: {result.clouds.all }% </Row>
    </Box>
    : <BlankMessage>Please Enter The values To Check Weather</BlankMessage>
      )
}

export default Information;
