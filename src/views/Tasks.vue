
<script lang="ts">
import { Vue, Component, Prop, Ref } from "vue-property-decorator";

import Notify, { EColor } from "../components/Notify";

import { taskModule, ITask } from "@/store/Task";

import { mapState } from "vuex";

import ListTasks from "../components/ListTasks/index.vue";

import { mapGetters } from "vuex";
// import { Task as TaskType, StateTypes } from "../store/Tasks/types";

import Dialog, { ETypeDialog } from "../components/Dialog";

@Component({
  // computed:mapState('Task', ['data'])
  components: {
    ListTasks
  }
  // computed: {
  //   ...mapGetters("Task", ["filterTasks"])
  // }
})
export default class Tasks extends Vue {
  @Ref("inputRef") private input!: HTMLInputElement;

  // @Ref("listRef") private list!: Vue;

  private text: string = "";
  // private data = taskModule.data;

  private currentEditTask: ITask | null = null;

  async mounted() {
    await taskModule.iniData();
  }

  get filterTasks() {
    return taskModule.filterTasks;
  }
  async saveTask() {
    let task: ITask;
    if (this.currentEditTask) {
      task = { ...this.currentEditTask, name: this.text };
    } else {
      task = {
        name: this.text,
        completed: false
      };
    }
    const notify = await taskModule.SAVE_TASK(task);
    new Notify(notify);

    if (notify.color === EColor.POSITIVE) {
      if (!this.currentEditTask) {
        const list = taskModule.listElement;
        list?.scrollTo({ top: list.scrollHeight, behavior: "smooth" });
      }
      this.reset();
    }
  }
  onEditTask(task: ITask) {
    if (task.id === this.currentEditTask?.id) {
      this.reset();
      return;
    }
    this.text = task.name;
    this.currentEditTask = task;

    if (this.input) {
      this.input.selectionStart = this.input.value.length;
      this.input.selectionEnd = this.input.value.length;
      this.input.focus();
    }
  }
  async onDelete(task: ITask) {
    this.currentEditTask = task;

    new Dialog({
      type: ETypeDialog.CONFIRM,
      title: "Eliminar Tarea?",
      content: `Seguro Eliminar la tarea <strong>${task.name}</strong> ?`,
      onOk: async () => {
        const id = task.id;
        if (id !== undefined) {
          const notify = await taskModule.DELETE_TASK(id);
          new Notify(notify);
          this.reset();

        }
      },
      onCancel: () => {
        this.reset();
      }
    });
  }

  reset() {
    this.text = "";
    this.currentEditTask = null;
    setTimeout(() => {
      this.input?.focus();
    }, 10);
  }
}
</script>

<template>
  <div class="Tasks">
    <form @submit.prevent="saveTask" @reset="reset">
      <input type="text" v-model="text" placeholder="add/edit task" ref="inputRef" />
      <button type="submit">save</button>
      <button type="reset">cancel</button>
    </form>
    <ListTasks
      :data="filterTasks"
      :currentEditTask="currentEditTask"
      @onEditTask="onEditTask"
      @onDelete="onDelete"
    />
  </div>
</template>

<style lang="css">
div.Tasks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  position: relative;
  max-height: calc(100vh - 44px - 70px);
}

form {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-width: 450px;
  margin-bottom: 10px;
}
form > input {
  background-color: var(--white);
  text-transform: capitalize;
  min-width: 320px;
}
@media only screen and (max-width: 480px) {
  div.Tasks {
    align-items: flex-start;
    padding: 0;
    /* max-height: calc(100vh - 44px - 139px); */
  }

  form {
    min-width: 100%;
    margin: 5px 0;
    justify-content: center;
  }

  form > button,
  form > input {
    padding: 10px 5px !important;
  }
  form > input {
    min-width: auto;
  }
}
form > button {
  cursor: pointer;
  background-color: var(--tertiary);
}

form > input::placeholder {
  opacity: 0.5;
  font-weight: normal;
}
form > button,
form > input {
  font-size: 1rem;
  padding: 10px;
  color: var(--quinary);
  margin-right: 2px;
  border-radius: 2px;
  border: 1px solid var(--tertiary);
  transition: all 0.2 ease-in-out;
  font-weight: 500;
}

form > button:hover,
form > input:hover,
form > button:focus,
form > input:focus {
  border: 1px solid var(--tertiary);
  box-shadow: 0 0 3px var(--tertiary);
}
</style>