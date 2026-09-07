const header = document.createElement('header');
header.id = 'main-header';

header.innerHTML = `
  <div class="logo">
    <h1>My Website</h1>
  </div>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
`;

document.body.prepend(header);