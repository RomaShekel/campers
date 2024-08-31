import { Box, Typography, Button, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
export const HomePage = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            backgroundImage: 'url(./src/images/home-img.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            paddingTop: '40vh',
            paddingLeft: '40px',
        }}
        >
        <Box sx={{
        }}
        >
            <Typography variant="h2" color={theme.palette.primary.inputs}>Campers of your dreams</Typography>
            <Typography variant="h5" color={theme.palette.primary.inputs}>You can find everything you want in our catalog</Typography>

            
            <Link to='/catalog'>
                <Button variant="contained"
                sx={{
                    padding: '16px 60px',
                    marginTop: '30px',
                }}
                >
                    View Now
                </Button>
            </Link>
    
        </Box>

        </Box>
    )
}
