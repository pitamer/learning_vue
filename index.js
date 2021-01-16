app = new Vue({
  el: "#app",
  data: {
    my_message: "A message that I have written",
    spans: [
      {
        name: "span 1",
        visible: true,
        color: "blue",
      },
      {
        name: "span 2",
        visible: true,
        color: "purple",
      },
      {
        name: "span 3",
        visible: true,
        color: "red",
      },
      {
        name: "span 4",
        visible: true,
        color: "yellow",
      },
      {
        name: "span 5",
        visible: true,
        color: "green",
      },
    ],
  },
});

setInterval(
    () => {
        app.spans.forEach(span => {
            setTimeout(() => {
                span.visible = false
            },
            1000 + 200*app.spans.indexOf(span))
            span.visible = true;
            span.name += ' |'
        })
    },
    2000
)
