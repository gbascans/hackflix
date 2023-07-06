function HeaderContent ({title, date, content}){
    return(
        <section className="header-content">
            <h1>{title}</h1>
            <small>{date}</small>
            <p>{content}</p>
        </section>
    )
}

export default HeaderContent;