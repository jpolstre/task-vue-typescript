<template>
  <div class="DialogCmp">
    <button class="close" @click="$emit('hide')">❌</button>
    <div class="header">{{title}}</div>
    <div class="body">
      <slot></slot>
    </div>
    <div class="footer">
      <button @click="$emit('cancel')">cancel</button>
      <button @click="$emit('ok')">ok</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class DialogCmp extends Vue {
  @Prop() title!: string;
}
</script>

<style scoped>
div.DialogCmp {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 400px;

  border-radius: 4px;
  box-shadow: 0 0 4px black;

  background-color: var(--primary);
  color: var(--white);
  z-index: 10;
}

div.DialogCmp > div {
  padding: 15px;
  width: 100%;
}

@media only screen and (max-width: 480px) {
  div.DialogCmp {
    width: 90%;
  }
}

div.DialogCmp > div.header {
  font-weight: 500;
  cursor: move;
  user-select: none;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
}

div.DialogCmp > div.body {
  margin-left: 10px;
  font-size: 0.8rem;
  font-weight: 500;
}

div.DialogCmp > div.footer {
  text-align: right;
}

div.DialogCmp > div.footer > button {
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

div.DialogCmp > div.footer > button:last-child {
  background-color: var(--quaternary);
  margin-left: 8px;
  color: white;
}
/* div.DialogCmp > div.header, div.footer {
  background-color: var(--tertiary);
}

div.DialogCmp > div.body {
  background-color: var(--primary);
  color: var(--white);
} */

div.DialogCmp > button.close {
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
  background-color: transparent;
  padding: 8px;
}

div.DialogCmp > .backcover {
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.8;
  width: 100vh;
  height: 100vh;
  z-index: -1;
}

.show {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.2s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
    /* width: 0; */
  }

  /* 25% {
    opacity: 0;
    width: 100px;
  }
  50% {
    opacity: 0;
    width: 200px;
  } */
  100% {
    opacity: 1;
    /* width: 400px !important; */
  }
}

.hide {
  opacity: 0;
  animation-name: fadeOutOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.2s;
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