import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


class Navbar extends React.Component {
    render(){
        const { location } = this.props
        return(
            <Menu>
                <Link to='/'>
                  <Menu.Item active={location.pathname === '/'} >
                    Rock Paper Scissors
                    </Menu.Item >
                </Link>
            </Menu>
        )

    }
}

export default withRouter(Navbar);