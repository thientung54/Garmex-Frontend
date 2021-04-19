import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    CCard, CCardHeader, CCardBody, CCardFooter, CCol, CRow, CLabel, CForm, CFormGroup, CInput, CFormText, CFade, CButton
} from '@coreui/react'

const UpdateUser = () => {
    const [showElements] = React.useState(true);

    return (
        <>
            <CRow>
                <CCol xs="12">
                    <CFade timeout={300} in={showElements} unmountOnExit={true}>
                        <CCard>
                            <CCardHeader className="bg-secondary" style={{ color: '#000' }}>
                                <h6>Chỉnh sửa người dùng</h6>
                            </CCardHeader>
                            <CCardBody>
                                <CForm action="" method="post">
                                    <CRow>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-id">Id</CLabel>
                                                <CInput
                                                    type="text"
                                                    id="nf-id"
                                                    name="nf-id"
                                                    placeholder=""
                                                    autoComplete="id"
                                                    value="ff8d9763-0173-4c8e-c8c6def11f7e"
                                                    disabled={true}
                                                />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-firstname">Tên <span style={{ color: 'red' }}>*</span></CLabel>
                                                <CInput
                                                    type="text"
                                                    id="nf-firstname"
                                                    name="nf-firstname"
                                                    autoComplete="firstname"
                                                />
                                                <CFormText className="help-block">Vui lòng nhập tên ...</CFormText>
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-lastname">Họ <span style={{ color: 'red' }}>*</span></CLabel>
                                                <CInput
                                                    type="text"
                                                    id="nf-lastname"
                                                    name="nf-lastname"
                                                    autoComplete="lastname"
                                                />
                                                <CFormText className="help-block">Vui lòng nhập họ ...</CFormText>
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-username">Tên đăng nhập <span style={{ color: 'red' }}>*</span></CLabel>
                                                <CInput
                                                    type="text"
                                                    id="nf-username"
                                                    name="nf-username"
                                                    autoComplete="username"
                                                />
                                                <CFormText className="help-block">Vui lòng nhập tên đăng nhập ...</CFormText>
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-email">Email <span style={{ color: 'red' }}>*</span></CLabel>
                                                <CInput
                                                    type="email"
                                                    id="nf-email"
                                                    name="nf-email"
                                                    autoComplete="email"
                                                />
                                                <CFormText className="help-block">Vui lòng nhập email ...</CFormText>
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-password">Mật khẩu <span style={{ color: 'red' }}>*</span></CLabel>
                                                <CInput
                                                    type="password"
                                                    id="nf-password"
                                                    name="nf-password"
                                                    autoComplete="password"
                                                />
                                                <CFormText className="help-block">Vui lòng nhập mật khẩu ...</CFormText>
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-phone">Số điện thoại</CLabel>
                                                <CInput
                                                    type="text"
                                                    id="nf-phone"
                                                    name="nf-phone"
                                                    autoComplete="phone"
                                                />
                                                <CFormText className="help-block"></CFormText>
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-image">Hình ảnh</CLabel>
                                                <CInput
                                                    type="text"
                                                    id="nf-image"
                                                    name="nf-image"
                                                    autoComplete="image"
                                                    value="/"
                                                />
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-user-type">Loại người dùng</CLabel>
                                                <CInput
                                                    type="text"
                                                    id="nf-user-type"
                                                    name="nf-user-type"
                                                    autoComplete="user-type"
                                                />
                                                <CFormText className="help-block"></CFormText>
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-facebook">Facebook</CLabel>
                                                <CInput
                                                    type="text"
                                                    id="nf-facebook"
                                                    name="nf-facebook"
                                                    autoComplete="facebook"
                                                />
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-status">Trạng thái <span style={{ color: 'red' }}>*</span></CLabel>
                                                <CInput
                                                    type="text"
                                                    id="nf-status"
                                                    name="nf-status"
                                                    autoComplete="status"
                                                    value="Chưa kích hoạt"
                                                />
                                                <CFormText className="help-block">Vui lòng chọn hoặc nhập trạng thái ...</CFormText>
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-created-day">Ngày tạo</CLabel>
                                                <CInput
                                                    type="date"
                                                    id="nf-created-day"
                                                    name="nf-created-day"
                                                    placeholder="date"
                                                />
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-creator">Người tạo</CLabel>
                                                <CInput
                                                    type="text"
                                                    id="nf-creator"
                                                    name="nf-creator"
                                                    disabled
                                                />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-edited-day">Ngày chỉnh sửa</CLabel>
                                                <CInput
                                                    type="date"
                                                    id="nf-edited-day"
                                                    name="nf-edited-day"
                                                    placeholder="date"
                                                />
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol xs="12" md="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="nf-editor">Người chỉnh sửa</CLabel>
                                                <CInput
                                                    type="text"
                                                    id="nf-editor"
                                                    name="nf-editor"
                                                    disabled
                                                />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="12" md="6"></CCol>
                                    </CRow>
                                </CForm>
                            </CCardBody>
                            <CCardFooter>
                                <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Gửi đi</CButton>&nbsp;
 <CButton type="cancel" size="sm" color="danger"><CIcon name="cil-ban" /> Bỏ qua</CButton>
                            </CCardFooter>
                        </CCard>
                    </CFade>
                </CCol>
            </CRow>
        </>
    )
}

export default UpdateUser;
