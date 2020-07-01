<template>
  <div ref="notifyRef">
    <span >{{props.message}}</span>
    <span class="close" @click="onRemove" style="cursor: pointer;">❌</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref, Emit } from "vue-property-decorator";
import { INotify } from ".";

@Component({})
export default class NotifyCmp extends Vue {
  @Prop() private props!: INotify;
  // @Prop() private color!: boolean

  @Ref("notifyRef") readonly notifyRef!: HTMLDivElement;

  @Emit()
  onRemove() {}

  // async created(){
  //   await this.creteHtmlTags()
  // }

  // created() {
  //   this.creteHtmlTags();
  // }

  mounted() {
    // console.log(this.props)
    this.notifyRef.classList.add("show");
  }

  // private creteHtmlTags() {
  //   let notifyContainer = document.getElementById("notify-container");
  //   if (!notifyContainer) {
  //     let notifyContainer = document.createElement("div");
  //     notifyContainer.id = "notify-container";
  //     document.body.appendChild(notifyContainer);
  //   }
  //   let container = document.createElement("div");
  //   container.id = "container";
  //   notifyContainer?.appendChild(container);
  // }
}
</script>

<style scoped>
div {
  background-color: var(--color);
  display: flex;
  color: white;
  box-shadow: 0 0 3px var(--color);
  opacity: 0;
  padding: 20px;
  position: relative;
  margin-bottom: 8px;
  font-size: 0.9rem;
  border-radius: 4px;
  border: 1px solid var(--color);
  z-index: 1;
}

div > span.close{
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 3px;
}

.show {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.hide {
  opacity: 0;
  animation-name: fadeOutOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes fadeOutOpacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>