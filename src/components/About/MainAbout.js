import "./MainAbout.css"


const MainAbout=(props)=>{
    return(
        
    

        <div class="col-lg-2 col-md-4 col-sm-6 mx-auto">

            <div class="card self-care">
                <div class="card-icon">{props.icon}</div>
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <a href="#" class="text-white">{props.whitetext}</a>
            </div>

        </div>
                   

    );
    };
    
    export default MainAbout


    

