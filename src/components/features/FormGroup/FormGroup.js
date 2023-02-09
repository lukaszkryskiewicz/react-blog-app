import { Form } from "react-bootstrap"

const FormGroup = (props) => {

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>{props.children}</Form.Label>
        <Form.Control {...props.register(props.name, {
          required: true,
          minLength: ((props.name === 'title' || props.name === 'author') ? 3 :
            ((props.name === 'shortDescription') ? 20 : 0))
        })}
          type={props.type} as={props.as} rows={props.rows} placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onChange} />
        {props.errors[props.name] && <small className="d-block form-text text-danger mt-2">{props.name} text is to short (min is {((props.name === 'title' || props.name === 'author') ? 3 :
          ((props.name === 'shortDescription') ? 20 : 0))})</small>}
      </Form.Group>
    </>
  )
}

export default FormGroup;