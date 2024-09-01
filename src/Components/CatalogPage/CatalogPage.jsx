import { Autocomplete, Box, Button, Divider, TextField, Typography, Checkbox, useTheme, Radio, FilledInput } from "@mui/material"
import css from './CatalogPage.module.css'
import { useSelector } from "react-redux"
import { selectFilters} from "../../redux/filters/selectors.js"
import { useEffect, useState, } from "react"
import { BsWind } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { BsCupHot } from "react-icons/bs";
import { MdTv } from "react-icons/md";
import { BsDroplet } from "react-icons/bs";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { PiSquaresFour } from "react-icons/pi";
import AppsIcon from '@mui/icons-material/Apps';
import { useDispatch } from "react-redux"
import { changeFilters } from '../../redux/filters/slice.js'
import { getCampersList } from "../../redux/campersList/operations.js"
import { selectCampers, selectError } from "../../redux/campersList/selectors.js"
import { CamperCard } from "../CamperCard/CamperCard.jsx"
import { CiMap } from "react-icons/ci";

export const CatalogPage = () => {

    const dispatch = useDispatch();

    const theme = useTheme();
    const filtersData = useSelector(selectFilters)
    const campersList = useSelector(selectCampers)
    const [filters, setFilters] = useState(filtersData);
    const error = useSelector(selectError)

    useEffect(() => {
        const get = async () => {
        dispatch(getCampersList(filtersData))
        }

        get()

    }, [filtersData])


    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: !filters[e.target.name],
        })
    }

    const radioChange = (e) => {
        setFilters({
            ...filters,
            form: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(changeFilters(filters))
        dispatch(getCampersList(filters))
    }

    return (
        <Box className={css.catalogPageBox}>

            <Box>
                    <form
                    className={css.inputsBox} 
                    onSubmit={e => handleSubmit(e)}>

                        <Box>

                            <FilledInput
                            value={filters.location}
                            onChange={e => setFilters({...filters, location: e.target.value})}
                            className={css.locationInput}
                            />
                            {/* <label
                            htmlFor="location"
                            >Location</label>
                            <Autocomplete 
                            id='location'
                            options={locations}
                            value={filters.location}
                            onChange={e => setFilters({...filters, location: e.target.value})}
                            renderInput={(params) => <TextField name='location' {...params} />}
                            className={css.locationInput}
                            /> */}
                        </Box>

                        <Box className={css.filters}>

                            <Typography 
                            element="p">Filters</Typography>

                            <Box>

                                <Typography 
                                variant='h5'
                                sx={{marginTop: '30px',
                                    marginBottom: '24px',
                                }}
                                >
                                    Vehicle equipment
                                </Typography>
                                <Divider/>

                               <Box className={css.equipment}>
                                    <label>
                                        <Checkbox 
                                        name='AC' 
                                        value={true}
                                        onChange={e => handleChange(e)}
                                        icon={<BsWind/>} 
                                        checkedIcon={<BsWind fill={theme.palette.primary.button} />}
                                        />
                                        AC
                                    </label>
                                    
                                    <label>
                                        <Checkbox 
                                        name='transmission'
                                        value='automatic'
                                        onChange={e => setFilters({...filters, transmission: 'automatic'})}
                                        icon={<GiGearStickPattern/>}
                                        checkedIcon={<GiGearStickPattern fill={theme.palette.primary.button}/>}
                                        />
                                        Automatic
                                    </label>

                                    <label>
                                        <Checkbox 
                                        name='kitchen'
                                        value={true}
                                        onChange={e => handleChange(e)}
                                        icon={<BsCupHot/>}
                                        checkedIcon={<BsCupHot fill={theme.palette.primary.button}/>}
                                        />
                                        Kitchen
                                    </label>
                                    
                                    <label>
                                        <Checkbox 
                                        name='TV'
                                        value={true}
                                        onChange={e => handleChange(e)}
                                        icon={<MdTv/>}
                                        checkedIcon={<MdTv fill={theme.palette.primary.button}/>}
                                        />
                                    TV
                                    </label>
                                    
                                    <label>
                                        <Checkbox 
                                        value={true}
                                        name='bathroom'
                                        onChange={e => handleChange(e)}
                                        icon={<BsDroplet/>}
                                        checkedIcon={<BsDroplet fill={theme.palette.primary.button}/>}
                                        />
                                        Bathroom
                                    </label>
                               </Box>
                                
                            </Box>
                                
                            <Box>
                                
                                <Typography 
                                    variant='h5'
                                    sx={{marginTop: '30px',
                                        marginBottom: '24px',
                                    }}
                                    >
                                        Vehicle type
                                    </Typography>
                                    <Divider/>

                                    <Box className={css.equipment}>
                                        <label>
                                            <Radio 
                                            name='form' 
                                            value='panelTruck'
                                            onChange={e => radioChange(e)}
                                            icon={<SpaceDashboardIcon/>} 
                                            checkedIcon={<SpaceDashboardIcon fill={theme.palette.primary.button} />}
                                            />
                                            Van
                                        </label>
                                    
                                        <label>
                                            <Radio 
                                            name='form'
                                            onChange={e => radioChange(e)}
                                            value='fullyIntegrated'
                                            icon={<PiSquaresFour/>}
                                            checkedIcon={<PiSquaresFour fill={theme.palette.primary.button}/>}
                                            />
                                                <span>Full</span>
                                                Integrated
                                        </label>

                                        <label>
                                            <Radio 
                                            name='form'
                                            onChange={e => radioChange(e)}
                                            value='alcove'
                                            icon={<AppsIcon/>}
                                            checkedIcon={<AppsIcon fill={theme.palette.primary.button}/>}
                                            />
                                            Alcove
                                        </label>
                                    </Box>
                            </Box>
                        </Box>

                        <Button variant="contained" type="submit">Search</Button>
                    </form>

            </Box>

            {error ? <Typography>Error</Typography> :
            <Box className={css.listBox} >
               {campersList.map(camper => <CamperCard key={camper.id} camper={camper}/>)}
            </Box>}
        </Box>
    )
}