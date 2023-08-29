import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import '../styles/Random.css'
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

export default function Random() {

    const [items, setItem] = useState([])
    const [num, setNum] = useState(1);

    useEffect(() => {
        fetch("http://127.0.0.1:8082/menuitem")
            .then(res => res.json())
            .then(
                (result) => {
                    setItem(result);
                }
            )
    }, [])

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setNum(randomNumberInRange(1, 27));
    };

    return (
        <>
            <div className="page">
                <NavBar />
                <header>
                <div className='p-3 text-center order-head'>
                    <h1 className='mb-3'>Let us choose menu for you</h1>
                    <h6 className='mb-3'>Try something new in case it works for you.</h6>        
                </div>

                </header>
                
                <div className="random-ctn">
                    <div className="random-btn">
                        <button onClick={handleClick}>
                            <u>Start Random !</u>
                        </button>

                    </div>

                    {items.filter(item => item.menuId === num).map(filteredMenu => (
                        <>
                            <Card sx={{ maxWidth: 345 }} className="card-random">
                                <CardActionArea onClick={(e) =>
                                    e.preventDefault(
                                        console.log(filteredMenu.menuName)
                                    )
                                }>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={filteredMenu.menuPic}
                                        alt="item"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {filteredMenu.menuName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {filteredMenu.menuDetail}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {filteredMenu.price} Baht
                                    </CardActions>
                                </CardActionArea>

                            </Card>

                        </>
                    ))}


                </div>
                <br></br>
                <Footer />
            </div>
        </>
    )
}