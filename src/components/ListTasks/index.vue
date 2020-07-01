<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ITask } from "../../store/Task";

import { taskModule } from "@/store/Task";
import Notify from "../Notify";

@Component({})
export default class Index extends Vue {
  @Prop() data!: ITask[];
  @Prop() currentEditTask!: ITask;

  toggleCompleted(id: number) {
    taskModule.TOGGLE_COMPLETED(id);
  }
  mounted() {
    taskModule.SET_LIST_ELEMENT(this.$el);
    setTimeout(() => {
      this.$el.scrollTo({ top: this.$el.scrollHeight, behavior: 'smooth' });
    }, 10);
  }
}
</script>
<template>
  <ul>
    <li
      v-for="task in data"
      :key="task.id"
      :style="task.completed? 'text-decoration: line-through; font-style: italic':'text-decoration: none;'"
      :class="{active: currentEditTask && currentEditTask.id === task.id }"
    >
      <div class="name" @click="toggleCompleted(task.id)">
        <span>
          <input type="checkbox" :checked="task.completed" />
        </span>
        <span>{{task.name}}</span>
      </div>
      <div class="actions">
        <button @click="$emit('onDelete', task)">delete</button>
        <button @click="$emit('onEditTask', task)">edit</button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  /* margin: 10px 0; */
  /* padding-right: 2px; */
  list-style: none;
  min-width: 450px;
  /* height: 560px; */
  overflow-y: scroll;
}

@media only screen and (max-width: 480px) {
  ul {
    min-width: 100%;
  }
}

ul > li > div.name {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul > li > div.name {
  cursor: pointer;
  user-select: none;
}

ul > li > div.name > span:first-child {
  margin-right: 4px;
}

ul > li > div.name > span:first-child > input {
  cursor: pointer;
}

ul > li {
  background-color: var(--quinary);
  color: var(--white);
  padding: 20px;

  display: flex;
  justify-content: space-between;
  width: 100%;
}
ul > li.active {
  background-color: var(--tertiary);
  color: black;
}
ul > li.active > div.actions > button:last-child {
  font-style: italic;
}
ul > li:not(:last-child) {
  margin-bottom: 4px;
  border-radius: 3px;
}

ul > li > div > button {
  padding: 5px;
  cursor: pointer;
  border-radius: 2px;
  user-select: none;
}

ul > li > div > button:first-child {
  background-color: var(--negative);
  color: var(--white);
}

ul > li > div > button:last-child {
  margin-left: 3px;
}

::-webkit-scrollbar {
  width: 6px;
  cursor: pointer;
}

::-webkit-scrollbar-thumb {
  background-color: var(--tertiary);
  border-radius: 4px;
}

::-webkit-scrollbar-track {
  background-color: var(--primary);
}
</style>