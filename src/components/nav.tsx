import React from 'react'
import {Link} from 'gatsby';
import styles from './nav.module.css';


const Nav = () => {
    return (
        <div className={styles.nav} >
            <Link to='/'> Home </Link>
            <Link to='/contact'> Contact </Link>
            {/* <Link to='/product'> Product </Link> */}
            <Link to='/new'> About </Link> < br />
            <Link to='/pruduct/phone1'> Product 1 </Link> < br />
            <Link to='/pruduct/phone2'> Product 2 </Link> < br />
            <Link to='/pruduct/phone3'> Product 3 </Link> < br />
            
        </div>
    )
}

export default Nav
