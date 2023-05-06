import { connect } from "react-redux";
import NavBar from "../../components/Navigation/NavBar";
import { Container } from "../../styles/Lavout.style";

function Layout({children}) {
  return (
    <Container>
      <NavBar/>
      {children}
    </Container>
  )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

}) (Layout)

