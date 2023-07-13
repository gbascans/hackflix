function HeaderContent({ title, date, content }) {
  return (
    <section className="header-content">
      <h1>{title}</h1>
      <small className="fs-3">{date}</small>
      <p className="fs-2">{content}</p>
    </section>
  );
}

export default HeaderContent;
