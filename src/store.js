import createStore from "unistore";
import axios from "axios";
// import { connect } from "tls";

const initialState = {
    avatar: "",
    email: "",
    username: "",
    isLogin: false,
}

export const store = createStore(initialState);

export const actions = store => ({
    setField: (state, event) => {
        return {[event.target.name]: event.target.value};
    },
    postLogout: state => {
        return {isLogin: false};
    },
    postLogin: async state => {
        const data = {username: state.username, password: state.password};
        await axios
        .post("https://api-todofancy.herokuapp.com/api/auth", data)
        .then(response => {
            console.log("postLogin res: ", response.data.user_data);
            if (response.data.hasOwnProperty("user_data")){
                store.setState({
                    isLogin: true,
                    avatar: response.data.user_data.avatar,
                    email: response.data.user_data.email,
                    username: response.data.user_data.username,
                })
            }
            console.log("postLog res: ", store.getState());
        })
        .catch(function(error){
            console.log(error)
        });
    },
})
