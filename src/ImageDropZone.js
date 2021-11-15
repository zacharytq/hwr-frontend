import { useDropzone } from "react-dropzone"
import { MdUploadFile } from "react-icons/md";

const ImageDropZone = (props) => {
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: 'image/jpeg, image/png',
        maxFiles: 1
    })

    const image = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.name} - {file.size} bytes
        </li>
    ))

    const rejected = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            {file.path}
            <ul>
                {errors.map(e => <li key={e.code}>{e.message}</li>)}
            </ul>
        </li>
    ))

    const infoBlock = rejected.length > 0 ? (
        <>
            <h4>File Upload Failed</h4>
            <ul>
                {rejected}
            </ul>
        </>
    ) : (
        <>
            <h4>Selected Image:</h4>
            {image}
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
            <button class="inset-center bottom-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Upload
            </button>
        </>
    )
}

export default ImageDropZone;