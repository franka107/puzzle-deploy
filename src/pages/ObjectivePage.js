import { Row, Col, Button } from 'reactstrap'

export default function ObjectivePage() {
  return (
    <div className="introduction">
      <Row>
        <Col className="padding-objetive">
          <div className="d-flex">
            <h2 className="mx-auto">Objetivos</h2>
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </Col>
        <Col className="padding-objetive">
          <div className="d-flex">
            <h2 className="mx-auto">Reglas</h2>
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </Col>
      </Row>
      <div className="d-flex">
        <Button color="primary" className="mx-auto border-button my-3">
          Siguiente
        </Button>
      </div>
    </div>
  )
}
