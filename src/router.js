import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About";
import Audio from "./components/Audio";
import Video from "./components/Video";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
        path: "/audio",
        name: "audio",
        component: Audio
      },
      {
        path: "/video",
        name: "video",
        component: Video
      }
  ]
});