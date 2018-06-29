<template>
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                  aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">

            <router-link tag="li" to="/">
              <a>Home</a>
            </router-link>
            <router-link tag="li" to="/sufler">
              <a>Sufler</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <div class="flex-center position-ref">
      <div class="content">
        <h1 class="m-b-md">
          <!--Главная страница суфлера.-->
        </h1>

        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <form action="" method="post">
                <div class="form-group">
                  <p class="text-left"><strong>Текст статьи:</strong></p>
                  <textarea class="form-control"
                            rows="5"
                            id="text"
                            name="text"
                            required
                            v-model="textPost.text"
                            placeholder="Введите текст сюда"></textarea>
                </div>
                <div class="form-group">
                  <p class="text-left"><strong>Скорость прокрутки статьи:</strong></p>
                  <input type="number"
                         class="form-control"
                         v-model="textPost.speed"
                         id="speed"
                         required>
                </div>
                <button
                  @click.prevent="suflerSubmit"
                  type="submit"
                  class="btn btn-success">Сохранить
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        textPost: {
          speed: 0,
          text: ''
        }
      }
    },
    methods: {
      suflerSubmit() {
        alert(123);
        axios.post('https://sufler-vue.firebaseio.com/data.json', this.textPost)
          .then(response => {
            console.log(response);
          })
      }
    }
  }
</script>
<style scoped>
  html, body {
    background-color: #fff;
    color: #636b6f;
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    height: 100vh;
    margin: 0;
  }

  .full-height {
    height: 100vh;
  }

  .flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .position-ref {
    position: relative;
  }

  .top-right {
    position: absolute;
    right: 10px;
    top: 18px;
  }

  .content {
    text-align: center;
  }

  .title {
    font-size: 84px;
  }

  .links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  .m-b-md {
    margin-bottom: 30px;
  }
</style>
