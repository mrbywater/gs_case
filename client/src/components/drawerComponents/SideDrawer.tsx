import './SideDrawer.scss'
import {Drawer} from "@mui/material";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SideDrawer = (props : any) => {

    const {
        anchor,
        children,
        icon,
        iconStyle
    } = props

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <div className='drawerContainer'>
            <FontAwesomeIcon
                icon={icon}
                onClick={toggleDrawer(true)}
                style={iconStyle}
            />
            <Drawer
                anchor={anchor}
                open={open}
                onClose={toggleDrawer(false)}
            >
                {children}
            </Drawer>
        </div>

    )
}
export { SideDrawer }