const CTA = ({ text, href, color = "text-white", bg = "bg-red", css, icon, iconWidth = 20, iconHeight = 21 }) => {
    return (
        <>
            {icon ? <div className="w-full sm:w-max" dangerouslySetInnerHTML={{
                __html: `<a href=${href} class="flex items-center gap-3 sm:w-[205px] justify-center h-[45px] ${color} ${bg} text-[18px] font-medium rounded-full ${css} transition-all" >
                <img src="${icon}" width="${iconWidth}" height="${iconHeight}" />
                    <span className="text-sm xl:text-lg font-medium">${text?? "Book Demo"}</span>
                  
                </a>`
            }} /> : <div className="w-full sm:w-max" dangerouslySetInnerHTML={{
                __html: `<a href=${href} class="flex items-center gap-3 sm:w-[205px] justify-center h-[45px] ${color} ${bg} text-[18px] font-medium rounded-full ${css} transition-all" >
                    <span className="text-sm xl:text-lg font-medium">${text?? "Book Demo"}</span>
                </a>`
                
            }} />
            
            }
        </>
    )
}

export default CTA;