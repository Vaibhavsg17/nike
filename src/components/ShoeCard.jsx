
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    return (
        <div className={`border-2 rounded-xl 
        ${bigShoeImg === imgURL.bigShoe1
                ? 'border-coral-red'
                : 'border-transparent'
            } cursor-pointer max-sm:flex-1`}
            onclick={handleClick}>
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 sm:w-40 rounded-xl max-sm:p-4">
                <img src={imgURL.thumbnail} alt="shoe collection" width={127} height={103} className="object-contian" />
            </div>
        </div>
    )
}

export default ShoeCard
