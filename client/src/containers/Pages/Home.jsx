import {
  ButtonStyle,
  Container,
  GreetingContainer,
  Image,
  PrincipalImage,
  Subtitle,
  Title,
} from "../../styles/pages/Home.style";
import Layout from "../../hocs/layouts/Layout";
import foreground from "../../assets/img/png/home_foreground.png";
import { useNavigate } from "react-router-dom";

ButtonStyle;

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Container>
        <GreetingContainer>
          {/* Title */}
          <Title className="title">
            <h2>DISCOVER YOUR FAVORITES GAMES</h2>
          </Title>
          {/* Subtitle */}
          <Subtitle>
            <p>The perfect search for video game lovers.</p>
          </Subtitle>
          {/* Button Search */}

          <ButtonStyle
            onClick={() => {
              navigate("/search");
            }}
          >
            SEARCH NOW
          </ButtonStyle>

          {/* Foreground */}
        </GreetingContainer>
        <PrincipalImage className="image">
          <Image src={foreground} alt="home" />
        </PrincipalImage>
      </Container>
    </Layout>
  );
}

/*

*/
