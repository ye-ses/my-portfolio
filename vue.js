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
        { skill: "Python", value: "50%" },
        { skill: "JAVASCRIPT", value: "70%" },
        { skill: "React", value: "65%" },
        { skill: "Vue", value: "25%" },
        { skill: "C#", value: "65%" },
        { skill: "JAVA", value: "55%" },
        { skill: "Android Development", value: "35%" },
      ],
      education: [
        {
          institution: "Nelson Mandela University",
          qualification: "(Honours) BSc Mathematical Statistics",
          year: "2024",
        },
        {
          institution: "Nelson Mandela University",
          qualification: "BSc Computer Science and Mathematical Statistics",
          year: "2022",
        },
        {
          institution: "Thengwe Secondary School",
          qualification: "Matric",
          year: "2017",
        },
       
      ],
      projects: [
        {
          name: "calculator",
          img: "src/illustrations/3d-stripy-black-calculator.png",
          alt: "a simple calculator",
          class: "project-fill",
          git: "https://github.com/ye-ses/tiny-calculator",
          link: "https://ye-ses.github.io/tiny-calculator/",
          demo: "#",
        },
        {
          name: "Brandisschools",
          img: "src/illustrations/Website designer-amico.svg",
          alt: "school website demo",
          class: "project-fill",
          git: "https://github.com/Brandis-Moth/School-Website-V3",
          link: "https://www.demo.brandisschools.co.za/",
          demo: "#",
        },
        {
          name: "Multi-calculator",
          img: "src/illustrations/3d-stripy-black-calculator.png",
          alt: "multiple calculators, like xox",
          class: "project-fill",
          git: "https://github.com/ye-ses/multi-calculator",
          link: "https://ye-ses.github.io/multi-calculator/",
          demo: "#",
        },
      ],
    };
  },
  k: "50%",
  methods: {
    redirect(link) {
      open(link)
    }
  },
});
app.mount("#vue");
