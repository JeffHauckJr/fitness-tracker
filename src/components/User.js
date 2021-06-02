import { Link } from "react-router-dom";
import {AppBar, Toolbar} from '@material-ui/core'
import {
	SIGNIN,
    REGISTER
} from "../constants";

const User = () => {
    return (
        <div style={{top: 'auto', bottom: 0,}}>
			<AppBar>
			<Toolbar>
				<Link to={SIGNIN}>Sign In</Link>
				<Link to={REGISTER}>Register</Link>
			</Toolbar>
		</AppBar>
		</div>
			
		
    )
}

export default User