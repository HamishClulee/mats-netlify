<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="p-32">
    <SlideUpContainer>
      <h1 class="text-6xl text-primary font-display mb-4">Hamish Clulee</h1>
      <h2 class="text-4xl text-secondary font-display mb-2">
        BSc, Software Engineering, University of Otago
      </h2>
      <p>References upon request</p>
      <p>hamish.clulee@gmail.com</p>
      <p>New Zealand Citizen.</p>
    </SlideUpContainer>

    <mark class="divider mb-2">~</mark>

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
    </SlideUpContainer>

    <mark class="divider">~</mark>

    <SlideUpContainer>
      <div class="flex flex-row justify-center">
        <div class="mx-8 mt-4 mb-8 w-96">
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

        <div class="mx-8 mt-4 mb-8 w-96">
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
    </SlideUpContainer>

    <mark class="divider">~</mark>

    <JobCard
      employer="Dovetail Studios"
      title="Senior Javascript Developer"
      dates="January 2020 - Current"
      :was-remote="true"
      :references="true"
    >
      <p class="cv-paragraph">
        Dovetail leads product development of some of the fastest growing companies in the
        world, providing digital strategy, growth strategy, design and development
        services to both the private and public sector. Dovetail is a digital agency which
        is moving it's focus towards incubation and venture capital, we take early stage
        start ups and work with founders to build awesome products with big market impact.
      </p>
      <p class="cv-paragraph">
        I work as a senior javascript developer for a new currency hedging and BI platform
        called Fluenccy.
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
      :was-remote="true"
      :references="true"
    >
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
      employer="Allow Design"
      title="Contract Frontend Developer"
      dates="Intermittent between January 2017 - February 2019 (Contracts totalling 12 months)"
      :was-remote="true"
    >
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

    <mark class="divider">~</mark>

    <NavFoot></NavFoot>
  </div>
</template>

<script>
import SlideUpContainer from "../components/animate/SlideUpContainer.vue";
import JobCard from "../components/cards/JobCard.vue";
import NavFoot from "../components/layout/NavFoot.vue";
export default {
  name: "CvPage",
  components: {
    NavFoot,
    SlideUpContainer,
    JobCard,
  },
};
</script>

<style>
.cv-paragraph {
  @apply my-2;
}
</style>
