import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'

function Header(){
    return(
        <div className='header'>

            <div className="header_logo">
                <StorefrontIcon className='header_logo_image' fontSize='large'/>
                <h2 className='header_logo_title'> Amazon</h2>
            </div>
            <div className='header_content'>
                <div className="header_search">
                    <input type='text' className='header_input'/>
                    <SearchIcon className='header_search_icon'/>
                </div>
                <div className="header_nav">
                    <div className="nav_item">
                        <span className="nav_lineOne">Hello Guest</span>
                        <span className="nav_lineTwo">Sign In</span>
                    </div>
                    <div className="nav_item">
                        <span className="nav_lineOne">Your</span>
                        <span className="nav_lineTwo">Shop</span>
                    </div>
                    <div className="nav_item">
                        <ShoppingBasketIcon fontSize='large'/>
                        <span className="nav_lineTwo">0</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;