import { Form } from "react-bootstrap"

const FormGroup = (props) => {


  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>{props.children}</Form.Label>
        <Form.Control type={props.type} as={props.as} rows={props.rows} placeholder={props.placeholder} name={props.name} onChange={props.onChange} />
      </Form.Group>
    </>
  )
}

export default FormGroup;