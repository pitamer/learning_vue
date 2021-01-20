Vue.component("todo-item", {
  props: ["todo"],
  template: `<li>{{ todo.text }}</li>`,
});

app = new Vue({
  el: "#app",
  data: {
    title: "A TODOs app",
    subTitle: "'cause I'm feeling creative today",
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
      },
    ],
    newTodoInput: "",
  },
  methods: {
    toggleTodo: (todo) => {
      todo.done = !todo.done;
    },
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
  },
});
