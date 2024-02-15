const app = Vue.createApp({
    data() {
        return {
            name: "Akif Albayrak!",
            age: 23,
            imageUrl:
                "https://pbs.twimg.com/profile_images/1748265781593305089/b0FTzJ3q_400x400.jpg",
        };
    },
    methods: {
        favNumber() {
            return Math.random();
        },
    },
});

app.mount("#assignment");
