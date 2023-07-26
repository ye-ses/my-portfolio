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
        { skill: "HTML", value: "75%" },
        { skill: "CSS", value: "70%" },
        { skill: "JAVASCRIPT", value: "60%" },
        { skill: "React", value: "65%" },
        { skill: "Vue", value: "40%" },
        { skill: "C#", value: "70%" },
        { skill: "JAVA", value: "65%" },
        { skill: "Android Development", value: "45%" },
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
          name: "Multi-calculator",
          img: "src/illustrations/3d-stripy-black-calculator.png",
          alt: "multiple calculators, like xox",
          class: "project-fill",
          git: "https://github.com/ye-ses/multi-calculator",
        },
      ],
    };
  },
  k: "50%",
  methods: {},
});
app.mount("#vue");
