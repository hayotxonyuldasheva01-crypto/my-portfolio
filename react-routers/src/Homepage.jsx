import MEN from "./assets/hhhh.avif"
function Homepage(){
    return(
        <div style={{backgroundColor:'#d3e3ff',borderRadius:'40px',width:'1000px',height:'500px',alignItems:'center',margin:'50px'}}>
            <div style={{marginRight:'600px'}}>
                <img src={MEN} alt="" style={{width:'250px',borderRadius:'100%', marginTop:'100px'}}/>
            </div>
            <div style={{marginLeft:'400px', marginTop:'-300px', color:'#1C2A44'}}>
                <div>
                    <h1>Hi, I'm Hayothon ✌️</h1>
                    <h2>I'm a Full Stack Developer.</h2>
                </div>
                <div>
                    <h3>☕ fueled by coffee</h3>
                    <h3>🌏 based in the US</h3>
                    <h3>💼 Systems Engineer at Google</h3>
                    <h3>📧 hayotxonyuldasheva01@gmail.com</h3>
                </div>
                <div id="icon" style={{marginRight:'20px'}}>
                    <a href="https://facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://instagram.com"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://x.com"><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </div>
    )
}
export default Homepage;