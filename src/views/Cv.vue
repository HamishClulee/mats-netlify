<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="p-8 md:p-32 max-w-screen-2xl mx-auto">
    <SlideUpContainer>
      <h1 class="text-3xl md:text-6xl font-display mb-2 md:mb-4">Hamish Clulee</h1>
      <h2 class="text-2xl md:text-4xl text-secondary font-display mb-1 md:mb-2">
        BSc, Software Engineering, University of Otago
      </h2>
      <span class="text-lg mb-1 flex flex-col md:flex-row text-gray-500">
        <span class="mr-4">hamish.clulee@gmail.com</span>
        <span class="transform scale-x-150 hidden md:inline">-</span>
        <span class="mx-0 md:mx-4">References upon request</span>
        <span class="transform scale-x-150 hidden md:inline">-</span>
        <span class="mx-0 md:mx-4">New Zealand Citizen.</span>
      </span>

      <DividerUi />
    </SlideUpContainer>

    <SlideUpContainer>
      <p class="cv-paragraph text-lg">
        Passionate about all things Frontend. I'm a big believer that attitude is the main
        ingredient in creating good devs and great teams, that attitude can be fostered
        and that teaching is the most effective way to continue learning.
      </p>
      <p class="cv-paragraph text-lg">
        I'm well read and versed in Software Engineering as a discipline. I've learned
        that the simple things are the most important, focusing on the basics and building
        solid foundations is the key. Complexity is unavoidable, the goal is to solve the
        problem without making it worse.
      </p>

      <DividerUi />
    </SlideUpContainer>

    <SlideUpContainer>
      <div class="flex flex-col md:flex-row justify-center">
        <div class="mx-0 md:mx-8 mt-4 mb-8 w-full md:w-96">
          <p class="my-2 flex justify-between">
            ReactJs<span class="italic">1+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            VueJs<span class="italic">5+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            Javascript<span class="italic">7+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            Java<span class="italic">4+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            SASS/SCSS/CSS <span class="italic">6+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            NodeJs<span class="italic">6+ years</span>
          </p>
        </div>

        <div class="mx-0 md:mx-8 mt-4 mb-8 w-full md:w-96">
          <p class="my-2 flex justify-between">
            Mentoring<span class="italic">3+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            Coaching<span class="italic">4+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            Team Leadership <span class="italic">~2 years</span>
          </p>
          <p class="my-2 flex justify-between">
            UI/UX Design <span class="italic">4+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            Working Remote <span class="italic">5+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            Linux<span class="italic">6+ years</span>
          </p>
        </div>
      </div>

      <DividerUi />
    </SlideUpContainer>

    <JobCard
      employer="Contracter"
      title="Senior Software Engineer"
      dates="June 2020 - Current"
      :was-remote="true"
      :references="true"
    >
      <TechIndicator :tech="contractTech" />
      <p class="cv-paragraph">
        One short run contract for Zer0, a US blockchain start up. Mostly writing React
        but responsibilities included code reviews and mentoring for junior devs.
      </p>
      <p class="cv-paragraph">
        Another short run contract for Streem Media Au. Working with Vue and Ruby on
        Rails, mostly focused on overhauling their reporting feature.
      </p>
    </JobCard>

    <JobCard
      employer="Dovetail Studios"
      title="Senior Javascript Developer"
      dates="January 2021 - June 2021 (6 month contract)"
      :was-remote="true"
      :references="true"
    >
      <TechIndicator :tech="dovetailTech" />
      <p class="cv-paragraph">
        Dovetail leads product development of some of the fastest growing companies in the
        world, providing digital strategy, growth strategy, design and development
        services to both the private and public sector. Dovetail is a digital agency which
        is moving it's focus towards incubation and venture capital, we take early stage
        start ups and work with founders to build awesome products with big market impact.
      </p>
      <p class="cv-paragraph">
        I worked as a senior javascript developer for a new currency hedging and BI
        platform called Fluenccy.
      </p>
      <p class="cv-paragraph">
        On a daily basis, delivering features in ReactJs and Typescript, or Node. Working
        directly with the founders to understand their needs and build their vision.
      </p>
    </JobCard>

    <JobCard
      employer="AduroLabs Vietnam"
      title="Frontend Tech Lead"
      dates="January 2020 - January 2021 (1 year)"
      :references="true"
    >
      <TechIndicator :tech="aduroTech" />
      <p class="cv-paragraph">AduroLabs is a Health and Wellness service provider.</p>
      <p class="cv-paragraph">
        I was primarily tasked with leadership and mentoring for the frontend teams. Daily
        responsibilities included code reviews, coaching, writing technical documentation,
        making architecture decisions and managing sprints and tickets.
      </p>
      <p class="cv-paragraph">
        Higher level responsibilities included interviewing potential hires, technical
        product management, building better agile processes and interfacing with other
        teams and departments within the company.
      </p>
    </JobCard>

    <JobCard
      employer="Netograph"
      title="Lead Frontend Developer"
      dates="July 2018 - July 2019 (1 year)"
      :was-remote="true"
      :references="true"
    >
      <TechIndicator :tech="netographTech" />
      <p class="cv-paragraph">
        Netograph provides a web app and API. Their frontend is written in <em>VueJs</em>
        and Typescript, backed by a custom webpack configuration. Visualisations are
        written in d3.js. I designed the UI and website, and wrote the vast majority
        frontend code.
      </p>
      <p class="cv-paragraph">Note worthy achievements include:</p>

      <ul>
        <li>
          Site design; the CEO wanted a no nonsence UI, free of clutter and easy to
          understand. Due to the staggering amount of data handled by Netograph, this
          posed some fun challenges.
        </li>

        <li>
          The infinite scroll library which had to act in place of pagination due to how
          lists are displayed and indexed.
        </li>
        <li>
          A system of custom masonry cards designed to show the user a sample of the data
          associated with the first class object (IPs, domains, superdomains) viewing,
          remembering that each list could contain over a million items, and each first
          class object could contain up to 10 lists.
        </li>
        <li>
          A search component to help users find needles in a gigantic haystack, in a
          manner that was quick and easy.
        </li>
      </ul>
      <p class="cv-paragraph">
        Overall, this was an awesome development experience, and an unforgettable
        opportunity.
      </p>
    </JobCard>

    <JobCard
      employer="Allow Design"
      title="Contract Frontend Developer"
      dates="Intermittent between January 2017 - February 2019 (Contracts totalling 12 months)"
      :was-remote="true"
    >
      <TechIndicator :tech="allowTech" />
      <p class="cv-paragraph">
        Allow Design was a studio based in Dunedin, New Zealand. They had one primary
        client, a US healthcare giant. They would create functioning mini applications as
        development templates for devs that worked directly for healthcare firm.
      </p>
      <p class="cv-paragraph">
        I was employed on and off for a number of these prototypes, creating small,
        standalone web apps from a series of Photoshop files provided by an Allow
        designer.
      </p>
      <p class="cv-paragraph">
        I was also responsible for overhauling the frontend tooling and build system to
        help make other contract developers more productive. I created a
        <em>VueJs</em> and Webpack boilerplate to function as a base for new prototypes.
        It included a large number of UI components that conformed to the Allow Design
        styleguide. The boilerplate was successful in reducing the lag created between
        designers and developers which occurred when prototypes didn't match the style
        guide, and reduced lead time. It remained in usage until the company folded early
        in 2019.
      </p>
      <p class="cv-paragraph">
        Some fun challenges, especially building a component library from scratch.
      </p>
    </JobCard>

    <JobCard
      employer="Fusion Sport Inc."
      title="Software Developer"
      dates="August 2016 - August 2018 (2 years)"
      :was-remote="true"
      :references="true"
    >
      <TechIndicator :tech="fusionTech" />
      <p class="cv-paragraph">
        Fusion is a sports science company, based in Brisbane, Australia. They sell
        hardware products and provide a web app, all designed to provide athletes and
        sports teams with competitive advantages.
      </p>
      <p class="cv-paragraph">
        The Fusion Sport Client list is impressive, you can check it out
        <a href="https://www.fusionsport.com/clients/" target="_blank">here</a>, working
        directly for internationally recognisable sports teams was a real buzz.
      </p>
      <p class="cv-paragraph">
        Note worthy achievement: Being granted leadership of the Dashboard Builder
        project. After identifying the most commonly requested items in customer
        dashboards with the team, I prototyped an application that enabled creation of
        dashboards without developer involvement. It was approved for resourcing by
        management, and the Dashboard Builder was born. based on feedback from colleagues
        still working at Fusion it appears to remain a customer favorite. More details are
        available on the <a href="/work">projects page</a>.
      </p>
      <p class="cv-paragraph">
        Note worthy achievement: Rebuilding the tooling used by the Frontend team,
        replacing Gulp and JQuery with a custom Webpack and <em>VueJs</em> boilerplate.
        The new boilerplate reduced lead time by a significant amount, and is still in
        usage today.
      </p>
    </JobCard>

    <DividerUi />

    <NavFoot></NavFoot>
  </div>
</template>

<script>
import SlideUpContainer from "../components/animate/SlideUpContainer.vue";
import JobCard from "../components/cards/JobCard.vue";
import NavFoot from "../components/layout/NavFoot.vue";
import DividerUi from "../components/util/DividerUi.vue";
import TechIndicator from "../components/visualisations/TechIndicator.vue";
export default {
  name: "CvPage",
  components: {
    NavFoot,
    SlideUpContainer,
    JobCard,
    DividerUi,
    TechIndicator,
  },
  data() {
    return {
      contractTech: [
        {
          name: "Vue",
          value: 40,
          x: 30,
        },
        {
          name: "React",
          value: 40,
          x: 0,
        },
        {
          name: "Ruby On Rails",
          value: 20,
          x: 70,
        },
      ],
      dovetailTech: [
        {
          name: "React",
          value: 35,
          x: 75,
        },
        {
          name: "Typescript",
          value: 20,
          x: 0,
        },
        {
          name: "GraphQl",
          value: 20,
          x: 20,
        },
        {
          name: "ExpressJs",
          value: 15,
          x: 40,
        },
        {
          name: "PSQL",
          value: 10,
          x: 65,
        },
      ],
      aduroTech: [
        {
          name: "Vue",
          value: 40,
          x: 0,
        },
        {
          name: "ExpressJs",
          value: 20,
          x: 70,
        },
        {
          name: "Vuex",
          value: 15,
          x: 40,
        },
        {
          name: "Docker",
          value: 15,
          x: 55,
        },

        {
          name: "PSQL",
          value: 10,
          x: 90,
        },
      ],
      netographTech: [
        {
          name: "Vue",
          value: 30,
          x: 0,
        },
        {
          name: "D3.js",
          value: 30,
          x: 30,
        },
        {
          name: "Typescript",
          value: 20,
          x: 60,
        },
        {
          name: "Javascript",
          value: 20,
          x: 80,
        },
      ],
      allowTech: [
        {
          name: "Vue",
          value: 40,
          x: 30,
        },
        {
          name: "Javascript",
          value: 30,
          x: 0,
        },

        {
          name: "Webpack",
          value: 30,
          x: 70,
        },
      ],
      fusionTech: [
        {
          name: "Java",
          value: 40,
          x: 0,
        },
        {
          name: "Vue",
          value: 30,
          x: 40,
        },
        {
          name: "Vuex",
          value: 20,
          x: 70,
        },
        {
          name: "PSQL",
          value: 10,
          x: 90,
        },
      ],
    };
  },
};
</script>

<style>
.cv-paragraph {
  @apply my-2;
}
</style>
