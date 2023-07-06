<template>
  <div class="wrapper">
    <div class="container boder">
      <!-- <div class="left">
                <div class="top">
                    <input type="text" placeholder="Search" />
                    <a href="javascript:;" class="search"></a>
                </div>
                <ul class="people">
                    <li class="person" data-chat="person1">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
                        <span class="name">专业的openai</span>
                        <span class="time">2:09 PM</span>
                        <span class="preview">I was wondering...</span>
                    </li>
                    <li class="person" data-chat="person1">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
                        <span class="name">Thomas Bangalter</span>
                        <span class="time">2:09 PM</span>
                        <span class="preview">I was wondering...</span>
                    </li>
                </ul>
            </div> -->
      <div class="right">
        <div class="top">
          <span>To: <span class="name">Chat GTP</span></span>
        </div>
        <div class="chat" data-chat="person1">
          <div class="conversation-start">
            <span>Today, 6:48 AM</span>
          </div>
          <div v-for="(a, index) in content" :key="index" class="bubble you"
            :class="{ me: a.send_id == 'me', you: a.send_id == 'you' }">
            <!-- v-html="a.task_info " -->
            <div v-if="a.send_id == 'me'" class="flex">
              <div class="">
                <div class="padding-r-5 w100 text-right">GTP</div>
                <div class="white-space">
                  {{ a.task_info }}
                </div>
              </div>
              <div class="chat-hander-icons ml5 flex-shirt">
                <img src="@/assets/icons/chatgpt-icon.svg" />
              </div>
            </div>
            <div v-if="a.send_id == 'you'" class="flex-end">
              <div class="chat-hander-icons mr5 flex-shirt">
                <img src="@/assets/icons/unnamed.webp" />
              </div>
              <div class="flex-column">
                <div>xiaobai</div>
                <div class="white-space">
                  {{ a.task_info }}
                </div>
              </div>
            </div>

            <!-- <img
                                :src="a.send_id == 'me' ? '@/assets/icons/chatgpt-icon.svg' : '@/assets/icons/unnamed.webp'" /> -->
          </div>
        </div>

        <div class="write">
          <div href="javascript:;" class="write-link attach"></div>
          <input v-model="send_info" type="text" placeholder="Enter" @keyup="inputEnterUp($event)" />
          <div href="javascript:;" class="write-link smiley"></div>
          <div class="write-link send" @click="handlerSend()"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'


export default defineComponent({
  name: 'NavChat',
  data: () => {
    return {
      openAiMessage: '',
      send_info: '',
      content: [
        {
          send_id: '', // 发送人id
          task_id: '', // 接收人id
          send_date: '', // 发送时间
          task_date: '', // 接收时间
          task_info: '' // info
          // 其他...
        }
        // {
        //     send_id: "you",//发送人id
        //     task_id: "me",//接收人id
        //     send_date: "",//发送时间
        //     task_date: "",//接收时间
        //     task_info: "hello!"//info
        //     //其他...
        // },
        // {
        //     send_id: "me",//发送人id
        //     task_id: "you",//接收人id
        //     send_date: "",//发送时间
        //     task_date: "",//接收时间
        //     task_info: "too me!"//info
        //     //其他...
        // }
      ]
    }
  },

  methods: {
    // 定位到聊天框底部
    intoChatBottomPositon() {
      const container = this.$el.querySelector('.chat')
      container.scrollTop = container.scrollHeight
    },

    inputEnterUp(d: KeyboardEvent) {
      if (d.key === 'Enter') {
        this.handlerSend()
      }

      console.log('d', d)
    },

    handlerSend() {
      const sendContent = this.send_info
      this.intoChatBottomPositon()
      this.content.push({
        send_id: 'you', // 发送人id
        task_id: 'me', // 接收人id
        send_date: '', // 发送时间
        task_date: '', // 接收时间
        task_info: sendContent // info
        // 其他...
      })
      this.send_info = ''
      axios({
        method: 'post',
        url: 'https://api.openai.com/v1/chat/completions',
        data: {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: sendContent }]
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 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'
        }
      }).then(
        (res) => {
          console.log('res', res)
          this.openAiMessage = res.data.choices
          res.data.choices.forEach((item: { [x: string]: any }) => {
            this.content.push({
              send_id: 'me', // 发送人id
              task_id: 'you', // 接收人id
              send_date: '', // 发送时间
              task_date: '', // 接收时间
              task_info: item.message.content // info
              // 其他...
            })
            this.intoChatBottomPositon()
          })
        },
        (error) => {
          console.log('error', error)
        }
      )
    }
  }
})
</script>

<style lang="scss" scoped>
@mixin font-bold {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
}

@mixin font {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
}

@mixin placeholder {
  &::-webkit-input-placeholder {
    @content;
  }

  &:-moz-placeholder {
    @content;
  }

  &::-moz-placeholder {
    @content;
  }

  &:-ms-input-placeholder {
    @content;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

:root {
  --white: #fff;
  --black: #000;
  --bg: #f8f8f8;
  --grey: #999;
  --dark: #1a1a1a;
  --light: #e6e6e6;
  --wrapper: 1000px;
  --blue: #00b0ff;
}

.wrapper {
  position: relative;
  left: 50%;
  width: var(--wrapper);
  height: 800px;
  transform: translate(-50%, 0);
}

.container {
  position: relative;
  top: 50%;
  left: 50%;
  width: 85%;
  height: 95%;
  background-color: var(--white);
  transform: translate(-50%, -50%);

  .left {
    float: left;
    width: 32.6%;
    height: 100%;
    border-right: 1px solid #ccc;
    background-color: var(--white);

    .top {
      position: relative;
      width: 100%;
      height: 74px;
      padding: 20px;

      &:after {
        position: absolute;
        bottom: 0;
        left: 50%;
        display: block;
        width: 80%;
        height: 1px;
        content: '';
        background-color: var(--light);
        transform: translate(-50%, 0);
      }
    }

    input {
      float: left;
      width: 96%;
      height: 36px;
      padding: 0 15px;
      border: 1px solid var(--light);
      background-color: #eceff1;
      border-radius: 21px;
      @include font();

      &:focus {
        outline: none;
      }
    }

    a.search {
      display: block;
      float: left;
      width: 42px;
      height: 42px;
      margin-left: 10px;
      border: 1px solid var(--light);
      background-color: var(--blue);
      background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/name-type.png');
      background-repeat: no-repeat;
      background-position: top 12px left 14px;
      border-radius: 50%;
    }

    .people {
      border-right: 1px solid var(--light);
      border-left: 1px solid var(--light);
      width: calc(100% + 2px);

      .person {
        position: relative;
        width: 100%;
        padding: 10px 12px 10px 22px;
        cursor: pointer;
        background-color: var(--white);

        &:after {
          position: absolute;
          bottom: 0;
          left: 50%;
          display: block;
          width: 80%;
          height: 1px;
          content: '';
          background-color: var(--light);
          transform: translate(-50%, 0);
        }

        img {
          float: left;
          width: 40px;
          height: 40px;
          margin-right: 12px;
          border-radius: 50%;
          object-fit: cover;
        }

        .name {
          font-size: 14px;
          line-height: 22px;
          color: var(--dark);
          @include font-bold;
        }

        .time {
          font-size: 14px;
          position: absolute;
          top: 16px;
          right: 10%;
          padding: 0 0 5px 5px;
          color: var(--grey);
          background-color: var(--white);
        }

        .preview {
          font-size: 14px;
          display: inline-block;
          overflow: hidden !important;
          width: 70%;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: var(--grey);
        }

        &.active,
        &:hover {
          // margin-top: -1px;
          // margin-left: -1px;
          // padding-top: 13px;
          border: 0;
          background-color: #dbd2d2;
          // width: calc(100% + 2px);
          // padding-left: calc(10% + 1px);

          span {
            color: var(--white);
            background: transparent;
          }

          &:after {
            display: none;
          }
        }
      }
    }
  }

  .right {
    position: relative;
    float: left;
    // width: 67.4%;
    width: 100%;
    height: 100%;

    .top {
      width: 100%;
      height: 47px;
      padding: 15px 29px;
      background-color: #eceff1;

      span {
        font-size: 15px;
        color: var(--grey);

        .name {
          color: var(--dark);
          @include font-bold;
        }
      }
    }

    .chat {
      position: relative;
      // display: none;
      overflow: auto;
      padding: 0 35px 92px;
      border-width: 1px 1px 1px 0;
      border-style: solid;
      border-color: var(--light);
      height: calc(100% - 148px);
      justify-content: flex-end;
      flex-direction: column;

      &.active-chat {
        display: block;
        display: flex;

        .bubble {
          transition-timing-function: cubic-bezier(0.4, -0.04, 1, 1);

          @for $i from 1 through 10 {
            &:nth-of-type(#{$i}) {
              animation-duration: 0.15s * $i;
            }
          }
        }
      }
    }

    .write {
      position: absolute;
      bottom: 29px;
      left: 30px;
      height: 42px;
      padding-left: 8px;
      border: 1px solid var(--light);
      background-color: #eceff1;
      width: calc(100% - 58px);
      border-radius: 5px;

      input {
        font-size: 16px;
        float: left;
        // width: 347px;
        width: 94%;
        height: 40px;
        padding: 0 10px;
        color: var(--dark);
        border: 0;
        outline: none;
        background-color: #eceff1;
        @include font;
      }

      .write-link {
        cursor: pointer;

        &.attach {
          &:before {
            display: inline-block;
            float: left;
            width: 20px;
            height: 42px;
            content: '';
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/attachment.png');
            background-repeat: no-repeat;
            background-position: center;
          }
        }

        &.smiley {
          &:before {
            display: inline-block;
            float: left;
            width: 20px;
            height: 42px;
            content: '';
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/smiley.png');
            background-repeat: no-repeat;
            background-position: center;
          }
        }

        &.send {
          &:before {
            display: inline-block;
            float: left;
            width: 20px;
            height: 42px;
            margin-left: 11px;
            content: '';
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/send.png');
            background-repeat: no-repeat;
            background-position: center;
          }
        }
      }
    }

    .bubble {
      font-size: 16px;
      position: relative;
      display: inline-block;
      clear: both;
      margin-bottom: 8px;
      padding: 13px 14px;
      vertical-align: top;
      border-radius: 5px;

      &:before {
        position: absolute;
        top: 19px;
        display: block;
        width: 8px;
        height: 6px;
        content: '\00a0';
        transform: rotate(29deg) skew(-35deg);
      }

      &.you {
        float: left;
        color: var(--white);
        background-color: var(--blue);
        align-self: flex-start;
        animation-name: slideFromLeft;

        &:before {
          left: -3px;
          background-color: var(--blue);
        }
      }

      &.me {
        float: right;
        color: var(--dark);
        background-color: #eceff1;
        align-self: flex-end;
        animation-name: slideFromRight;

        &:before {
          right: -3px;
          background-color: #eceff1;
        }
      }

      .chat-hander-icons {
        width: 36px;
        height: 36px;
        // border-radius: 50%;
        // border: solid 1px red;
        overflow: hidden;
        position: relative;

        >img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }
      }
    }

    .conversation-start {
      position: relative;
      width: 100%;
      margin-bottom: 27px;
      text-align: center;
      padding-top: 10px;

      span {
        font-size: 14px;
        display: inline-block;
        color: var(--grey);

        &:before,
        &:after {
          position: absolute;
          top: 10px;
          display: inline-block;
          width: 30%;
          height: 1px;
          content: '';
          background-color: var(--light);
        }

        &:before {
          left: 0;
        }

        &:after {
          right: 0;
        }
      }
    }
  }
}

@keyframes slideFromLeft {
  0% {
    margin-left: -200px;
    opacity: 0;
  }

  100% {
    margin-left: 0;
    opacity: 1;
  }
}

@-webkit-keyframes slideFromLeft {
  0% {
    margin-left: -200px;
    opacity: 0;
  }

  100% {
    margin-left: 0;
    opacity: 1;
  }
}

@keyframes slideFromRight {
  0% {
    margin-right: -200px;
    opacity: 0;
  }

  100% {
    margin-right: 0;
    opacity: 1;
  }
}

@-webkit-keyframes slideFromRight {
  0% {
    margin-right: -200px;
    opacity: 0;
  }

  100% {
    margin-right: 0;
    opacity: 1;
  }
}
</style>
