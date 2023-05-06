import Layout from "../../hocs/layouts/Layout";
import { ErrorContainer, ErrorTitle } from "../../styles/Errors/Error404";

export default function Error404() {
  return <Layout>
  {/* head Image */}
  <ErrorContainer>

    {/* Error Title */}
    <ErrorTitle>
      404 NOT FOUND
    </ErrorTitle>
   

  </ErrorContainer>
  
  </Layout>
}
