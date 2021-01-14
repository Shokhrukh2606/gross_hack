<Col md="12">
        <legend>Резидент</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="TB_REZIDENT" innerRef={register} />{' '}
            Да
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="TB_REZIDENT" innerRef={register} />{' '}
            Нет
           </Label>
        </FormGroup>
      </Col>
<>
{label ? 
<Col xs="12"><Label>{label}</Label></Col> : ''}
<Col md={`${size}`} key={key}>
  <FormGroup>
    <Input bsSize="sm"  type={type} step={step} name={name} placeholder={placeholder} onChange={e => {
      setValue(name, e.target.value, true);
    }} />
    {/* {name == 'phone' ? <NumberFormat onValueChange={e => {
    setValue(name, e.formattedValue, true)
  }} format="998#########" placeholder="Телефон рақами" className="form-control" /> :
    <Input type={type} step={step} name={name} placeholder={placeholder} onChange={e => {
      setValue(name, e.target.value, true);
    }} />
  } */}
    <span
      role="alert"
      id="error-name-maxLength"
      className="text-danger"
      style={{
        display: errors[name] && errors[name].type === "minLength"
          ? "block"
          : "none"
      }}
    >
          Бу жой 9 та рақамдан иборат болиши шарт
</span>
    <span
      role="alert"
      id="error-name-required"
      className="text-danger"
      style={{
        display: errors[name] && errors[name].type === "required"
          ? "block"
          : "none"
      }}
    >
          Бу жой тўлдирилиши шарт
</span>
  </FormGroup>
</Col>
</>