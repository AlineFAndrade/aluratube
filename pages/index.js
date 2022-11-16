import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomePage = { 
    //backgroundColor: "red" 
  }

  console.log(config.playlists);

   return  ( 
    <>
      <CSSReset />
      <div style={estilosDaHomePage}>
        <Menu/>
        <Header/>
        <Timeline playlists={config.playlists}>
          conteudo
        </Timeline>
      </div>
    </>
  )
}

export default HomePage

// function Menu() {
//   return (
//     <div>
//       Menu
//     </div>
//   )
// }

const StyledHeader = styled.div `
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner"/> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`}/>
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
        
      </section>
      
      
    </StyledHeader>
  )
}

function Timeline(props) {
  console.log("Dentro", props.playlists)
  const playlistNames = Object.keys(props.playlists)
  return (
    <StyledTimeline>
      {playlistNames.map((playlistNames) => {
        const videos = props.playlists[playlistNames]
        return (
          <section>
            <h2>{playlistNames}</h2>
            <div>
              {videos.map((videos) => {
                return (
                  <a href={videos.url}>
                    <img src={videos.thumb}/>
                    <span>
                      {videos.title}
                    </span>
                  </a >
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}