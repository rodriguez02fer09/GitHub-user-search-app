import React ,{ useState }from "react";
import "./layout.scss"
import  ContainerSearch from "../ContainerSearch/ContainerSearch";

const Layout  =()=> {
    const [isDark, setIsDark] = useState(false);

    const toggleDarkMode = () => {
      setIsDark(!isDark);
    };

return(
    <div className={`layout ${isDark ? "dark" : ""}`} toggleDarkMode={toggleDarkMode}>
     <ContainerSearch isDark={isDark}  toggleDarkMode={toggleDarkMode} />
    </div>
)
}
export default Layout;