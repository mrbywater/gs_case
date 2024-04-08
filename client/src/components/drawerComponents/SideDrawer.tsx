import './SideDrawer.scss'
import {Drawer} from "@mui/material";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const SideDrawer = (props : any) => {

    const {
        anchor,
        children,
        icon,
        iconStyle,
        title,
        setOpen,
        open
    } = props

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
                <div className='drawer'>
                    <div className='drawerCross'>
                        <span>
                            {title}
                        </span>
                        <FontAwesomeIcon
                            icon={faXmark}
                            onClick={toggleDrawer(false)}
                        />
                    </div>
                    {children}
                </div>
            </Drawer>
        </div>
    )
}
export { SideDrawer }