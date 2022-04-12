import loja from "../src/assets/online-store.jpg";
import dog from "../src/assets/dog-search.jpg";
import startup from "../src/assets/startup.jpg";
import wedding from "../src/assets/wedding.png";
import dkorr from "../src/assets/dkorr.png";
import weather from "../src/assets/website-weather.png";
import beezy from "../src/assets/beezy.png";

// Array of images and information about projects
let projects = [
  {
    type: "website",
    title: "Weather website",
    description:
      "This website shows the weather forecast for the next 5 days and also displays some information about the current day (visibility, air pressure, wind, humidity).",
    functionalities: [
      "Search for a city",
      "See current location weather forecast",
      "Choose betweeen Celcius or Fahrenheit",
    ],
    img: weather,
    technologies: ["fa-html5", "fa-css3-alt", "fa-js-square", "fa-react"],
    codeLink: "https://github.com/Tiago-Rodrigs/Website-Weather",
    demoLink: "https://theweatherappp.netlify.app/",
    display: "left",
  },

  {
    type: "website",
    title: "Dkorr Website",
    description:
      " A portfolio with pictures of products produced by the company and also provides a way to order customized products.",
    functionalities: [
      "See product images",
      "See details about the company",
      "Send a quote request",
      "Get links to social media",
    ],
    img: dkorr,
    technologies: ["fa-html5", "fa-css3-alt", "fa-js-square", "fa-react"],
    codeLink: "https://github.com/Tiago-Rodrigs/Website-Dkorr-Decorations",
    demoLink: "https://dkorr.fr/",
    display: "right",
  },
  {
    type: "website",
    title: "Beezy landing page",
    description:
      "A landing page project to attract and engage new customers for a new product.",
    functionalities: ["Get links to social media", "Insert email"],
    img: beezy,
    technologies: ["fa-html5", "fa-css3-alt"],
    codeLink: "https://github.com/Tiago-Rodrigs/Landing-Page-Beezy",
    demoLink: "https://beezy-challenge.netlify.app/",
    display: "left",
  },

  {
    type: "website",
    title: "Wedding RSVP",
    description:
      "This wedding project was developed in order to receive the attendance of the guests and to give information about the address and date of the wedding.",
    functionalities: ["See details", "See address", "Confirm attendance"],
    img: wedding,
    technologies: ["fa-html5", "fa-css3-alt"],
    codeLink: "https://github.com/Tiago-Rodrigs/Webiste-Wedding",
    demoLink: "https://this-is-a-wedding-demo.netlify.app/index.html",
    display: "right",
  },

  {
    type: "design",
    title: "Startup Design",
    description:
      "Landing page to promote the company's services to potential clients.",
    functionalities: [
      "See details about the company",
      "Send a quote request",
      "Get links to social media",
    ],
    img: startup,
    technologies: ["fa-figma"],
    designLink: "https://www.figma.com/file/n71kIcyf0Axl8tILcXM07R/Softunit",
    display: "left",
  },

  {
    type: "design",
    title: "Online Store Design",
    description: "Online store for selling and exchanging items.",
    functionalities: [
      "See products",
      "Search for products",
      "Order products",
      "Like product",
    ],
    img: loja,
    technologies: ["fa-figma"],
    designLink:
      "https://www.figma.com/file/VljQOUwgcAdO4xMw4SqyoP/Sua-promocao-clt-Manuel?node-id=0%3A1",
    display: "right",
  },

  {
    type: "design",
    title: "Find My Pet Design",
    description: "Website developed to help people to find their lost pets.",
    functionalities: [
      "Send message",
      "Search for a pet",
      "Create a post",
      "Share a post",
      "Save a post",
    ],
    img: dog,
    technologies: ["fa-figma"],
    designLink:
      "https://www.figma.com/file/Wb3Xt8bofbgdgG3RMQvMO0/Untitled?node-id=5%3A7",
    display: "left",
  },
];

export default projects;
