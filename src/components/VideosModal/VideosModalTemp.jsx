import React from "react";
import ModalVideo from 'react-modal-video'
import { graphql, useStaticQuery} from 'gatsby'
import './VideosModal.scss'
import Img from "gatsby-image"

class VideosModal extends React.Component {
    
    // constructor () {
    //     super()
    //     this.state = {
    //         isOpen: false,
    //         videoId: ""
    //     };
    //     this.openModal = this.openModal.bind(this)
    // }
    // openModal () {
    //     this.setState({isOpen: true})
    // }
    
    render () {
        const data = useStaticQuery(graphql`
        query {
            allFile(filter: {sourceInstanceName: {eq: "youtube images"}}) {
                edges {
                    node {
                        childImageSharp {
                            fluid (quality: 100) {
                                ...GatsbyImageSharpFluid
                                originalName
                            }
                        }
                    }
                }
            }
            file(name: {eq: "play-button"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        `)
        return (
            <div >
            <div className="flex flex-wrap">
            {data.allFile.edges.map(edge=>
                <div className="video-thumbnail w-full sm:w-1/2 p-2 " onClick={this.openModal}>
                <Img fluid={edge.node.childImageSharp.fluid} alt="Play icon" className="video-image"/>
                <Img fluid={data.file.childImageSharp.fluid} alt="Youtube thumnail" className="play-icon"/>
                </div>)}
                </div>
                {/* <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId="77qEOM_mpQA" onClose={() => this.setState({isOpen: false})} /> */}
                
                </div>
                );
            }
            
            
        }

export default VideosModal;