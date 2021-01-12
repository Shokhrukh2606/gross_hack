import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { useForm, useFieldArray } from "react-hook-form";
import NumberFormat from 'react-number-format';
import { addOneFieldNoData, addNewGarden, addNewWareHouse } from '../../api'
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavLink,
  NavItem,
  Label
} from 'reactstrap';
import { makeAPI } from "../../helpers";

function FieldAddForm(props) {
  const dispatch = useDispatch();

  const {
    register, errors, setValue, control, handleSubmit, reset
  } = useForm({
    defaultValues: {
      crops: [{}]
    }
  });

  const {
    register: registerTwo,
    errors: errorsTwo,
    setValue: setValueTwo,
    control: controlTwo,
    handleSubmit: handleSubmitTwo,
    reset: resetTwo
  } = useForm({
    defaultValues: {
      crops: [{}]
    }
  });
  const {
    register: registerThree,
    errors: errorsThree,
    setValue: setValueThree,
    control: controlThree,
    handleSubmit: handleSubmitThree,
    reset: resetThree
  } = useForm({
    defaultValues: {
      crops: [{}]
    }
  });
  useEffect(() => {
    fieldParams.forEach(({ name }) => {
      if (name == 'inn') {
        register(name, { required: true, maxLength: 9, minLength: 9 });
      } else {
        register(name, { required: true });
      }
    });
    gardenParams.forEach(({ name }) => {
      if (name == 'inn') {
        registerTwo(name, { required: true, maxLength: 9, minLength: 9 });
      } else
        if (name == 'passport') {
          registerTwo(name, { required: false });
        } else {
          registerTwo(name, { required: true });
        }
    });
    warehouseParams.forEach(({ name }) => {
      if (name == 'inn') {
        registerThree(name, { required: true, maxLength: 9, minLength: 9 });
      } else {
        registerThree(name, { required: true });
      }
    });
    const p_id = props.districts.findIndex(item => (item.id == JSON.parse(localStorage.getItem("personnel")).point_id))
    setCityId(p_id)
  }, [register]);
  const { fields, append, prepend, remove } = useFieldArray({
    control,
    name: "crops"
  });
  const [cityID, setCityId] = useState(0)
  const [districtId, setDistrictId] = useState(0)
  const [activeTab, setActiveTab] = useState('1')
  const changeDistrictId = val => (setDistrictId(val))
  const sendForm = formdata => {
    const formWithMap = {
      ...formdata, location: [{
        lat: props.newpoint.lat,
        long: props.newpoint.lng
      }]
    }
    dispatch(addOneFieldNoData(formWithMap, () => {
      reset()
      props.changer()
    }))
  }
  const sendGardenForm = formdata => {
    const formWithMap = {
      ...formdata, location: [{
        lat: props.newpoint.lat,
        long: props.newpoint.lng
      }]
    }

    dispatch(addNewGarden(formWithMap, () => {
      resetTwo()
      props.changer()
    }))
  }
  const sendWareHouse = formdata => {
    const formWithMap = {
      ...formdata, location: [{
        lat: props.newpoint.lat,
        long: props.newpoint.lng
      }]
    }
    console.log(formWithMap)
    dispatch(addNewWareHouse(formWithMap, () => {
      resetThree()
      props.changer()
    }))
  }
  const fieldParams = [
    {
      id: 1,
      name: 'field_name',
      type: 'text',
      placeholder: 'Фермер ҳўжалик номи',
      size: 6
    },
    {
      id: 2,
      name: 'owner',
      type: 'text',
      placeholder: 'Фермер ҳўжалик раҳбари Ф.И.Ш',
      size: 6
    },
    {
      id: 3,
      name: 'phone',
      type: 'text',
      placeholder: 'Телефон рақами',
      size: 6
    },
    {
      id: 4,
      name: 'inn',
      type: 'number',
      placeholder: 'ИНН',
      size: 6
    },
    {
      id: 5,
      name: 'area',
      type: 'number',
      placeholder: 'Дала юзаси',
      size: 6,
      step: 'any'
    }
  ]
  const gardenParams = [
    {
      id: 1,
      name: 'field_name',
      type: 'text',
      placeholder: 'Фермер ҳўжалик номи',
      size: 6
    },
    {
      id: 1,
      name: 'owner',
      type: 'text',
      placeholder: 'Фермер ҳўжалик раҳбари Ф.И.Ш',
      size: 6
    },
    {
      id: 3,
      name: 'passport',
      type: 'text',
      placeholder: 'Фермер ҳўжалик раҳбари паспорт серия',
      size: 12
    },
    {
      id: 3,
      name: 'phone',
      type: 'text',
      placeholder: 'Телефон рақами',
      size: 6
    },
    {
      id: 2,
      name: 'inn',
      type: 'number',
      placeholder: 'ИНН',
      size: 6
    },
    {
      id: 2,
      name: 'area',
      type: 'number',
      placeholder: 'Дала юзаси',
      size: 6,
      step: 'any'
    },
    {
      id: 2,
      name: 'volume',
      type: 'number',
      placeholder: 'Дала хажми',
      size: 6,
      step: 'any'
    }
  ]
  const warehouseParams = [
    {
      id: 1,
      name: 'field_name',
      type: 'text',
      placeholder: 'Фермер ҳўжалик номи',
      size: 6
    },
    {
      id: 1,
      name: 'owner',
      type: 'text',
      placeholder: 'Фермер ҳўжалик раҳбари Ф.И.Ш',
      size: 6
    },
    {
      id: 3,
      name: 'phone',
      type: 'text',
      placeholder: 'Телефон рақами',
      size: 4
    },
    {
      id: 2,
      name: 'inn',
      type: 'number',
      placeholder: 'ИНН',
      size: 4
    },
    {
      id: 2,
      name: 'volume',
      type: 'number',
      placeholder: 'Дала хажми',
      size: 4,
      step: 'any'
    },
    {
      id: 2,
      name: 'area',
      type: 'number',
      placeholder: 'Дала юзаси',
      size: 6,
      step: 'any'
    }
  ]
  const product_type = [
    {
      id: 'quarantine_object',
      name_uz: 'Карантин объекти'
    },
    {
      id: 'grain_product',
      name_uz: 'Дон махсулотлари'
    },
    {
      id: 'cotton_product',
      name_uz: 'Пахта махсулотлари'
    }
  ]

  const cityChange = (event) => {
    const identifier = props.districts.findIndex(item => (item.id == event.target.value))
    setCityId(identifier)
  }
  const tabPane = () => {
    return (
      <>
        <TabPane tabId="1">
          <Form key={1} method="post" action={makeAPI('field/add')} className="row " onSubmit={handleSubmit(data => sendForm(data))}>
            {
              fieldParams.map(({ name, type, placeholder, size, step }, key) => (
                <Col md={`${size}`} key={key}>
                  <FormGroup>
                    {name == 'phone' ? <NumberFormat onValueChange={e => {
                      setValue(name, e.formattedValue, true)
                    }} format="998#########" placeholder="Телефон рақами" className="form-control" /> :
                      <Input type={type} step={step} name={name} placeholder={placeholder} onChange={e => {
                        setValue(name, e.target.value, true);
                      }} />
                    }
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
              ))
            }
            <Col md="6">
                <input type="radio" defaultChecked="checked" name="place_type" value="1" ref={register}/>
                <label>Дала</label>&nbsp;&nbsp;&nbsp;
                <input type="radio"  name="place_type" value="4" ref={register}/>
                <label>Иссиқхона</label>
            </Col>
            <Col md="6">
              <Select name="cities" options={props.cities} selected={props.cities[cityID].id} onChange={(e) => cityChange(e)} />
            </Col>
            <Col md="6" >
              <Select name="district"
                options={[...props.districts[cityID].districts]} selected={districtId} changedHandler={changeDistrictId} register={register} />
            </Col>
            <Col md="12" className="mb-2">
              {fields.map((item, index) => (
                <Row key={index} className="mt-3 mb-3">
                  <Col>

                    <select name={`crops[${index}].seed`} ref={register()} className="form-control">
                      {props.seeds.map((item, index) => (<option key={index} value={item.id}>{item.name_uz}</option>))}
                    </select>
                  </Col>
                  <Col md="6" className="mb-2">
                    <input placeholder="Екилган майдон юзаси" name={`crops[${index}].area_crop`} className="form-control" defaultValue={item.name} ref={register()} />
                  </Col>
                  <Col md="6" className="mb-2">
                    <label>Ўсимлик екилган санаси</label>
                    <input type="date" name={`crops[${index}].sowing_date`} className="form-control" ref={register()} />
                  </Col>
                  <Col md="6" className="mb-2">
                    <label>Ҳосил олиш санаси</label>
                    <input type="date" name={`crops[${index}].harvest_date`} className="form-control" ref={register()} />
                  </Col>
                  <Col>
                    <Button size="sm" onClick={() => remove(index)}><i className="fa fa-minus"></i></Button>
                  </Col>
                </Row>
              ))}
              <Button onClick={() => append()} size="sm" color="info">
                <i className="fa fa-plus"></i> </Button>
            </Col>
            <Col>
              <Button type="submit" size="sm" color="primary" className="float-right"><i className="fa fa-dot-circle-o"></i> Сақлаш</Button>
            </Col>
          </Form>
        </TabPane>
        <TabPane tabId="2">
          <Form key={2} method="post" className="row " action={makeAPI('garden/add')} onSubmit={handleSubmitTwo(data => sendGardenForm(data))}>
            {
              gardenParams.map(({ name, type, placeholder, size, step }, key) => (
                <Col md={`${size}`} key={key}>
                  <FormGroup>
                    {name == 'phone' ? <NumberFormat onValueChange={e => {
                      setValueTwo(name, e.formattedValue, true)
                    }} format="998#########" placeholder="Телефон рақами" className="form-control" /> :
                      <Input type={type} step={step} name={name} placeholder={placeholder} onChange={e => {
                        setValueTwo(name, e.target.value, true);
                      }} />
                    }

                    <span
                      role="alert"
                      id="error-name-maxLength"
                      className="text-danger"
                      style={{
                        display: errorsTwo[name] && errorsTwo[name].type === "minLength"
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
                        display: errorsTwo[name] && errorsTwo[name].type === "required"
                          ? "block"
                          : "none"
                      }}
                    >
                      Бу жой тўлдирилиши шарт
              </span>
                  </FormGroup>
                </Col>
              ))
            }
            <Col md="6">
              <Select name="cities" options={props.cities} selected={props.cities[cityID].id} onChange={(e) => cityChange(e)} />
            </Col>
            <Col md="6" >
              <Select name="district"
                options={[...props.districts[cityID].districts]} selected={districtId} changedHandler={changeDistrictId} register={registerTwo} />
            </Col>
            <Col md="12" className="mb-2">
              {fields.map((item, index) => (
                <Row key={index} className="mt-3 mb-3">
                  <Col>

                    <select name={`crops[${index}].seed`} ref={registerTwo()} className="form-control">
                      {props.seeds.map((item, index) => (<option key={index} value={item.id}>{item.name_uz}</option>))}
                    </select>
                  </Col>
                  <Col md="6" className="mb-2">
                    <input placeholder="Екилган майдон юзаси" name={`crops[${index}].area_crop`} className="form-control" defaultValue={item.name} ref={registerTwo()} />
                  </Col>
                  <Col>
                    <Button size="sm" onClick={() => remove(index)}><i className="fa fa-minus"></i></Button>
                  </Col>
                </Row>
              ))}
              <Button onClick={() => append()} size="sm" color="info">
                <i className="fa fa-plus"></i> </Button>
            </Col>
            <Col>
              <Button type="submit" size="sm" color="primary" className="float-right"><i className="fa fa-dot-circle-o"></i> Сақлаш</Button>
            </Col>
          </Form>
        </TabPane>
        <TabPane tabId="3">
          <Form key={3} method="post" className="row " action={makeAPI('warehouse/add')} onSubmit={handleSubmitThree(data => sendWareHouse(data))} >
            {
              warehouseParams.map(({ name, type, placeholder, size, step }, key) => (
                <Col md={`${size}`} key={key}>
                  <FormGroup>
                    {name == 'phone' ? <NumberFormat mask="_" onValueChange={e => {
                      setValueThree(name, e.formattedValue, true)
                    }} format="998#########" placeholder="Телефон рақами" className="form-control" /> :
                      <Input type={type} step={step} name={name} placeholder={placeholder} onChange={e => {
                        setValueThree(name, e.target.value, true);
                      }} />
                    }

                    <span
                      role="alert"
                      id="error-name-maxLength"
                      className="text-danger"
                      style={{
                        display: errorsThree[name] && errorsThree[name].type === "minLength"
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
                        display: errorsThree[name] && errorsThree[name].type === "required"
                          ? "block"
                          : "none"
                      }}
                    >
                      Бу жой тўлдирилиши шарт
              </span>
                  </FormGroup>
                </Col>
              ))
            }
            <Col md="6">
              <Select name="cities" options={props.cities} selected={props.cities[cityID].id} onChange={(e) => cityChange(e)} />
            </Col>
            <Col md="6" >
              <Select name="district"
                options={[...props.districts[cityID].districts]} selected={districtId} changedHandler={changeDistrictId} register={registerThree} />
            </Col>
            <Col md="6" >
              <Select name="product_type"
                options={product_type} register={registerThree} changedHandler={(e) => setValueThree('product_type', e, true)} />
            </Col>
            <Col>
              <Button type="submit" size="sm" color="primary" className="float-right"><i className="fa fa-dot-circle-o"></i> Сақлаш</Button>
            </Col>
          </Form>
        </TabPane>
      </>
    );
  }
  const Select = ({ register, options, name, selected, changedHandler, ...rest }) => {
    return (
      <select className="form-control" name={name} onChange={(e) => (changedHandler(e.target.value))} defaultValue={selected} ref={register} {...rest}  >
        <option value={0}>Танланг</option>
        {options.map((item, index) => {
          return <option key={index} value={item.id}>{item.name_uz}</option>
        })}
      </select>
    );
  }
  return (
    <Row>
      <Col>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={activeTab === '1'}
              onClick={() => { setActiveTab('1'); }}
            >
              Боғ(Мевали дарахтлар)
                </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === '2'}
              onClick={() => { setActiveTab('2'); }}
            >
              Боғ(Манзарали дарахтлар)
                </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === '3'}
              onClick={() => { setActiveTab('3'); }}
            >
              Омборхона

                </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          {tabPane()}
        </TabContent>
      </Col>
    </Row>
  );
}
export default FieldAddForm;
{/* <form onSubmit={handleSubmit(data => console.log("data", data))}>
<section>

</section>
</form> */}
