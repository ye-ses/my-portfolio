const app = Vue.createApp({
  data() {
    return {
      black: "#292929",
      gray: "#616161",
      white: "#FFFFFF",
      photography: "",
      contacts: [
        {
          name: "email",
          handle:
            "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nenzhelelen1@gmail.com",
          icon: " bi bi-envelope-at-fill",
        },
        {
          name: "linkedin",
          handle: "https://www.linkedin.com/in/ndugelo-nenzhelele-39006816b/",
          icon: "bi bi-linkedin",
        },
        {
          name: "github",
          handle: "https://github.com/ye-ses",
          icon: "bi bi-github",
        },
      ],
      programmingSkills: [
        { skill: "HTML", value: "45%" },
        { skill: "CSS", value: "50%" },
        { skill: "JAVASCRIPT", value: "30%" },
        { skill: "React", value: "30%" },
        { skill: "Vue", value: "10%" },
        { skill: "C#", value: "60%" },
        { skill: "JAVA", value: "40%" },
        { skill: "Android Development", value: "35%" },
      ],
      education: [
        {
          institution: "Thengwe Secondary School",
          qualification: "Matric",
          year: "2017",
        },
        {
          institution: "Nelson Mandela University",
          qualification: "BSc Computer Science and Mathematical Statistics",
          year: "2022",
        },
      ],
      projects: [
        {
          name: "calculator",
          img: "src/illustrations/3d-stripy-black-calculator.png",
          alt: "a simple calculator",
          class: "project-fill",
          git: "https://github.com/ye-ses/tiny-calculator",
        },
        {
          name: "to-do list",
          img: "src/illustrations/doobry-task-list.png",
          alt: "to-do list app",
          class: "project-fill",
          git: "https://github.com/ye-ses/todo_list",
        },
        {
          name: "sos-game",
          img: "src/illustrations/business-3d-game-boy-side-view.png",
          alt: "an android sos game, like xox",
          class: "project-fill",
          git: "",
        },
      ],
    };
  },
  k: "50%",
  methods: {},
});
app.mount("#vue");
