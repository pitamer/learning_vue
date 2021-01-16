app = new Vue ({
    el: '#app',
    data: {
        my_message: 'A message that I have written',
        span_1_visible: true,
        span_2_visible: false
    }
})

setInterval(
    () => {
        app.span_1_visible = !app.span_1_visible;
        app.span_2_visible = !app.span_2_visible
    },
    1000
)
