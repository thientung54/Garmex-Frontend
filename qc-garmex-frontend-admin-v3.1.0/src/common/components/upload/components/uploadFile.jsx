import React, { useEffect, useState, useRef } from "react";
import { CProgress, CForm, CFormGroup, CInputFile, CLabel } from '@coreui/react';
import { v4 as uuidv4 } from "uuid";
import { chunkUploadAction, createUploadAction } from '../uploadAction';
import { useSelector, useDispatch } from 'react-redux';
import { toastr } from 'react-redux-toastr';


const chunkSize = 1048576 * 3; //its 3MB, increase the number measure in mb

function UploadFile() {
    const dispatch = useDispatch();

    const [uploadedChunk, setUploadedChunk] = useState(false);
    const [uploadedCreate, setUploadedCreate] = useState(false);
    const [urlFile, setUrlFile] = useState(null);
    const [showProgress, setShowProgress] = useState(false);
    const [counter, setCounter] = useState(1);
    const [fileToBeUpload, setFileToBeUpload] = useState({});
    const [beginingOfTheChunk, setBeginingOfTheChunk] = useState(0);
    const [endOfTheChunk, setEndOfTheChunk] = useState(chunkSize);
    const [progress, setProgress] = useState(0);
    const [fileName, setFileName] = useState("");
    const [fileSize, setFileSize] = useState(0);
    const [fileType, setFileType] = useState("");
    const [chunkCount, setChunkCount] = useState(0);
    const progressInstance = (<CProgress animated value={progress} showPercentage className="mb-3" />);
    const formRef = useRef(null);



    const chunkUpload = useSelector(state => {
        console.log('useSelector chunkUploadAction run!!!');
        if (state.chunkReducer && state.chunkReducer.responseData) {
            return state.chunkReducer.responseData;
        }
    });
    const createUpload = useSelector(state => {
        console.log('useSelector createUploadAction run!!!');
        if (state.createReducer && state.createReducer.responseData && state.createReducer.responseData.response) {
            return state.createReducer.responseData.response;
        }
    });


    useEffect(() => {
        console.log('useEffect counter', counter)
        const init = () => {
            if (fileSize > 0 && progress < 100) {
                setShowProgress(true);
                fileUpload(counter);
            }
        };

        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fileToBeUpload, progress]);

    const resetChunkProperties = () => {
        setShowProgress(true)
        setProgress(0)
        setCounter(1)
        setBeginingOfTheChunk(0)
        setEndOfTheChunk(chunkSize)
        setUrlFile(null)
    }

    const getFileContext = (e) => {
        console.log('getFileContext');
        resetChunkProperties();
        if (e.target.files.length !== 0) {
            const _file = e.target.files[0];
            setFileSize(_file.size);
            setFileType(_file.type);
            let _totalCount =
                _file.size % chunkSize === 0
                    ? _file.size / chunkSize
                    : Math.floor(_file.size / chunkSize) + 1; // Total count of chunks will have been upload to finish the file
            if (_totalCount === 1) _totalCount = 2;
            setChunkCount(_totalCount);
            setFileToBeUpload(_file);
            const _fileName = uuidv4() + "." + _file.name.split(".").pop();
            setFileName(_fileName);
        }
    };

    const fileUpload = () => {
        setCounter(counter + 1);
        if (counter <= chunkCount) {
            var chunk = fileToBeUpload.slice(beginingOfTheChunk, endOfTheChunk);
            dispatch(chunkUploadAction({ chunk, fileName: fileName + counter, }));
            setUploadedChunk(true)
        }
    };


    //console.log('----------Redux change ----------', { chunkUpload, createUpload });
    if (chunkUpload && chunkUpload.value && chunkUpload.value.success && uploadedChunk) {
        setBeginingOfTheChunk(endOfTheChunk);
        setEndOfTheChunk(endOfTheChunk + chunkSize);
        if (counter === chunkCount) {
            //console.log("===Process is complete, counter===", counter);
            dispatch(createUploadAction({ "name": fileName, "type": fileType.split('/')[0] }));
            setUploadedCreate(true);
            setUploadedChunk(false);
        } else if (counter < chunkCount) {
            var percentage = (counter / chunkCount) * 100;
            setProgress(percentage);
            setUploadedChunk(false);
        }
    } else if (chunkUpload && chunkUpload.status === 500) {
        toastr.error('Chuck upload fail!', 'Lỗi 500: Có lỗi xảy ra từ phía server.');
    }
    else if (createUpload && createUpload.success && uploadedCreate) {
        setUploadedCreate(false);
        setUploadedChunk(false);
        setProgress(100);
        setFileSize(0);
        setTimeout(() => {
            setShowProgress(false);
            formRef.current.reset();
        }, 1000);
        if (createUpload.data && createUpload.data.path) {
            const url = createUpload.data.path.toLowerCase();
            if (url.includes('.png') || url.includes('.jpg') || url.includes('.jpe') || url.includes('.jfi') || url.includes('.jif') || url.includes('.bmp') || url.includes('.webp') || url.includes('.gif') || url.includes('.svg')) {
                setUrlFile({ isImage: true, url: createUpload.data.path });
            } else {
                setUrlFile({ isImage: false, url: createUpload.data.path });
            }
        }
    }


    return (
        <CForm innerRef={formRef}>
            <CFormGroup>
                <CLabel>Chọn file cần upload</CLabel>
                <CInputFile id="FormControlFile"
                    onChange={getFileContext} label="Chọn tệp bạn muốn tải lên!" />
            </CFormGroup>
            <CFormGroup style={{ display: showProgress ? "block" : "none" }}>
                {progressInstance}
            </CFormGroup>
            <CFormGroup className={urlFile ? '' : 'invisible'}>
                <img src={urlFile ? urlFile.url : ''} alt="upload" className={urlFile && urlFile.isImage ? 'img-thumbnail' : 'invisible'} width="200px" />
                <p className={urlFile && urlFile.isImage ? 'invisible' : ''}>{urlFile ? urlFile.url : null}</p>
            </CFormGroup>
        </CForm>
    );
}
export default UploadFile;