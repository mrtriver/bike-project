

// import CheckOutButton from "../components/CheckOutButton";
import background from "../../images/bckgrnd.jpg"
import SelectStation from "../components/SelectStation"
import "./Home.css"



const HomePage = () => {
    return (
        <div className="home_section" style={{backgroundImage: `url(${background})`}}>
          
            
            
            <SelectStation />
        </div>
    )
};

export default HomePage;