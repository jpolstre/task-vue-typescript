<template>
  <header>
    <h3>{{title}}</h3>
    <button @click="$emit('toggleTheme')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"
        />
      </svg>
    </button>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() title!: string;
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: var(--quaternary);
  padding: 10px;
  color: var(--white);
  position: relative;
}
header > button{
  /* position: absolute;
  top: 5px;
  right: 3px; */
  cursor: pointer;
  border-radius: 50%;
  width: 24px;
  height: 24px;
}
</style>