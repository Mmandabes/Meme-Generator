import trollFace from "./Trollface.png"
function Header() {
   return (
      <header>
            <img 
                src={trollFace} 
                alt="Problem?"
            />
            <p>Meme Generator</p>
        </header>
   )
}
export default Header