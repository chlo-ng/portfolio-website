function Home() {
  return (
    <div className="max-w-screen">
      <div className="primary-container text-center">
        <h1 className="text-7xl"> Hi, </h1>
        <h1 className="text-7xl"> I'm Chloe. </h1>
        <h3 className="text-secondary">
          Welcome to my personal website! <br /> Where I showcase both personal
          facts about myself and my professional career so far.
        </h3>
      </div>

      <div className="secondary-container">
        <h2> A short introduction about me. </h2>
        <span className="w-[40vw] text-left">
          My name is Chloe and I graduated from the{" "}
          <strong>Georgia Institute of Technology</strong> in May of 2024 with a{" "}
          <strong>Bachelor’s in Computer Science</strong>, with the
          concentrations <strong>People & Media</strong>.
        </span>
        {/* // todo: add more information about my current job and why i want to be a design engineer */}
      </div>
    </div>
  );
}

export default Home;
