import { Box, Button, Typography, Checkbox, useTheme, capitalize } from "@mui/material"
import { FavoriteBorder, Favorite } from "@mui/icons-material"
import { FaStar } from "react-icons/fa6";
import { CiMap } from "react-icons/ci";
import css from './CamperCard.module.css'


export const CamperCard = ({ camper }) => {
    const theme = useTheme()
    return (
        <Box className={css.cardBox}>
            <img 
            src={camper.gallery[0].thumb} 
            />
            <Box sx={{width:'524px'}}>

                <Box className={css.cardNameAndPrice}>

                    <Typography variant="h5">{camper.name}</Typography>

                    <Typography variant="h5">
                        €{camper.price.toFixed(2)}
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite fill={theme.palette.primary.button}/>} />
                    </Typography>

                    <Box >

                        <p>
                            <FaStar width='16px' fill={theme.palette.primary.stars}/>
                            {`${camper.rating}(${camper.reviews.length} Reviews)` }
                        </p>

                        <Typography variant="h6"><CiMap width='16px'/> {camper.location}</Typography>
                    </Box>

                    <p>{camper.description}</p>

                </Box>

                <Button variant="contained">Show More</Button>
            </Box>
        </Box>
    )
}