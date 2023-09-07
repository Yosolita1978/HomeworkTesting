
const NavBar = (props) => {

    return(
        <div data-testid="navbar">
            <a href="https://www.linkedin.com/in/crissrodriguez/">{props.name}</a>
        </div>
    )
}

export default NavBar;