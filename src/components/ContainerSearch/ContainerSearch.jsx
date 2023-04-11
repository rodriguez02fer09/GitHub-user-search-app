import React from "react";
import "./containerSearch.scss"
import SearchPrompt from "../SearchPrompt/SearchPrompt"
import SearchInformation from "../SearchInformation/SearchInformation"


const  ContainerSearch = () =>{
    return(<div className="ContainerSearch">
       <SearchPrompt/>
       <SearchInformation/>
    </div>)
}

export default ContainerSearch;