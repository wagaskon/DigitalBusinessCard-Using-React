import './App.css'

function App() {
    return (
    <main className="App">
      <div className="Container flexbox">
        <header>
          <img className='wagas'  src="./images/waqas.png" alt="Profile Picture"></img>
        </header>
        <section className="info flexbox">
          <div className='name flexbox'>
            <h1>Waqas Khan</h1>
            <h5 className='name_frontend'>Frontend Developer</h5>
            <h6 >Portfolio</h6>
          </div >
          <div className='btns'>
            <button className='emailbtn'>
            <img className='btn_icon' src="icons/emailicon.jpg" alt="email Icon"></img>
              Email</button>
            <button className='linkbtn'>
            <img className='btn_icon' src="./icons/linkicon.png" alt="linkedin Icon"></img>Linkedin</button>
          </div>
          <div className='details_info'>
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>

        </section>
        <footer >
          <div className='Foot'>
            <img className='icon' src="./icons/twittericon.jpg" alt="Twitter Icon"></img>
            <img className='icon' src="./icons/facebookicon.png" alt="facebook"></img>
            <img className='icon' src="icons/instagrmicon.png" alt="instagram"></img>
            <img className='icon' src="./icons/githubicon.png" alt="github"></img>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App
