
function App() {
  return (
    <div style={{ fontFamily: 'Times New Roman, serif', margin: '0 auto', padding: '20px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ borderBottom: '1px solid black', paddingBottom: '10px' }}>Home Page for Marouane Boufarouj</h1>
        <img
          src="/PhotoProfile.jpeg"
          alt="Marouane Boufarouj"
          style={{ float: 'right', width: '100px', height: '100px', objectFit: 'cover' }}
        />
      </header>
      <p>
        Greetings!<br/> I'm Marouane Boufarouj, a computer science and data engineering student
        at ENSA, Khouribga, Morocco. I like backend dev, database dev and modern technology in general. 
        I'm currently seeking a 6-month internship starting in February 2025.
      </p>
      <h2 style={{ padding: '10px 0' }}>Open-Source Projects by Marouane</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: '0', marginLeft: '0' }}>
        <li style={{ paddingLeft: '1em', textIndent: '-1em' }}>
          • <a href="https://github.com/grainme/PomodoroKai" style={{ color: 'blue' }}>PomodoroKai</a>
          : A productivity tool built using Supabase and React, helping users manage their
          time effectively.
        </li>
        <li style={{ paddingLeft: '1em', textIndent: '-1em', marginTop: '0.5em' }}>
          • <a href="https://github.com/grainme?tab=repositories" style={{ color: 'blue' }}>GrainMe GitHub Projects</a>
          : Explore more of my personal open-source work on GitHub.
        </li>
      </ul>
      <h2 style={{ padding: '10px 0' }}>Professional Experience</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: '0', marginLeft: '0' }}>
        <li style={{ paddingLeft: '3em', textIndent: '-1em' }}>
          • <strong>ORACLE - Research Assistant</strong> (June 2024 – Sep 2024)
          <p style={{ marginLeft: '1em', marginTop: '0.2em' }}>
            Explored graph-based algorithms that aim to optimize performance for vector search.
          </p>
        </li>
      </ul>
      <h2 style={{ padding: '10px 0' }}>My Blog Posts</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: '0', marginLeft: '0' }}>
        <li style={{ paddingLeft: '3em', textIndent: '-1em' }}>
          • <a href="#" style={{ color: 'blue' }}>Exploring the Power of Graph Algorithms in Vector Databases</a> (October 10, 2024)
        </li>
      </ul>
      <p><a href="#" style={{ color: 'blue' }}>View all blog posts</a></p>
      <h2 style={{ padding: '10px 0' }}>Other Pages of Interest</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: '0', marginLeft: '0' }}>
        <li style={{ paddingLeft: '1em', textIndent: '-1em' }}>
          • <a href="mailto:boufaroujmarouan@gmail.com" style={{ color: 'blue' }}>Contact Me</a>
        </li>
        <li style={{ paddingLeft: '1em', textIndent: '-1em', marginTop: '0.5em' }}>
          • <a href="https://linkedin.com/in/marouaneboufarouj" style={{ color: 'blue' }}>LinkedIn Profile</a>
        </li>
      </ul>
      <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ fontSize: '0.8em' }}>
          Copyright © 2024 Marouane Boufarouj |
          <a href="mailto:boufaroujmarouan@gmail.com" style={{ color: 'blue', marginLeft: '5px' }}>
            boufaroujmarouan@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
