<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="p-8 md:p-32 max-w-screen-2xl mx-auto">
    <SlideUpContainer>
      <h1 class="text-3xl md:text-6xl font-display mb-2 md:mb-4">Hamish Clulee</h1>
      <h2 class="text-2xl md:text-4xl text-secondary font-display mb-1 md:mb-2">
        BSc, Software Engineering, University of Otago
      </h2>
      <span class="text-lg mb-1 flex flex-col md:flex-row text-gray-500">
        <span class="mr-4 italic">hamish.clulee@gmail.com</span>
        <span class="transform scale-x-150 hidden md:inline">-</span>
        <span class="mx-0 md:mx-4 italic">References upon request</span>
        <span class="transform scale-x-150 hidden md:inline">-</span>
        <span class="mx-0 md:mx-4 italic">New Zealand Citizen.</span>
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
            ReactJs<span class="italic">3+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            VueJs<span class="italic">6+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            Javascript<span class="italic">8+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            Java<span class="italic">4+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            SASS/SCSS/CSS <span class="italic">6+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            NodeJs<span class="italic">8+ years</span>
          </p>
        </div>

        <div class="mx-0 md:mx-8 mt-4 mb-8 w-full md:w-96">
          <p class="my-2 flex justify-between">
            Mentoring<span class="italic">5+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            Coaching<span class="italic">4+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            Team Leadership <span class="italic">~3 years</span>
          </p>
          <p class="my-2 flex justify-between">
            UI/UX Design <span class="italic">4+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            Working Remote <span class="italic">6+ years</span>
          </p>
          <p class="my-2 flex justify-between">
            Linux<span class="italic">8+ years</span>
          </p>
        </div>
      </div>

      <DividerUi />
    </SlideUpContainer>

    <JobCard
      employer="Contractor"
      title="Senior Software Engineer"
      dates="June 2020 - Current"
      :was-remote="false"
      :references="true"
    >
      <TechIndicator :tech="contract" />
      <div class="cv-paragraph">
        <h5 class="contractor-main-heading">Betfair AU (currently 3 + months).</h5>
        <p>I am contracted to prepare a path for the creation
        of a new Martech team within Betfair once my engagement completes. This role is 50% Business Analyst, 50% Engineer. A lot of
        requirements gathering and reporting, then proposing various engineering solutions to the problems discovered.</p>
      </div>
      <div class="cv-paragraph">
        <h5 class="contractor-main-heading">Watercare NZ (9 months).</h5>
        <p>A leadership, mentoring and engineering role. Bringing an outdated and somewhat disfunctional
        code base into line with industry best practices. Writing the foundation and first cycle features for a new
        Watercare product. 100% Frontend work.</p>
      </div>
      <div class="cv-paragraph">
        <h5 class="contractor-main-heading">Zer0 (3 months).</h5>
        <p>Short run contract for a US based Blockchain startup. I shipped a reasonably large scale UI prototype to spec while
          maintaining mentorship and leadership functions for internal Zer0 devs.</p>
      </div>
      <div class="cv-paragraph">
        <h5 class="contractor-main-heading">Streem Media Au (3 months).</h5>
        <p>Short run contract working with Vue and Ruby on Rails. Shipped a full overhaul of a legacy PDF reporting platform.</p>
      </div>
      <div class="w-full align-center -mx-1 my-2 text-md italic text-md text-gray-400">All the postions above were 100% remote</div>
    </JobCard>

    <JobCard
      employer="Dovetail Studios"
      title="Senior Javascript Developer"
      dates="January 2021 - June 2021 (6 month contract)"
      :was-remote="true"
      :references="true"
    >
      <TechIndicator :tech="dovetail" />
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
      <TechIndicator :tech="aduro" />
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
      <TechIndicator :tech="netograph" />
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
      <TechIndicator :tech="allow" />
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
      <TechIndicator :tech="fusion" />
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
import { tech } from "../constants/tech-indicator.js";
const { dovetail, aduro, netograph, allow, fusion, contract } = tech;

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
      dovetail,
      aduro,
      contract,
      allow,
      fusion,
      netograph,
    };
  },
};
</script>

<style>
.cv-paragraph {
  @apply my-2;
}
</style>
