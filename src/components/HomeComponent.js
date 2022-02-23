import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { StaticImage } from "gatsby-plugin-image"
import './homeComponent.css'

const HomeComponent = ({ data }) => {
    console.log('data is from HC =>',data)
    const company = data.allContentfulCompany.edges[0].node

    return (
        <div className="homeConatiner">
            <div className="homeTab1">
                <div >
                    <h2 className="homeTab2">
                        {company.name}
                    </h2>
                    <p className="homeText">
                        {renderRichText(company.description)}
                    </p>
                </div>
            </div>
            <div className="homeImage">
                <StaticImage src="../images/renovate.jpg"
                    alt=""
                    placeholder="blurred"

                />

            </div>
        </div>

    )

}

export default HomeComponent
