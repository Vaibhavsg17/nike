const Button = ({ label, iconURL, backgroundcolor, textcolor, bordercolor, fullWidth }) => {
    return (
        <button className={`flex justify-cetner items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
            ${backgroundcolor
                ? `${backgroundcolor} ${textcolor} ${bordercolor}`
                : "bg-coral-red text-white border-coral-red"
            } rounded-full ${fullWidth && 'w-full'}'}`}>
            {label}
            {iconURL && < img src={iconURL} alt="ArrowRight icon" className="ml-2 rounded-full w-5 h-5" />}
        </button>
    )
}

export default Button
