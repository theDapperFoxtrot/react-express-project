const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Jim", lastName: "Bo" },
    { id: 2, firstName: "Gill", lastName: "Bert" },
    { id: 3, firstName: "Bill", lastName: "Bo" },
  ];
  res.json(customers);
});

app.get("/api/toolkit", (req, res) => {
  const toolkit = [
    {
      id: 1,
      icon: "devicon-html5-plain-wordmark stackIcon",
      alt: "HTML5",
    },
    {
      id: 2,
      icon: "devicon-css3-plain-wordmark stackIcon",
      alt: "CSS3",
    },
    {
      id: 3,
      icon: "devicon-sass-original stackIcon",
      alt: "SASS",
    },
    {
      id: 4,
      icon: "devicon-javascript-plain stackIcon",
      alt: "JavaScript",
    },
    {
      id: 5,
      icon: "devicon-react-original-wordmark stackIcon",
      alt: "React.js",
    },
    {
      id: 6,
      icon: "devicon-git-plain-wordmark stackIcon",
      alt: "git versioning",
    },
    {
      id: 7,
      icon: "devicon-photoshop-line stackIcon",
      alt: "Photoshop",
    },
    {
      id: 8,
      icon: "devicon-premierepro-plain stackIcon",
      alt: "Premiere",
    },
    {
      id: 9,
      icon: "devicon-amazonwebservices-plain-wordmark stackIcon",
      alt: "Amazon Web Services",
    },
  ];
  res.json(toolkit);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
