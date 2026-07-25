var navbar = `
  <style>
  h1 {
    color: #fff;
    font-size: 28px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    overflow: hidden;
    background-color: #333333;
  }

  ul li {
    float: left;
  }

  ul li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  ul li a:hover {
    background-color: #111111;
  }

  </style>
  <nav>
      <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="Counter.html">Counter</a></li>
          <li><a href="trivia.html">Trivia</a></li>
          <li><a href="FeedJulio.html">Feed Julio</a></li>
      </ul>
  </nav>
  `
document.body.insertAdjacentHTML("beforeend", navbar);
