const TopBarIcon = ({ icon, text = "This is a tooltip!", classN = "" }) => {
    let classes = `${classN} topbar-tooltip group-hover:scale-100`
    return (
        <div className="topbar-icon group">
            {icon}
            <span className={classes}>
                {text}
            </span>
        </div>
    )
}

export default TopBarIcon;