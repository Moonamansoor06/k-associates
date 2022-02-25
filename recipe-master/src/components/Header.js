
import React from 'react'
import { Link } from 'gatsby'
import {FaAlignJustify} from 'react-icons/fa'
import secretRecipe from "../assets/images/secret-recipe.png" 
import Layout from './Layout'
const Header = () => {
    return (
        <Layout>
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/" ><img src={secretRecipe} alt=" recipe hub"/></Link>
                    <button className="nav-btn"><FaAlignJustify/></button>
                </div>
            <div className="nav-link show-links">
                <Link to="/" className="nav-link " activeClassName="active-link">Home</Link>
                <Link to="/about" className="nav-link " activeClassName="active-link">About</Link>
                
                <Link to="/recipes" className="nav-link " activeClassName="active-link">Recipes</Link>
                <Link to="/tags" className="nav-link " activeClassName="active-link">Tags</Link>
                    <div className="nav-link contact-link">
                        <Link to="/contacts" className="btn " >Contact</Link>
                    </div>
            </div>
            </div>
                        
                    </nav>
                    </Layout>
       
    )
}

export default Header
