import { useState } from "react";
import { useDropzone } from "react-dropzone"
import { MdUploadFile } from "react-icons/md";

const ImageDropZone = (props) => {
    const [allowUpload, setAllowUpload] = useState(false)
    
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: 'image/jpeg, image/png',
        maxFiles: 1,
        onDropAccepted: () => setAllowUpload(true)
    })

    const imageBlock = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.name} - {file.size} bytes
        </li>
    ))

    const rejectedBlock = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            {file.path}
            <ul>
                {errors.map(e => <li key={e.code}>{e.message}</li>)}
            </ul>
        </li>
    ))

    const infoBlock = rejectedBlock.length > 0 ? (
        <>
            <h4>File Upload Failed</h4>
            <ul>
                {rejectedBlock}
            </ul>
        </>
    ) : (
        <>
            <h4>Selected Image:</h4>
            {imageBlock}
        </>
    )

    return (
        <>
            <div {...getRootProps({className: 'relative flex flex-col p-4 justify-items items-center h-1/2 box-border border-dotted border-gray-400 border-4 rounded-xl'})}>
                <input {...getInputProps()} />
                <p>Drag and drop files here,</p>
                <p>or click to open file browser.</p>
                <div className='flex flex-col p-4 text-gray-400 justify-items-center items-center'>
                    <MdUploadFile size='36'/>
                </div>
            </div>
            <div className='relative flex flex-col p-4 justify-items-center items-center'>
                {infoBlock}
            </div>
            <button disabled={!allowUpload} class="inset-center bottom-4 bg-blue-500 hover:bg-blue-700 disabled:opacity-50 disabled:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Upload
            </button>
        </>
    )
}

export default ImageDropZone;