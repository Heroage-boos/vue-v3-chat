<template>
    <div class="page">
        <div class="container">
            <div class="left">
                <div class="login">Login</div>
                <div class="eula">描述</div>
            </div>
            <div class="right">
                <svg viewBox="0 0 320 300">
                    <defs>
                        <linearGradient id="linearGradient" inkscape:collect="always" x1="13" y1="193.49992" x2="307"
                            y2="193.49992" gradientUnits="userSpaceOnUse">
                            <stop id="stop876" style="stop-color: #ff00ff" offset="0" />
                            <stop id="stop878" style="stop-color: #ff0000" offset="1" />
                        </linearGradient>
                    </defs>
                    <path
                        d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
                </svg>
                <div class="form">
                    <label for="email">username</label>
                    <input id="email" v-model="username" type="email" />
                    <label for="password">Password</label>
                    <input id="password" v-model="password" type="password" />
                    <div class="login-submit" @click="submit">Submit</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { Login } from "@/api/login/login"

export default defineComponent({
    name: 'NavLogin',
    data: () => {
        return {
            username: '',
            password: ''
        }
    },
    computed: {
        ...mapGetters('auth', ['isLoggedIn'])
    },
    methods: {
        ...mapActions('auth', ['login', 'logout']),

        submit() {
            console.log('submit-----22', this.username, this.isLoggedIn)
            // 同步登陆信息  保存token 状态存储
            Login({
                username: this.username,
                password: this.password,
            }).then((res) => {
                if (res.code === 200) {
                    console.log("res", res)
                    const { data } = res
                    // 保存token
                    if (data['user_name']) {
                        // 更改登录状态
                        this.login(true)
                        this.$router.push('/chat')
                    }

                }
            }, (err) => {

            })

        }
    },

})
</script>
<style lang="scss" scoped>
@import url('https://rsms.me/inter/inter-ui.css');

::selection {
    background: #2d2f36;
}

::-webkit-selection {
    background: #2d2f36;
}

::-moz-selection {
    background: #2d2f36;
}

.page {
    background: #e2e2e5;
    display: flex;
    flex-direction: column;
    // height: calc(100% - 40px);
    height: 100%;
    position: absolute;
    place-content: center;
    // width: calc(100% - 40px);
    width: 100%;
    align-items: center;
}

@media (max-width: 767px) {
    .page {
        height: auto;
        margin-bottom: 20px;
        padding-bottom: 20px;
    }
}

.container {
    display: flex;
    height: 320px;
    /* margin: 0 auto; */
    width: 640px;
}

@media (max-width: 767px) {
    .container {
        flex-direction: column;
        height: 630px;
        width: 320px;
    }
}

.left {
    background: white;
    height: calc(100% - 40px);
    top: 20px;
    position: relative;
    width: 50%;
}

@media (max-width: 767px) {
    .left {
        height: 100%;
        left: 20px;
        width: calc(100% - 40px);
        max-height: 270px;
    }
}

.login {
    font-size: 50px;
    font-weight: 900;
    margin: 50px 40px 40px;
}

.eula {
    color: #999;
    font-size: 14px;
    line-height: 1.5;
    margin: 40px;
}

.right {
    background: #474a59;
    box-shadow: 0px 0px 40px 16px rgba(0, 0, 0, 0.22);
    color: #f1f1f2;
    position: relative;
    width: 50%;
}

@media (max-width: 767px) {
    .right {
        flex-shrink: 0;
        height: 100%;
        width: 100%;
        max-height: 350px;
    }
}

svg {
    position: absolute;
    width: 320px;
}

path {
    fill: none;
    stroke: url(#linearGradient);
    stroke-width: 4;
    stroke-dasharray: 240 1386;
}

.form {
    margin: 40px;
    position: absolute;
}

label {
    color: #c2c2c5;
    display: block;
    font-size: 14px;
    height: 16px;
    margin-top: 20px;
    margin-bottom: 5px;
}

input {
    background: transparent;
    border: 0;
    color: #f2f2f2;
    font-size: 20px;
    height: 30px;
    line-height: 30px;
    outline: none !important;
    width: 100%;
}

input::-moz-focus-inner {
    border: 0;
}

#submit {
    color: #707075;
    margin-top: 40px;
    transition: color 300ms;
}

#submit:focus {
    color: #f2f2f2;
}

#submit:active {
    color: #d0d0d2;
}

.login-submit {
    text-align: center;
    margin-top: 8px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
}
</style>
