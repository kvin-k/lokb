import React,{ useState, useEffect }  from "react";
import ModalVideo from 'react-modal-video'
import { graphql, useStaticQuery} from 'gatsby'
import './VideosModal.scss'
import Img from "gatsby-image"


const VideosModal = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [videoId,setVideoId] = useState('')
 
    const openTrue = id=>{
        setVideoId(id)
        setIsOpen({isOpen:true})   
    }

    const openFalse = () =>{
        setVideoId('')
        setIsOpen(false)
    }
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
        <>
        <div className="flex flex-wrap">
        {data.allFile.edges.map(edge=>
            <div className="video-thumbnail w-full sm:w-1/2 p-2 -mb-6" 
            onClick={()=>openTrue(edge.node.childImageSharp.fluid.originalName.split('.').slice(0, -1).join('.'))} >
            <Img fluid={edge.node.childImageSharp.fluid} alt="Youtube thumnail" className="video-image"/>
            <Img fluid={data.file.childImageSharp.fluid} alt="Play icon" className="play-icon"/>
            
            </div>)}
            </div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId={videoId} onClose={openFalse} />
            
            </>
    );
  
}


export default VideosModal;
