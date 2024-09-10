import { Box, Button, Typography, Checkbox, useTheme, Rating } from "@mui/material"
import { FavoriteBorder, Favorite } from "@mui/icons-material"
import { CiMap } from "react-icons/ci";
import css from './CamperCard.module.css'
import { NavLink } from "react-router-dom";


export const CamperCard = ({ camper }) => {
    const theme = useTheme()
    return (
        <li className={css.cardBox}>
            <img 
            src={camper.gallery[0].thumb} 
            />
            <Box sx={{width:'524px'}}>

                <Box className={css.cardNameAndPrice}>

                    <Box className={css.nameBox}>
                        <Typography variant="h5">{camper.name}</Typography>

                        <Typography variant="h5">
                            €{camper.price.toFixed(2)}
                            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite fill={theme.palette.primary.main}/>} />
                        </Typography>
                    </Box>

                    <Box className={css.starsBox}>

                        <p>
                            <Rating value={camper.rating} readOnly precision={0.1}/>
                            {`${camper.rating}(${camper.reviews.length} Reviews)` }
                        </p>

                        <Typography variant="h6"><CiMap width='16px'/> {camper.location}</Typography>
                    </Box>

                    <p className={css.descriptionText}>{camper.description}</p>

                </Box>

                <NavLink to='/camper' target="_blank" rel="noopener noreferrer">
                    <Button variant="contained">Show More</Button>
                    </NavLink>
            </Box>
        </li>
    )
}