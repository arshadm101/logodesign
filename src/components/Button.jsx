const Button = ({
    handle,
    text,
    width = "w-full",
    height = "h-[41px]",
    bg = "bg-white",
    color = "text-white",
    border = "border-2",
    css,
    disabled = false,
    rounded = "rounded-full",
    fontWeight = "font-extrabold"
}) => {
    return (
        <button
            type="button"
            onClick={handle}
            disabled={disabled}
            className={`flex items-center justify-center text-[18px] font-megat ${fontWeight} ${rounded} ${color} ${border} transition-all ${bg} ${height} ${width} ${css}`}
        >
            {text}
        </button>
    )
}

export default Button;