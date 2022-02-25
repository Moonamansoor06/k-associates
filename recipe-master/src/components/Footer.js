import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer">
                <p >
                    &copy; Recipie hub<span>{" "}</span> <span>{new Date().getFullYear()}</span>
                    <span>{"  "}<span> created with{" "}</span></span><span><a href="https://www.gatsbyjs.com/">Gatsby</a></span>
                </p>
        </footer>           
        
    )
}

export default Footer
