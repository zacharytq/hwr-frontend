const TopBarIcon = ({ icon, text = "This is a tooltip!", classN = "", highlighted = false }) => {
    let classes = `${classN} topbar-tooltip group-hover:scale-100`
    let iconClasses = ` ${highlighted ? "bg-teal-500": ''} topbar-icon group`
    return (
        <div className={iconClasses}>
            {icon}
            <span className={classes}>
                {text}
            </span>
        </div>
    )
}

export default TopBarIcon;