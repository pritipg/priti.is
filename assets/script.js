document.addEventListener("alpine:init", () => {
  Alpine.data("app", () => ({
    menuIsOpen: false,

    navItems: [
      { link: "/awesome", title: "About" },
      { link: "/abusybee", title: "Working" },
      { link: "/penningthoughts", title: "Writing" },
      { link: "/anavidtinkerer", title: "Tinkering" },
      { link: "/achatterbox", title: "Speaking" },
      { link: "/famous", title: "Recognition" },
    ],
    leftNavItems: [
      { link: "/awesome", title: "About" },
      { link: "/abusybee", title: "Working" },
      { link: "/penningthoughts", title: "Writing" },
    ],
    rightNavItems: [
      { link: "/anavidtinkerer", title: "Tinkering" },
      { link: "/achatterbox", title: "Speaking" },
      { link: "/famous", title: "Recognition" },
    ],

    currentBylineIndex: 0,
    bylines: [
      "... a lover of data, design and dance.",
      "... a weaver of form, unwraveller of function.",
      "... ready to rock and roll.",
    ],

    cycle() {
      if (this.currentBylineIndex < this.bylines.length - 1) {
        this.currentBylineIndex += 1;
      } else {
        this.currentBylineIndex = 0;
      }
    },

    writings: [
      {
        title: "Looking Back, Looking Ahead",
        date: "2021 / 06",
        link: "/ruminating",
        external: false,
      },
      {
        title: "Engaging Readers with Explorable Narratives",
        publisher: "Gramener",
        date: "2020 / 05",
        link: "https://blog.gramener.com/engaging-readers-with-explorable-narratives",
        external: true,
      },
      {
        title: "On Generative Art & Pen Plotters",
        date: "2020 / 02",
        link: "/writingaboutgenerativeart",
        external: false,
      },
      {
        title: "Let's Put a Pin on It",
        publisher: "Nightingale, Journal of the Data Visualisation Society",
        date: "2020 / 01",
        link: "/puttingapinonit",
        external: false,
      },
      {
        title: "Is the World of Art Embracing Diversity?",
        publisher: "Gramener",
        date: "2019 / 10",
        link: "/fordiversity",
        external: false,
      },
      {
        title: "Capturing People through Data",
        publisher: "Nightingale, Journal of the Data Visualisation Society",
        date: "2019 / 09",
        link: "/creatingdatabookmarks",
        external: false,
      },
    ],

    speakings: [
      {
        title: "Creating Poetic Spaces with Interactive Typography",
        appearances: [
          {
            event: "ACM SIGGRAPH · SPARKS",
            date: "2021 / 09",
            link: "https://vimeo.com/640526471",
          },
          {
            event: "Typography Day 2021",
            date: "2021 / 08",
            link: "https://www.youtube.com/watch?v=8njf8uEGmuA&t=10s",
          },
          {
            event: "Co-Po-Jam · dra.ft festival",
            date: "2020 / 05",
            link: "https://dra-ft.site/copojam1",
          },
          { event: "Srishti · Visiting talk", date: "2019 / 09" },
          { event: "NID Bengaluru · Visting talk", date: "2019 / 08" },
          { event: "Bangalore International Center", date: "2019 / 08" },
        ],
      },
      {
        title: "Joyful Data",
        appearances: [
          {
            event: "Creative Coding Santé",
            date: "2021 / 04",
          },
        ],
      },
      {
        title: "On Data Art and Storytelling",
        appearances: [
          { event: "Srishti · Fireside chat", date: "2020 / 09" },
          { event: "Srishti · Guest lecture", date: "2019 / 11" },
        ],
      },
      {
        title: "Making the Thing that Makes the Thing",
        appearances: [
          {
            event: "Processsing Community Day, India 2020 · Workshop",
            date: "2020 / 02",
            link: "https://musingswithcode.studio/generative-design-workshop",
          },
        ],
      },
    ],

    features: [
      {
        title: "Creating Poetic Spaces with Interactive Typography",
        appearances: [
          {
            publication: "Backslash Lit",
            date: "2020 / 10",
            link: "https://backslashlit.com/issues/2/priti-pandurangan-asking-a-shadow",
          },
        ],
      },
      {
        title: "Making the Thing that Makes the Thing",
        appearances: [
          {
            publication: "p5.js Teach",
            date: "2020 / 08",
            link: "https://p5js.org/teach",
          },
        ],
      },
    ],

    recognitions: [
      {
        title: "Upcoming Data Storyteller · Honourable Mention",
        appearances: [
          {
            event: "Narrative Science Data Storytelling Awards",
            date: "2021 / 07",
            link: "https://narrativescience.com/data-storytelling-awards",
          },
        ],
      },
      {
        title: "Second Place · My Name is Akbar Khan",
        subtitle: "In collaboration with Gramener Storylabs",
        appearances: [
          {
            event: "Center for Global Data Visualisation · Hackathon",
            date: "2019 / 11",
            link: "https://gramener.medium.com/my-name-is-akbar-khan-4b43799240d4",
          },
        ],
      },
      {
        title: "Blue Elephant · The Stereotypeface Project",
        subtitle: "In collaboration with Wunderman Thompson India",
        appearances: [
          {
            event: "Kyoorius Creative Awards",
            date: "2019 / 09",
            link: "https://awards.kyoorius.com/2019/creative/pdf/kca-guide-04_winner.pdf",
          },
        ],
      },
    ],

    tinkerings: [
      {
        type: "image",
        link: "./assets/homepage/tinkerings/01.png",
      },
      {
        type: "image",
        link: "./assets/homepage/tinkerings/02.gif",
      },
      {
        type: "image",
        link: "./assets/homepage/tinkerings/03.png",
      },
      {
        type: "image",
        link: "./assets/homepage/tinkerings/04.png",
      },
      {
        type: "image",
        link: "./assets/homepage/tinkerings/05.png",
      },
      {
        type: "image",
        link: "./assets/homepage/tinkerings/06.gif",
      },
      {
        type: "image",
        link: "./assets/homepage/tinkerings/07.png",
      },
      {
        type: "image",
        link: "./assets/homepage/tinkerings/08.gif",
      },
    ],

    projects: [
      {
        type: "image",
        link: "/assets/homepage/showcase/meghadutam.gif",
      },
      {
        type: "image",
        link: "./assets/homepage/showcase/joyful-data.jpg",
      },
      {
        type: "image",
        link: "/assets/projects/meghadutam/teaser.jpg",
      },
      {
        type: "image",
        link: "./assets/homepage/tinkerings/04.png",
      },
      {
        type: "image",
        link: "./assets/homepage/tinkerings/05.png",
      },
      {
        type: "image",
        link: "./assets/homepage/tinkerings/06.gif",
      },
      {
        type: "image",
        link: "./assets/homepage/tinkerings/07.png",
      },
      {
        type: "image",
        link: "./assets/homepage/tinkerings/08.gif",
      },
      {
        type: "image",
        link: "./assets/homepage/tinkerings/09.png",
      },
    ],
  }));
});
