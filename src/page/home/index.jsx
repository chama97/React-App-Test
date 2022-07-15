import { Component, Fragment } from "react";
import Greeting from "../../component/home/Greeting";
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import plaza_logo from "../../assets/img/Plaza.jpg";
import { display } from "@mui/system";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.value = {
            setValue: [
                
            ]       
        }

    }


    render() {
        return(
            <Fragment>

                <Box sx={{ width: '100%' }}>
                    <Tabs
                        //onChange={handleChange}
                        //value={CustomerPage}
                        aria-label="Tabs where selection follows focus"
                        selectionFollowsFocus
                    >
                    <Tab label="Dashboard" />
                    <Tab label="Customer" />
                    <Tab label="Item" />
                    </Tabs>
                </Box>
                

                <Greeting name="GDSE"/>
                <Divider light/>
                <Card sx={{ maxWidth: 1500}} >
                <CardMedia
                    component="img"
                    height="320"
                    imag src={plaza_logo}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        About Plaza Hotel
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        The Plaza Hotel is a luxury hotel and condominium apartment building in Midtown Manhattan in New York City. 
                        It is located on the western side of Grand Army Plaza, after which it is named, just west of Fifth Avenue,
                        and is between 58th Street and Central Park South (a.k.a. 59th Street), at the southeastern corner of Central Park.
                    </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>


            


            </Fragment>
        )
    }
}




export default HomePage 