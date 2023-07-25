import { useState } from "react";
import * as sc from "../styled/scUserOptions"
import UpArrow from "../assets/UpwardArrow.svg"; 

const UserOptions = () => {         // these will be turned into links
    const [open, setOpen] = useState(false);
    
    <sc.OptionsContainer onClick={() => setOpen((state) => !state)}>
        <sc.OptionHeader src={UpArrow}></sc.OptionHeader>
        <sc.Option><p>profile</p></sc.Option>
        <sc.Option><p>settings</p></sc.Option>
        <sc.Option><p>see survey</p></sc.Option>
        <sc.Option><p>course list</p></sc.Option>
        <sc.Option><p>sign out</p></sc.Option>
    </sc.OptionsContainer>
};

export default UserOptions;