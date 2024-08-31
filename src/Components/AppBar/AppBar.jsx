import { AppBar as Bar, useTheme } from "@mui/material"
import { Link, NavLink } from "react-router-dom";
import css from './AppBar.module.css'

export const AppBar = () => {
    const theme = useTheme();

    return (
        <>
            <Bar sx={{ 
                background: theme.palette.primary.inputs,
                boxShadow: 'none',
                height: 72,
                padding: "24px 64px",
                display: 'flex',
             }}>
                <nav className={css.navLogo}>

                    <Link to='/'>
                        <span>Travel</span>
                    </Link>
                    <Link className={css.colorSpan} to='/'>
                        <span>Tracks</span>
                    </Link>

                </nav>

                <nav className={css.navPages}>

                    <NavLink to='/'
                     style={({ isActive }) =>
                        isActive
                          ? { color: theme.palette.primary.button }
                          :  null
                      }>
                        Home
                    </NavLink>
                    <NavLink to='catalog'
                    style={({ isActive }) =>
                        isActive
                          ? { color: theme.palette.primary.button }
                          :  null
                      }>
                        Catalog
                    </NavLink>

                </nav>
            </Bar>
        </>
    )
}