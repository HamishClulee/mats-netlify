<template>
  <div id="print-vis-on" class="cv-con">
    <h1 class="main">Hamish Clulee</h1>
    <h2>BSc, Software Engineering, University of Otago</h2>
    <h3>References upon request</h3>
    <h5>hamish.clulee@gmail.com</h5>
    <h6>Digital Nomad, primarily located in Asia.</h6>
    <h6>New Zealand Citizen.</h6>

    <mark class="divider">~</mark>

    <p class="des-text first-des-para">
      Passionate about all things Frontend. I'm a big believer that attitude is the main
      ingredient in creating good devs and great teams, that attitude can be fostered and
      that teaching is the most effective way to continue learning.
    </p>
    <p class="des-text">
      I'm well read and versed in Software Engineering as a discipline. I've learned that
      the simple things are the most important, focusing on the basics and building solid
      foundations is the key. Complexity is unavoidable, the goal is to solve the problem
      without making it worse.
    </p>

    <mark class="divider">~</mark>

    <div class="key-con">
      <div class="key-con-item">
        <h6 class="exp-head">Commercial Web Applications</h6>
        <p>ReactJs<span>1+ years</span></p>
        <p>VueJs<span>4+ years</span></p>
        <p>Javascript<span>6+ years</span></p>
        <p>Java<span>4+ years</span></p>
        <p>SASS/SCSS/CSS <span>5+ years</span></p>
        <p>NodeJs<span>4+ years</span></p>
        <p>Linux<span>6+ years</span></p>
      </div>

      <div class="key-con-item">
        <h6 class="exp-head">Other Relevant Skills</h6>
        <p>Mentoring<span>3+ years</span></p>
        <p>Coaching<span>4+ years</span></p>
        <p>Team Leadership <span>~2 years</span></p>
        <p>UI/UX Design <span>2+ years</span></p>
        <p>Working Remote <span>4+ years</span></p>
        <p>Gimp/Inkscape/Adobe suite <span>5+ years</span></p>
      </div>
    </div>
    <mark class="divider">~</mark>
    <div v-for="(v, i) in jobs" :key="i" class="job-con">
      <h2>{{ v.employer }}</h2>
      <h3>{{ v.title }}</h3>
      <h5>{{ v.dates }}</h5>
      <h6 v-if="v.references" class="refs">References available</h6>
      <p
        v-for="(p, x) in v.description"
        :key="x"
        class="des-para"
        :class="x === 0 ? 'first-des-para' : ''"
        v-html="p"
      ></p>
      <mark class="divider">~</mark>
    </div>
    <NavFoot></NavFoot>
  </div>
</template>

<script>
import NavFoot from "../components/layout/NavFoot.vue";
export default {
  name: "CvPage",
  components: {
    NavFoot,
  },
  data() {
    return {
      jobs: [
        {
          title: "Senior Javascript Developer",
          employer: "Dovetail Studios",
          dates: "January 2020 - Current",
          description: [
            `Dovetail leads product development of some of the fastest growing companies in the world,
                  providing digital strategy, growth strategy, design and development services to both the
                  private and public sector. Dovetail is a digital agency which is moving it's focus towards
                  incubation and venture capital, we take early stage start ups and work with founders to build
                  awesome products with big market impact. `,
            `I work as a senior javascript developer for a new currency hedging and BI platform called Fluenccy.`,
            `On a daily basis, delivering features in ReactJs and Typescript, or Node. Working directly with
                  the founders to understand their needs and build their vision.`,
          ],
          references: true,
        },
        {
          title: "Frontend Tech Lead",
          employer: "AduroLabs Vietnam",
          dates: "January 2020 - December 2020 (1 year)",
          description: [
            `AduroLabs is a Health and Wellness service provider.`,
            `I was primarily
                        tasked with leadership and mentoring for the frontend teams.
                        Daily responsibilities included code reviews, coaching, writing
                        technical documentation, making architecture decisions and managing
                        sprints and tickets.`,
            `Higher level responsibilities included interviewing
                        potential hires, technical product management, building better agile
                        processes and interfacing with other teams and departments within the
                        company.`,
          ],
          references: true,
        },
        {
          title: "Lead Frontend Developer",
          employer: "Netograph",
          dates: "July 2018 - July 2019 (1 year)",
          description: [
            `Netograph provides a web app and API. Their frontend is written in <em>VueJs</em>
                            and Typescript, backed by a custom webpack configuration. Visualisations are written in
                            d3.js. I designed the UI and website, and wrote the vast majority frontend code currently hosted at
                            <a href="https://netograph.io" target="_blank">https://netograph.io</a>.`,
            `Note worthy achievements include:
                            <ul>
                                <li>
                                    Site design; the CEO wanted a no nonsence UI, free of clutter and easy to understand.
                                    Due to the staggering amount of data handled by Netograph, this posed some fun challenges.
                                <li>
                                    The <a href="https://netograph.io/datasets/social/" target="_blank">infinite scroll library</a>,
                                    which had to act in place of pagination due to how lists are displayed and indexed.
                                </li>
                                <li>
                                    A system of custom <a href="https://netograph.io/datasets/social/domain/facebook.com" target="_blank">masonry cards</a>,
                                    designed to show the user a sample of the data associated with the first class object (IPs, domains, superdomains) viewing, remembering that each list could
                                    contain over a million items, and each first class object could contain
                                    up to 10 lists.
                                </li>
                                <li>
                                    A <a href="https://netograph.io/datasets/social" target="_blank">search component</a>
                                    letting users find needles in a gigantic haystack, in a manner that was quick and easy.
                                </li>
                            </ul>`,
            `Overall, this was an awesome development experience, and an unforgettable opportunity.`,
            `<span class="remote">This was a 100% remote position</span>`,
          ],
          references: true,
        },
        {
          title: "Contract Frontend Developer",
          employer: "Allow Design",
          dates:
            "Intermittent between January 2017 - February 2019 (Contracts totalling 12 months)",
          description: [
            `Allow Design was a studio based in Dunedin, New Zealand. They had one primary client,
                            a US healthcare giant. They would create functioning mini applications as development
                            templates for devs that worked directly for healthcare firm.`,
            `I was employed on and off for a number of these prototypes, creating small, standalone
                            web apps from a series of
                            Photoshop files provided by an Allow designer.`,
            `I was also responsible for overhauling
                            the frontend tooling and build system to help make other contract developers more productive.
                            I created a <em>VueJs</em> and Webpack boilerplate to function as a base for new prototypes.
                            It included a large number of UI components that conformed to the Allow Design styleguide.
                            The boilerplate was successful in reducing the lag created between
                            designers and developers which occurred when prototypes didn't match the style guide, and reduced lead time.
                            It remained in usage until the company folded early in 2019.`,
            `Some fun challenges, especially building a component library from scratch.`,
            `<span class="remote">This was a 100% remote position</span>`,
          ],
          references: false,
        },
        {
          title: "Software Developer",
          employer: "Fusion Sport Inc.",
          dates: "August 2016 - August 2018 (2 years)",
          description: [
            `Fusion is a sports science company, based in Brisbane, Australia. They sell hardware products
                            and provide a web app, all designed to
                            provide athletes and sports teams with competitive advantages.`,
            `The Fusion Sport Client list is impressive, you can check it out
                            <a href="https://www.fusionsport.com/clients/" target="_blank">here</a>,
                            working directly for internationally recognisable sports teams was a real buzz.`,
            `Note worthy achievements: `,
            `Rebuilding the tooling used by the Frontend team,
                            replacing Gulp and JQuery with
                            a custom Webpack and <em>VueJs</em> boilerplate. The new boilerplate reduced lead time
                            by a significant amount, and is still in usage today.`,
            `Being granted leadership of the Dashboard Builder project. After
                            identifying the most commonly requested items in
                            customer dashboards with the team, I prototyped an application that enabled
                            creation of dashboards without developer involvement.
                            It was approved for resourcing by management, and the Dashboard Builder was born. based on
                            feedback from colleagues still working at Fusion it appears to remain a
                            customer favorite. More details are available on the <a href="/work">projects page</a>.`,
            `<span class="remote">This was a 100% remote position</span>`,
          ],
          references: true,
        },
      ],
    };
  },
};
</script>
