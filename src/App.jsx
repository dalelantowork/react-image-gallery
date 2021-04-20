import React , { useState }from 'react'
import { Switch, Typography, AppBar,Button, Card, CardActions, CardContent, CardMedia, Grid, Toolbar, Container, Paper } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import { Brightness5,Brightness4 } from '@material-ui/icons'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import useStyles from './styles'

const cards = [1,2,3,4,5,6,7,8,9]

const App = () => {
    const classes= useStyles()
    const [darkMode, setDarkMode] = useState(false);

      
    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: '#ffc400',
              },
              secondary: {
                main: '#c6ff00',
              },
              
        },
    });

    const lightTheme = createMuiTheme({
        palette: {
            type: "light",
        },
    });

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme }>
        <Paper className={darkMode ? classes.paperdark : classes.paperlight}>
            <AppBar  position="relative" className={darkMode ? classes.appbardark : classes.appbarlight} >
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">
                        Image Gallery
                    </Typography>
                    <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)} className={classes.right} />
                    {darkMode? <Brightness4 /> :  <Brightness5 />}
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <div className={darkMode ? classes.overlaydark : classes.overlaylight }>
                    <Container maxWidth="sm" className={classes.containerText}>
                        <Typography variant="h2" align="center" color="textPrimary" className={classes.imageGalleryText} gutterBottom>
                            Image Gallery
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" className={classes.imageParagText} paragraph>
                            Hello everyone This is an image gallery and I'm trying to make this sentence as long as possible so we can see how does it look like on the screen.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center" >
                                <Grid item>
                                    <Button variant="contained" color="primary" className={darkMode ? classes.buttondark : classes.buttonlight }>
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary" >
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                    </div>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4} justify="center">
                        {cards.map((card)=>(
                            <Grid item key={card} xs={10} s={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="secondary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                        
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Made by Dale Lanto for the showcase of a photo album design made from ReactJS and Material-UI
                </Typography>
            </footer>
        </Paper>
        </ThemeProvider>
    )
}

export default App