import Layout from "../../hocs/layouts/Layout";
import pacman from "../../assets/img/png/pacman.png";
import joel from "../../assets/img/png/joel.png";
import youwin from "../../assets/img/png/youwin.png";
import tetris from "../../assets/img/png/tetris.png";
import cup from "../../assets/img/png/cup.png";
import tvretro from "../../assets/img/png/tvretro.png";
import {
  AboutContainer,
  AboutDescription,
  AboutProfile,
  AboutTitle,
  Description,
  PacmanImage,
  PrincipalContainer,
  ProfileContainer,
  Title,
  TitleContainer,
} from "../../styles/pages/About.style";

export default function About() {
  return (
    <Layout>
      <div className="container">
        {/* Title */}
        <AboutTitle>About</AboutTitle>

        <PrincipalContainer>
          <TitleContainer>
            {/* Pacman Image */}
            <PacmanImage src={pacman} height="120px" />

            {/* Name  */}
            <Title>JOEL VEGAS FULL STACK DEVELOPER</Title>
          </TitleContainer>

          {/* Photo */}
          <AboutProfile>

          <ProfileContainer>
            {/* Profile Photo */}
            <img src={joel} height="400px"/>
            {/* You win Photo */}
            <img src={youwin} height="300px" />
          </ProfileContainer>
          <AboutContainer>
            {/* Description */}
            {/* pharagraf 1 */}
            <AboutDescription>
            <Description>
              Hi, I'm Joel, a Full Stack Developer with almost 2 years of experience building web and mobile applications. I'm all
              about crafting innovative solutions and collaborating with teams
              to achieve outstanding results.
            </Description>
            {/* Image 1 */}
            <img src={tetris} height="200px"/>
            </AboutDescription>
            {/* pharagraf 2 */}
            <AboutDescription>

            <img src={cup} height="200px" />
            <Description>
              Throughout my career, I've worked with a diverse range of
              technologies, allowing me to provide comprehensive solutions to
              any project. I'm also a stickler for design and usability, so I'll
              always be focused on creating top- notch user experiences.
            </Description>
            {/* Image 2 */}
            </AboutDescription>
            <AboutDescription>
            {/* pharagraf 3 */}
            <Description>
              If you're looking for a developer who's dedicated to delivering
              high- quality work and fostering a strong team dynamic, get in
              touch with me. I'd love to help take your project to the next
              level.
            </Description>
            {/* Image 3 */}
            <img src={tvretro} height="200px"/>
            </AboutDescription>
          </AboutContainer>
          </AboutProfile>
              

        </PrincipalContainer>
      </div>
    </Layout>
  );
}
