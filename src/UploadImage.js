import ImageDropZone from './ImageDropZone';

const UploadImage = () => {
    return (
        <div className="relative items-center box-border h-96 w-72 p-4 rounded-xl shadow-2xl bg-gray-50 place-self-center">
            <ImageDropZone />
        </div>
    )
}

export default UploadImage;