import React from 'react';
import { CButton } from '@coreui/react';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { CCard, CCardHeader, CCardBody, CCardFooter, } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { useHistory } from 'react-router-dom';
import { statusModels } from "common/constant";
import InputField from 'common/components/inputField';
import SelectField from 'common/components/selectField';

RoleForm.propTypes = {
    onSubmit: PropTypes.func,
};
RoleForm.defaultProps = {
    onSubmit: null,
}


function RoleForm(props) {
    const history = useHistory();
    const { initialValues, isAddMode } = props;
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Trường này bắt buộc.'),
        status: Yup.string().required('Trường này bắt buộc.'),
    });


    return (
        <Formik enableReinitialize initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                //const { values, errors, touched } = formikProps;
                //console.log('RoleForm', { values, errors, touched, formikProps });
                return (
                    <Form>
                        <CCard>
                            <CCardHeader className="bg-info" style={{ color: '#000' }}>
                                <h6>Quản lý quyền</h6>
                            </CCardHeader>
                            <CCardBody>
                                <FastField
                                    name="name"
                                    component={InputField}

                                    label="Tên quyền"
                                    placeholder="Ex: IT Admin ..."
                                />
                                <FastField
                                    name="status"
                                    component={SelectField}

                                    label="Trạng thái"
                                    placeholder="Vui lòng chọn trạng thái!"
                                    options={statusModels}
                                    isRequired
                                />
                            </CCardBody>
                            <CCardFooter className="btn-md-width">
                                <CButton type="submit" size="sm" color={isAddMode ? 'info' : 'success'}>
                                    <CIcon name="cil-scrubber" /> {isAddMode ? 'Thêm mới' : 'Cập nhật'}</CButton>&nbsp;
                                <CButton type="cancel" size="sm" color="danger" onClick={() => history.push(`/roles`)}><CIcon name="cil-ban" /> Bỏ qua</CButton>
                            </CCardFooter>
                        </CCard>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default RoleForm;