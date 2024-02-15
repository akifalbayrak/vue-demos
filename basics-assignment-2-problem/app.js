const app = Vue.createApp(
    {
        data(){
            return {
                confirmname:"",
                username:""
            }
        },
        methods:{
            showAlert(){
                alert("selam dunya")
            },
            showName(event){
                this.username = event.target.value;
            },
            showSecondName(event){
                this.confirmname = event.target.value;
            }
        }
    }
)
app.mount("#assignment")