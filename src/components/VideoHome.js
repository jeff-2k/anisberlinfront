import Video from '../components/video/header--anis-16x9-v2.mp4'

function VideoHome (){
    return (
    <video autoPlay loop muted 
            style={{
              position: "relative",
              width: "100%", 
              maxHeigth: "30%",
              objectFit: "contain",
              zIndex: "1"
         }}>
        <source src={Video} type="video/mp4" />
    </video>
    )
}


export default VideoHome

    