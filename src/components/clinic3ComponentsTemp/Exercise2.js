





const Exercise2 =(props)=>{
    return(
        <section className="MeditationEX">
      
        <ul>
          <li> <b>{props.exName}  </b> 
             <ul>
              <li><b>Purpose:</b>{props.purpose}</li>
              <li><b>Steps:</b>
                <ol>
                  <li>{props.step1}</li>
                  <li>{props.step2}
                    <ul>
                        <li>{props.point1}</li>
                        <li>{props.point2}</li>
                        <li>{props.point3}</li>

                    </ul>
                  </li>
                  <li>{props.step3}</li>
                  <li>{props.step4}</li>
                  <li>{props.step5}</li>
                </ol>
              </li>
              <li><b>Duration:</b> {props.Duration}</li>
              <li> <a href={props.video}>video tutorial </a>  </li>
            </ul>
          </li>
        </ul>
      </section>
    )
    
    }
    
    export default Exercise2