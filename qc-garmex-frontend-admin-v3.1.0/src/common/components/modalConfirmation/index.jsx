import React from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

const ModalConfirmation = (props) => {
    const { showModal, handleShowModal } = props;
    const { isShow, content } = showModal;
    const colorModal = content === 'xóa' ? 'danger' : 'warning';
    return (
        <CModal
            show={isShow}
            onClose={() => handleShowModal(false)}
            color={colorModal}
        >
            <CModalHeader closeButton>
                <CModalTitle>Xác nhận thông tin!</CModalTitle>
            </CModalHeader>
            <CModalBody>
                Bạn có chắc chắn muốn {content} không?
              </CModalBody>
            <CModalFooter>
                <CButton color={colorModal} onClick={() => handleShowModal(true)}>Đồng ý</CButton>{' '}
                <CButton color="secondary" onClick={() => handleShowModal(false)}>Hủy bỏ</CButton>
            </CModalFooter>
        </CModal>
    )
}

export default ModalConfirmation
