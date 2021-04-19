import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cilTrash } from '@coreui/icons';
import { CLink, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { getAllFilesAction, deleteFileAction } from '../fileAction';
import CIcon from '@coreui/icons-react';
import OverLoading from 'common/components/overLoading/index';
import LoadingOverlay from 'react-loading-overlay';
import { toastr } from 'react-redux-toastr';
import ModalConfirmation from 'common/components/modalConfirmation';
import { removeItem } from 'common/utilities/handelArray';
import UploadFile from 'common/components/upload/components/uploadFile';
import Images from "assets/images/images";
import '../style.scss'



function ListOfFiles() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState({ isShow: false, content: '' })
    const [deleted, setDeleted] = useState(false);
    const [idFile, setIdFile] = useState('');


    const getAllFiles = useSelector(state => {
        console.log('useSelector getAllFiles run!!!');
        return state.getAllFilesReducer;
    });
    const deleteFile = useSelector(state => {
        console.log('useSelector deleteFile run!!!');
        return state.deleteFileReducer;
    });

    useEffect(() => {
        console.log('useEffect run!!!');
        dispatch(getAllFilesAction());
    }, [dispatch]);



    const handleItemInModal = (id, content) => {
        setShowModal({ isShow: true, content: content });
        setIdFile(id);
        setDeleted(false);
        console.log('handleItemInModal run!!!');
    }
    const handleShowModal = (val) => {
        console.log('handleShowModal', val, idFile)
        if (val) {
            if (showModal.content === 'xóa') {
                setDeleted(true);
                dispatch(deleteFileAction(idFile));
            }
        }
        setShowModal(false);
    }


    console.log('----------Redux change ----------', { getAllFiles, deleteFile, deleted });
    const { isLoading, responseData } = getAllFiles;
    let records = responseData && responseData.data ? responseData.data.records : [];
    if (deleted) {
        if (deleteFile && deleteFile.responseData && deleteFile.responseData.success) {
            toastr.success('Xóa tập tin!', 'Xóa thông tin thành công.');
            removeItem(records, idFile);
        } else if (deleteFile && deleteFile.responseData && deleteFile.success === false) {
            toastr.error('Xóa tập tin!', deleteFile.message);
        }
    }


    if (isLoading) return <OverLoading active={isLoading} color="#52B4EF" background="rgba(22, 22, 22, 0.095)" />;
    else return (
        <LoadingOverlay active={deleteFile.isLoading} spinner text='Deleting ...'>
            <CRow>
                <CCol xl={12}>
                    <CCard>
                        <CCardHeader>
                            <b>Danh sách tập tin</b>
                            <UploadFile />
                        </CCardHeader>
                        <CCardBody>
                            <CRow className="margin-btm-15">
                                {records.map((item, idx) => {
                                    if (item.type === 'Image')
                                        return <CCol key={idx} md={4}>
                                            <div className="box-file">
                                                <CLink onClick={() => handleItemInModal(item.id, 'xóa')} title="Click để xóa tập tin">
                                                    <CIcon className="mx-1" content={cilTrash} />
                                                </CLink>
                                                <img src={item.path} alt="upload" width="100%" />
                                            </div>
                                        </CCol>
                                    else if (item.type === 'Video')
                                        return <CCol key={idx} md={4}>
                                            <div className="box-file">
                                                <CLink onClick={() => handleItemInModal(item.id, 'xóa')} title="Click để xóa tập tin">
                                                    <CIcon className="mx-1" content={cilTrash} />
                                                </CLink>
                                                <video width="100%" controls>
                                                    <source src={item.path} type="video/mp4" />
                                            Your browser does not support the video element.
                                        </video>
                                            </div>
                                        </CCol>
                                    else if (item.type === 'Audio')
                                        return <CCol key={idx} md={4}>
                                            <div className="box-file">
                                                <CLink onClick={() => handleItemInModal(item.id, 'xóa')} title="Click để xóa tập tin">
                                                    <CIcon className="mx-1" content={cilTrash} />
                                                </CLink>
                                                <audio width="100%" controls><source src={item.path} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                        </audio>
                                            </div>
                                        </CCol>
                                    else
                                        return <CCol key={idx} md={4}>
                                            <div className="box-file">
                                                <CLink onClick={() => handleItemInModal(item.id, 'xóa')} title="Click để xóa tập tin">
                                                    <CIcon className="mx-1" content={cilTrash} />
                                                </CLink>
                                                <img src={Images.FILE_ICON} alt="upload" width="100%" />
                                            </div>
                                        </CCol>
                                })}

                            </CRow>
                        </CCardBody>
                    </CCard>
                </CCol>
                <ModalConfirmation showModal={showModal} handleShowModal={(val) => handleShowModal(val)} />
            </CRow>
        </LoadingOverlay>
    )
}
export default ListOfFiles;