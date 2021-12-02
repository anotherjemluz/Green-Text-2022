<template>
  <div class="desktop">
    <LeftMenu/>
    <div class="feed">
      <smooth-scrollbar data-aos="fade-down" data-aos-duration="500">
        <CtaPost data-aos="fade-up" data-aos-duration="500"/>
        <GtOrPostCard :gtOrPostData='gtData' :user="currentUser"/>
        <GtOrPostCard :gtOrPostData='postData' :user="currentUser"/>
        <GtOrPostCard :gtOrPostData='gtData2' :user="currentUser"/>
      </smooth-scrollbar>
    </div>

    <section class="panel-details">
    </section>

    <section class="friend-list">
    </section>

  </div>
</template>

<script>
import LeftMenu from "@/components/desktop/LeftMenu"

import CtaPost from "@/components/cards/CtaPost"
import GtOrPostCard from "@/components/cards/GtOrPostCard"

import gtInfo from '../../api/gt.json'
import gtInfo2 from '../../api/gt2.json'

import postInfo from '../../api/post.json'
import user from '../../api/user.json'

export default {
  name: "PainelDesktop",
  components: { LeftMenu, CtaPost, GtOrPostCard},
  data: () => {
    return {
      gtData: gtInfo,
      gtData2: gtInfo2,
      postData: postInfo,
      currentUser: user
    }
  },
  methods: {
    feedPosition() {
      let leftMenuWidth = document.getElementById("left-menu").offsetWidth;
      let feedWidth = document.getElementById("feed");

      feedWidth.style.left = leftMenuWidth+"px";
      // feedWidth.style.margin = "0px 0px px";
      feedWidth.offsetWidth = 300+"px";
    },
    detailsPosition() {
      let feedWidth = document.getElementById("feed").offsetWidth;
      let detailsWidth = document.getElementById("painel-details");

      // feedWidth.style.left = leftMenuWidth+32+"px";
      // feedWidth.offsetWidth = 300+"px";
      console.log(feedWidth)
    }
  },
  mounted() {
    this.feedPosition();
  }
};
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/buttons";
@import "../styles/backgrounds";

/* play with some lines below */
#progress-container-el {
  /* background */
  background-color: transparent !important;
  // top: calc(100% - 4px) !important;
}
#progress-el {
  /* progress bar */
  background-color: red !important;
}

.desktop {
  display: flex;

  .scrollbar-track-y { display: none !important;}

  .left-menu,
  .feed,
  .panel-details,
  .friend-list {
    min-height: 100vh;
    height: 100%;
  }

  .feed {
    width: 30vw;
    margin: 0px 32px;

    left: 360px;
    position: relative;

    height: 100vh;


    .cta-post,
    .gt-post{
      border-radius: 10px;
      width: 100%;
    }
  }

  .panel-details {
    background-color: #ffffff10;

    position: relative;
    left: 350px;

    width: 25vw;
    margin: 0px 32px;
  }

  .friend-list {
    background-color: #ffffff10;

    position: relative;
    left: 340px;

    margin-left: 32px;
    width: 15vw;
  }
}
</style>