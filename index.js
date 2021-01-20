Vue.component("app-title", {
  data: function() {
    return {
      title: "A TODOs app",
      subTitle: "'cause I'm feeling creative today",
    }
  },
  template: `<div class="title">
              <h1>{{ title }}</h1>
              <h5>{{ subTitle }}</h5>
            </div>`
});

Vue.component("todo-item", {
  props: ["todo"],
  data: () => {
    return {
      toggleTodo: (todo) => {
        todo.done = !todo.done;
      },
    };
  },
  template: `<li
                v-bind:class="[{ 'done': todo.done }, 'todo']"
                v-on:click="toggleTodo(todo)"
            >
                {{ todo.text }}
            </li>`,
});

Vue.component("new-todo-form", {
  props: ["todo"],
  data: () => {
    return {
      newTodoInput: "",
      addTodo: (newTodoInput) => {
        todo = {
          text: newTodoInput,
          done: false,
        };
        if (todo.text) {
          app.todos.push(todo);
          app.newTodoInput = "";
        } else {
          console.log("Nay.");
        }
      },
    };
  },
  template: `<div class="new-todo-container">
            <form v-on:submit.prevent class="new-todo-form">
                <input
                    type="text"
                    class="new-todo-input"
                    v-model="newTodoInput"
                >
                <button
                    type="submit"
                    class="new-todo-button"
                    v-on:click="addTodo(newTodoInput)"
                >
                    Add!
                </button>
            </form>
        </div>`,
});

app = new Vue({
  el: "#app",
  data: {
    todos: [
      {
        text: "Take hugsy for a walk",
        done: false,
      },
      {
        text: "Watch an episode of Silicon Valley",
        done: false,
      },
      {
        text: "Answer the reserve army service mail",
        done: false,
      },
      {
        text: "Meditate for 15 minutes",
        done: false,
      }
    ]
  }
});
