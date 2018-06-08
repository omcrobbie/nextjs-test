import { Link } from '../routes'

const linkStyle = {
    marginRight: 15
}
const Header = () => (
    <div>
        <Link route="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link route="about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link route="shows">
            <a style={linkStyle}>Batman!</a>
        </Link>
    </div>
)
export default Header