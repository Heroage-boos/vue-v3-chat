<template>
  <div class="container boder">
    <div class="left">
      <div class="top">
        <input type="text" placeholder="Search" />
        <a href="javascript:;" class="search"></a>
      </div>
      <ul class="people">
        <li class="person" data-chat="person1">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
          <div>
            <span class="name">专业的openai</span>
            <span class="time">2:09 PM</span>
          </div>
          <span class="preview">I was wondering...</span>
        </li>
        <li class="person" data-chat="person1">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
          <div>
            <span class="name">专业的openai</span>
            <span class="time">2:09 PM</span>
          </div>
          <span class="preview">I was wondering...</span>
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="top">
        <span>To: <span class="name">Chat GTP</span></span>
      </div>
      <div class="chat" data-chat="person1">
        <div class="conversation-start">
          <span>Today, 6:48 AM</span>
        </div>
        <div v-for="(a, index) in content" :key="index" class="bubble "
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

.container {
  display: flex;
  height: 92vh;
  margin: 0px 20px;

  .left {
    flex-basis: 32.6%;
    border-right: 1px solid #ccc;
    background-color: var(--white);
    display: flex;
    flex-direction: column;

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
      list-style-type: none;
      display: flex;
      flex-direction: column;

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
    flex-grow: 1;
    display: flex;
    flex-direction: column;

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
      padding: 10px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .write {
      display: flex;
      margin-bottom: 10px;
      padding: 0 25px;

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
      height: 100%;
      width: 100%
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
</style>
