import {FaTimes} from 'react-icons/fa' 
import {
    MenuContainer,
    CrossIcon,
    Menu,
    MenuLink,
    Link
} from './MobileMenuElements'

const MobileMenu = (props) => {
    const toggleMenu = () =>{
        props.toggle();
    }
    return (
        <MenuContainer open={props.open}>
            <CrossIcon>
                <FaTimes onClick={props.toggle}></FaTimes>
            </CrossIcon>
            <Menu>
            <MenuLink>
                    <Link onClick={toggleMenu} to='home'>Home</Link>
                </MenuLink>
                <MenuLink>
                    <Link onClick={toggleMenu} to='about'>About Us</Link>
                </MenuLink>
                <MenuLink>
                    <Link onClick={toggleMenu} to='careers'>Discover</Link>
                </MenuLink>
                <MenuLink>
                    <Link onClick={toggleMenu} to='services'>Services</Link>
                </MenuLink>
                <MenuLink>
                    <Link onClick={toggleMenu} to='learn'>Learn more</Link>
                </MenuLink>
            </Menu>
        </MenuContainer>
    )
}

export default MobileMenu
