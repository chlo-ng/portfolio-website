import '../styles/Home.css'


function Home() {

    return (
      <div className="home-container">
          <div className="welcome">
            <h1> Hi, </h1> <br />
            <h1> I'm Chloe. </h1> <br />
            <h3> Welcome to my personal website! <br /> Where I showcase both personal facts about myself and my professional career so far. </h3>
          </div>

          <div className="intro">
            <div style={{ width: '43vw'}}>
              <h2> A short introduction about myself. </h2> <br />
              <p> My name is Chloe and I graduated from the <strong>Georgia Institute of Technology</strong> in <strong>May of 2024</strong> with a <strong>Bachelor’s in Computer Science</strong>, with the concentrations People & Media. </p>
            </div>
          </div>
      </div>

      
    )
  }
  
  export default Home