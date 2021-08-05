import {FaTimes} from 'react-icons/fa' 
import {
    MenuContainer,
    CrossIcon,
    Menu,
    MenuLink,
    Link
} from './MobileMenuElements'

const MobileMenu = (props) => {
    return (
        <MenuContainer open={props.open}>
            <CrossIcon onClick={props.toggle}>
                <FaTimes></FaTimes>
            </CrossIcon>
            <Menu>
                <MenuLink>
                    <Link>About Us</Link>
                </MenuLink>
                <MenuLink>
                    <Link>Discover</Link>
                </MenuLink>
                <MenuLink>
                    <Link>Services</Link>
                </MenuLink>
                <MenuLink>
                    <Link>Learn more</Link>
                </MenuLink>
            </Menu>
        </MenuContainer>
    )
}

export default MobileMenu
