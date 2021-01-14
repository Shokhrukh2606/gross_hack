import React from 'react';
const List = () => {
    const { clients } = useSelector(
        state => ({
            clients: state.clients.all
        })
    );
    const columns = [
        {
            title: 'Фермер хўжалик рақами',
            dataIndex: 'id',
            filtered: true,
            filteredIndex: 'id',
            onBlur: (gotVal, key) => onFilter(gotVal, key)
        }
    ];
    return (
        <div className="animated fadeIn fields-table-page">
            <Row>
                <Col xs="12" lg="12">
                    <Card className="fields-table">
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Далалар хақида маълумот
                <Button className="pull-right mr-3 text-white" onClick={onExport} color="warning">Excel formatda yuklab olish <i className="text-white fa fa-download" /></Button>
                        </CardHeader>
                        <CardBody>
                            <Preloader loading={infoLoading || loading || downloading}>
                                <MyTable columns={columns} data={fields} />
                            </Preloader>
                            {/* <Pagination
                                activePage={routeParams.page ? parseInt(routeParams.page) : 1}
                                itemsCountPerPage={Math.ceil(count / total)}
                                totalItemsCount={count}
                                pageCount={total}
                                pageRangeDisplayed={7}
                                itemClass={`page-item`}
                                linkClass={`page-link`}
                                onChange={(p) => onPageChange(p)}
                            /> */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default List;
