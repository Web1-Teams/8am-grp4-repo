import '../styles/footer.css'


const Footer=()=>{
    return(
<footer>
  <div class="footerContainer">
      <div class="socialIcons">
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-google"></i></a>
      </div>
      <div class="footerNav">
          <ul>
           
              <li><a href="./Index_Developers.html" target="_blank">Our Team</a></li>

              <li><a href="#">About</a></li>
          </ul>
      </div>
      
  </div>
  <div class="footerBottom">
      <p>Copyright &copy;2024; Designed by <span class="designer">" Our Team"</span></p>
  </div>
</footer>
    )
}

export default Footer