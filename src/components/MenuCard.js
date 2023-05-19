import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea, CardActions } from '@mui/material';
import { Col } from 'react-bootstrap';
import '../styles/Menu.css'

export default function MenuCard({ m, handleClick }) {

    const { menuId, menuName, menuPic, menuDetail, price } = m

    return (
        <Col xs={12} md={3} className='g-5' key={menuId}>
            <Card sx={{ maxWidth: 345 ,display:"center"}}>
                <CardActionArea onClick={(e) =>
                    e.preventDefault(
                        handleClick(m)
                    )
                }>
                    <CardMedia
                        component="img"
                        height="140"
                        image={menuPic}
                        alt="item"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {menuName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {menuDetail}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {price} Baht
                    </CardActions>
                </CardActionArea>

            </Card>

        </Col> 
        


    )
}
