import React, { useEffect, useState } from "react";
// import { useDispatch } from 'react-redux'
import { useForm, useFieldArray } from "react-hook-form";
import NumberFormat from 'react-number-format';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Label
} from 'reactstrap';
const { ipcRenderer } = window.require('electron');
// const electron = window.require('electron');
// const ipcRenderer = electron.ipcRenderer
function Create(props) {
  // const dispatch = useDispatch();
  const {
    register, errors, setValue, control, handleSubmit, reset
  } = useForm();
  const sendForm = (data) => {
    console.log(data)
    console.log(ipcRenderer)
    ipcRenderer.send("client_create", data)
  }
  useEffect(() => {
    ipcRenderer.on('client_saved', (event, came) => {
      reset()
    });
  }, [])
  const Select = ({ register, options, name, changedHandler, ...rest }) => {
    return (
      <select className="form-control input-sm" name={name} onChange={(e) => (changedHandler(e.target.value))} ref={register} {...rest}  >
        <option value={0}>Танланг</option>
        {options.map((item, index) => {
          return <option key={index} value={item.val}>{item.label}</option>
        })}
      </select>
    );
  }
  const validator = (input_name) => (<span
    role="alert"
    className="text-danger"
    style={{
      display: errors[input_name] && errors[input_name].type === "required"
        ? "block"
        : "none"
    }}
  >
    Бу жой тўлдирилиши шарт
  </span>)
  return (
    <Form method="post" action="#" className="mt-5" onSubmit={handleSubmit(data => sendForm(data))}>
      <div className="row">
        <label >Резидент</label>
        <div className="col-12 form-check">
          <input ref={register({ required: true })} className="form-check-input" type="radio" name="TB_REZIDENT" value="option1" />
          <label className="form-check-label">
            Да
        </label>
        </div>
        <div className="col-12 form-check">
          <input ref={register({ required: true })} className="form-check-input" type="radio" name="TB_REZIDENT" value="0" />
          <label className="form-check-label">
            Нет
        </label>
        </div>
        {/* <div className="col-12 form-check">
          <label className="form-check-label">Да</label>
          <input ref={register({ required: true })} type="radio" className="form-check-input" name="TB_REZIDENT" value="1" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="form-check-label">Нет</label>&nbsp;
                <input type="radio" className="form-check-input" name="TB_REZIDENT" value="0" />
        </div> */}
      </div>
      <div className="row">
        <div className="col-4">
          <label >ИНН</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" max="999999999" name="TB_ORGINN" type="number" />
          {validator('TB_ORGINN')}
        </div>
        <div className="col-8">
          <label >Наименование организации</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_ORGNAME" type="text" />
          {validator('TB_ORGNAME')}
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label >ОКОНХ</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" maxLength="5" name="TB_KOD_OKONX" type="number" />
          {validator('TB_KOD_OKONX')}
        </div>
        <div className="col-8">
          <label >ОКЕД</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" maxLength="5" name="TB_KOD_OKED" type="number" />
          {validator('TB_KOD_OKED')}
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label >МФО</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" maxLength="5" name="TB_ORGMFO" type="number" />
          {validator('TB_ORGMFO')}
        </div>
        <div className="col-4">
          <label >Банк</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_ORGBANK" type="text" />
          {validator('TB_ORGBANK')}
        </div>
        <div className="col-4">
          <label >Расчётный счёт</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_ORGSCHET" type="number" />
          {validator('TB_ORGSCHET')}
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label >ОКПО</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_KOD_OKPO" type="number" />
          {validator('TB_KOD_OKPO')}
        </div>
        <div className="col-8">
          <label >СОАТО</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_KOD_SOATO" type="text" />
          {validator('TB_KOD_SOATO')}
        </div>
      </div>
      <div className="row from-group">
        <div className="col-4"><br />
          <label >Директор</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_DIREKTOR" type="text" />
          {validator('TB_DIREKTOR')}
        </div>
        <div className="col-8"><br />
          <label >Бухгалтер</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_BUHGALTER" type="text" />
          {validator('TB_BUHGALTER')}
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label >Действует на основании</label>
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_BASIS" type="text" />
          {validator('TB_BASIS')}
        </div>
        <div className="col-8 form-check">
          <input className="form-check-input" ref={register} type="checkbox" name="TB_ORGBANK" value="1" />
          <label className="form-check-label">
            Банк
            </label>
          {validator('TB_ORGBANK')}
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label >Страна</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_COUNTRY" type="text" />
          {validator('TB_COUNTRY')}
        </div>
        <div className="col-3">
          <label >Область</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_OBLAST" type="text" />
          {validator('TB_OBLAST')}
        </div>
        <div className="col-3">
          <label >Район/город</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_RAYON" type="text" />
          {validator('TB_RAYON')}
        </div>
        <div className="col-3">
          <label >Улица/Квартал</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_ULICA" type="text" />
          {validator('TB_ULICA')}
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label >Дом</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_DOM" type="text" />
          {validator('TB_DOM')}
        </div>
        <div className="col-3">
          <label >Квартира</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_KV" type="text" />
          {validator('TB_KV')}
        </div>
        <div className="col-3">
          <label >E-mail</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_EMAIL" type="text" />
          {validator('TB_EMAIL')}
        </div>
        <div className="col-3">
          <label >Сайт</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_SITE" type="text" />
          {validator('TB_SITE')}
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label >Почтовый индекс</label><br />
          <input ref={register({ required: true })} className="form-control input-sm" name="TB_POCHTA" type="text" />
          {validator('TB_POCHTA')}
        </div>
        <div className="col-3">
          <label >Телефон 1</label><br />
          <input ref={register({ required: true })} className="form-control phone" name="TB_PHONE1" type="text" />
          {validator('TB_PHONE1')}
        </div>
        <div className="col-3">
          <label >Телефон 2</label><br />
          <input ref={register({ required: true })} className="form-control phone" name="TB_PHONE2" type="text" />
          {validator('TB_PHONE2')}
        </div>
        <div className="col-3">
          <label >Факс</label><br />
          <input ref={register({ required: true })} className="form-control phone" name="TB_FAX" type="text" />
          {validator('TB_FAX')}
        </div>
      </div>
      <button className="btn btn-success btn-sm float-right my-3" type="submit">Сохранить</button>
      {/* <Col md="6" >
        <Select name="district"
          options={[...props.districts[cityID].districts]} selected={districtId} changedHandler={changeDistrictId} register={register} />
      </Col> */}
      {/* <Col>
        <Button type="submit" size="sm" color="primary" className="float-right"><i className="fa fa-dot-circle-o"></i> Сақлаш</Button>
      </Col> */}
    </Form>
  );
}
export default Create;
{/* <form onSubmit={handleSubmit(data => console.log("data", data))}>
<section>

</section>
</form> */}
