import Layout from "../../hocs/layouts/Layout";

export default function Contact() {
  return (
    <Layout>
      {/* Container  */}
      <div className="container">
        {/* Title  */}
        <h1 className="title">Contact</h1>
        {/* Images */}
        <div className="images">
          {/* Image 1 */}
          <img src="https://img.freepik.com/vector-gratis/lindo-astronauta-flotando-globo-planeta-ilustracion-icono-vector-dibujos-animados-espacio-concepto-icono-ciencia-tecnologia-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3850.jpg" />
          {/* Image 2 */}
          <img src="https://img.freepik.com/vector-gratis/lindo-astronauta-flotando-globo-planeta-ilustracion-icono-vector-dibujos-animados-espacio-concepto-icono-ciencia-tecnologia-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3850.jpg" />
        </div>
        {/* Content  */}
        <div className="content">
          {/* Email */}
          <div>
            <input type="text" placeholder="email" />
          </div>
          {/* Message */}
          <div>
            <input type="text" placeholder="message" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
