import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton"
import "./Header.css";

function Header() {
  return (
    <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon"/>
        </IconButton>
        <img 
        className="header__logo" 
        src={process.env.PUBLIC_URL + '/logo.png'}
        alt=""
        /> 
    </div>
  );
}

export default Header;
