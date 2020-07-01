

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { taskModule, EFilter } from "@/store/Task";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState("Task", ["filter"])
  }
})
export default class Index extends Vue {
  private showUpBtn: Boolean = false;

  // get showUpBtn() {
  //   console.log(taskModule.listElement?.scrollTop)
  //   return taskModule.listElement && taskModule.listElement.scrollTop > 100;
  // }

  mounted() {
    taskModule.listElement?.addEventListener("scroll", e => {
      if (taskModule.listElement && taskModule.listElement.scrollTop > 100) {
        this.showUpBtn = true;
      } else {
        this.showUpBtn = false;
      }
    });
  }

  onAll() {
    taskModule.SET_FILTER(EFilter.ALL);
  }
  onCompleted() {
    taskModule.SET_FILTER(EFilter.COMPLETED);
  }
  onIncompleted() {
    taskModule.SET_FILTER(EFilter.INCOMPLETED);
  }

  scrollUp() {
    taskModule.listElement?.scrollTo({ top: 0, behavior: "smooth" });
  }
}
</script>

<template>
  <footer>
    <div>
      <button @click="onAll" :class="{active:filter === 'all'}">All</button>
      <button @click="onCompleted" :class="{active:filter === 'completed'}">Completed</button>
      <button @click="onIncompleted" :class="{active:filter === 'incompleted'}">Incompleted</button>
    </div>

    <button @click="scrollUp" :class="{show:showUpBtn}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
      </svg>
    </button>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  background-color: var(--quaternary);
}

footer > button {
  width: 30px;
  height: 30px;
  margin-left: 30px;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

footer > button.show {
  opacity: 1;
}

footer > div > button {
  padding: 5px;
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
}
footer > div > button:not(:last-child) {
  margin-right: 3px;
}

footer > div > button.active {
  background-color: var(--tertiary);
  box-shadow: 0 0 3px var(--tertiary);
  /* color: var(--white); */
}
</style>