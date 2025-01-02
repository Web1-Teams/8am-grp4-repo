

const Section = (props) => {
    return ( 
      <>
        <section className="para&title">
        <h1 className="title"> {props.title}</h1>
        <p className="para">{props.para}</p>
        </section>
      </>
  );
};



  export default Section;
  