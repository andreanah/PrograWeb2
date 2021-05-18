import Header from './Header';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { shadows } from '@material-ui/system';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Footer from './BottomNav';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'flex',
  },
  media: {
    height: 140,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  
}));

export default function MainPageElements() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    
    <Grid container spacing={0.5} >
   
    <Header/>

        <img alt="HeaderImage" src="./banner.png" width='100%'/>
        <img alt="HeaderImage" src="./HEADER.png" width='100%'/>
        <img alt="Image" src="./title.png" width='100%'/>

                <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        
                        </CardActions>
                    
                    </Card>
                </Grid>   
                <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid>   
                <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid>   
                <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid> 
                <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="./a_3.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid>     

       <img alt="Image2" src="./title2.png" width='100%'/>
       <img alt="Albums" src="./albums.png" width='100%'/>

       <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid>   
                <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid>   
                <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid>   
                <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid> 
                <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="./a_3.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid>     

       <img alt="HotSale" src="./HOTSALE.png" width='100%'/>         

       <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid>   
                <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid>   
                <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid>   
                <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid> 
                <Grid item xs>
                    <Card className={classes.root}>
                    
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="./a_3.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Agregar al carrito
                        </Button>
                        </CardActions>
                    
                    </Card>
                </Grid>    

                <img alt="HotSale" src="./aaa.png" width='100%'/> 
                <Footer/> 

    </Grid>

    
  );
}