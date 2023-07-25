import { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UpArrow from "../assets/UpwardArrow.svg";
import { user } from "../utils/data";              // this is temporary
import * as sc from "../styled/scNavbar";
import UserOptions from "./UserOptions";
import { COLORS, FONT_WEIGHTS } from "../utils/constants"

const UserInfo = ({ type, name, surname }) => {
    return (
        <sc.UserInfo>
            <sc.UserRow>
                <p>{ type }</p>
            </sc.UserRow>
            <sc.UserRow>
                <p>{ name + " " + surname}</p>
            </sc.UserRow>
        </sc.UserInfo>
    );  
};

const NavBar = () => {
    return (
        <sc.NavBarWrapper>
            <sc.NavBarContainer>
                <sc.IconsGroup>
                    <sc.NavBarIcon> 
                        <NotificationsIcon style={{color: {...COLORS.black }, }} />
                    </sc.NavBarIcon>
                    <sc.NavBarIcon> 
                        <MarkChatUnreadIcon style={{color: "black"}} />    
                    </sc.NavBarIcon>
                </sc.IconsGroup>
                <sc.User>
                    {user.map(({ type, name, surname}) => (
                        <UserInfo
                            type = {type}
                            name = {name}
                            surname={surname}
                            />
                    ))}
                    {user.map(({ image }) => (
                        <sc.UserPhoto src={image} />
                    ))}
                </sc.User>
                {/* <sc.NavBarIcon>
                    <img src={DownArrow1} ></img>
                </sc.NavBarIcon> */}
                {/* <sc.UserOptionsContainer className="accordion-container">
                    <UserOptions />
                </sc.UserOptionsContainer> */}
                <sc.NavBarIcon><KeyboardArrowDownIcon style={{color: "black"}}/></sc.NavBarIcon>
            </sc.NavBarContainer>
        </sc.NavBarWrapper>
    );
};


export default NavBar;