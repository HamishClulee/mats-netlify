<template>
  <div class="work-con max-w-screen-xl mx-auto">
    <h1 class="text-4xl font-display text-secondary mb-8">Current Projects</h1>

    <SlideUpContainer>
      <section class="cards-container">
        <FeatureCard
          title="Hue"
          sub="OSS"
          :image="hue_img"
          aref="https://github.com/HamishClulee"
        >
          <p class="my-2">
            Hue is Vue component system currently not fully complied into one cohesive
            repository. Some examples are available on my GitHub, many more are currently
            being used and improved on in other projects.
          </p>
          <p class="my-2">
            In time, all the recent work I've done on Welcome QR will be merged with
            Create MEVN, and will become an application framework; Hue.
          </p>
        </FeatureCard>

        <FeatureCard
          title="Welcome QR"
          sub="Web App"
          :image="qr_img"
          aref="https://github.com/HamishClulee/welcomeqr.codes"
        >
          <p class="my-2">
            Originally WelcomeQR was being built as product to be used in the tourism
            sector. With the advent of Covid, and it's sub sequent devastation of said
            industry, it has become a place to validate new dev ideas for usage in other
            current projects; Create-MEVN and Hue.
          </p>
          <p class="my-2">
            Very much still in development, but the GitHub repo is a good example of
            recent code I've written.
          </p>
        </FeatureCard>

        <FeatureCard
          title="Create MEVN App"
          sub="OSS"
          :image="mevn_img"
          aref="https://github.com/HamishClulee/create-mevn-app"
        >
          <p class="my-2">
            Over the last two years, when starting new projects, or trying out new ideas
            I've started to compile all my best practices into a template repository to
            speed things up when starting up.
          </p>
          <p class="my-2">
            The plan is to merge all of the work done on Welcome QR into this repo, and
            then to use it as a base for building out Hue.
          </p>
        </FeatureCard>
      </section>
    </SlideUpContainer>

    <mark class="divider my-12">~</mark>

    <h1 class="text-4xl font-display text-secondary mb-4">Older Projects</h1>
    <h5 class="mb-8">
      If you see a GIF, its because an image link is broken, don't worry, I'm on it!
    </h5>

    <SlideUpContainer>
      <section class="cards-container">
        <FeatureCard title="Dashboard Builder" sub="Web App" :image="dbbimg">
          <p class="my-2">
            Built while working at Fusion Sport Australia. Allowed customers to create
            dashboards using a no-code web app.
          </p>
          <p class="my-2">
            Prior to this projects a team of three FE devs were writting the dashboards by
            hand. I spec'ed, prototyped and designed the system, was given leadership of
            the project and worked with two other devs to complete the project in around 6
            months. The Dashboard Builder is still in usage now by well known
            international sports teams and organisations.
          </p>
        </FeatureCard>

        <FeatureCard
          title="Netograph"
          sub="Web App"
          :image="netimg"
          aref="https://netograph.io"
        >
          <p class="my-2">
            I built the Frontend of the web app currently hosted at https://netograph.io
            (click this tile to visit the live site).
          </p>
          <p class="my-2">
            The amount of data in Netograph's DB is staggering, primarily indexed by
            domain and IP address, each item has a huge amount of detail associated with
            it, and each index having a vast length, think millions of items, in some
            cases that number runs well into the billions.
          </p>
        </FeatureCard>

        <FeatureCard title="Baby Aid NZ" sub="Web App" :image="babimg" :aref="null">
          <p class="my-2">
            Static website, booking and scheduling app written for a now defunct medical
            start up in New Zealand.
          </p>
          <p class="my-2">
            I built a calendar app using a forked Vue calendar found on GitHub. A checkout
            and payment system using Stripe and an Admin tool for staff to manage trainer
            and course scheduling. This site is no longer live.
          </p>
        </FeatureCard>

        <FeatureCard title="@RONIN" sub="Website" :image="roninimg">
          <p class="my-2">
            Static website and booking application built in October 2019. The clients were
            growing an accomodation business in Bali. Their primary focus was providing
            Co-Live-Co-Work spaces for Digital Nomads.
          </p>

          <p class="my-2">
            Covid has seen the owners unable to continue their business, this site is no
            longer live.
          </p>
        </FeatureCard>
      </section>
    </SlideUpContainer>

    <mark class="divider my-12">~</mark>

    <section class="cards-container">
      <p class="my-2">
        <em class="italic">
          The sections above are just a sample of things that I've built. Checkout my
          <a href="https://github.com/hamishclulee" target="_blank"> GitHub </a>
          to see more.
        </em>
      </p>
    </section>

    <mark class="divider my-12">~</mark>

    <NavFoot />
  </div>
</template>

<script>
import FeatureCard from "../components/cards/FeatureCard.vue";
import SlideUpContainer from "../components/animate/SlideUpContainer.vue";
import NavFoot from "../components/layout/NavFoot.vue";
export default {
  name: "WorkPage",
  components: { FeatureCard, NavFoot, SlideUpContainer },
  data() {
    return {
      babimg: "https://media.giphy.com/media/4560Nv2656Gv0Lvp9F/giphy.gif",
      hue_img: "/images/path71-7-0.png",
      qr_img: "/images/welcomeqr.png",
      mevn_img: "/images/createmevn.png",
      netimg: "https://media.giphy.com/media/PKRWcVDuKXPry/giphy.gif",
      dbbimg: "https://media.giphy.com/media/kC397rpnJjhp8oB1No/giphy-downsized.gif",
      roninimg: "https://media.giphy.com/media/3oEjI5VtIhHvK37WYo/giphy.gif",
      act_array: null,
      showmodal: false,
    };
  },
};
</script>

<style scoped>
.work-con {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 90px;
}

.cards-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 2em;
}
</style>
