const TopBarIcon = ({ icon, text = "This is a tooltip!" }) => {
    return (
        <div className="topbar-icon group">
            {icon}
            <span className="topbar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}

export default TopBarIcon;