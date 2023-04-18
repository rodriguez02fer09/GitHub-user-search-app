import React from "react";
import "./containerSearch.scss"
import SearchPrompt from "../SearchPrompt/SearchPrompt"
import SearchInformation from "../ContainerInformation/ContainerInformation"
import Mode from "../Mode/Mode";


const  ContainerSearch = () =>{
    return(<div className="ContainerSearch">
        <Mode/>
       <SearchPrompt/>
       <SearchInformation/>
    </div>)
}

export default ContainerSearch;