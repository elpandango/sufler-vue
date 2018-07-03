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
                <div v-show="textPost.error==='false'" class="alert alert-success text-left">
                  Всё прошло успешно!<br>
                  Текст сохранён на сервере.
                </div>
                <div v-show="textPost.error==='true'" class="alert alert-danger text-left">
                  Произошла ошибка!<br>
                  Текст не удалось сохранить.
                </div>
                <div v-show="textPost.error==='empty'" class="alert alert-danger text-left">
                  Поля не должны быть пустыми!
                </div>
                <div class="form-group">
                  <button
                    @click.prevent="suflerSubmit"
                    type="submit"
                    class="btn btn-success pull-left">Сохранить
                  </button>

                  <button @click="fetchData"
                          type="button"
                          class="btn btn-primary pull-right">Загрузить с базы
                  </button>
                </div>
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
          speed: '',
          text: '',
          error: null
        }
      }
    },
    methods: {
      suflerSubmit() {
        if (this.textPost.speed !== '' && this.textPost.text !== '') {
          axios.post('https://vuejs-http-a3463.firebaseio.com/data.json', this.textPost)
            .then(response => {
              this.textPost.error = 'false';
//            console.log(response);
            })
            .catch(error => {
              this.textPost.error = 'true';
            })
        } else {
          this.textPost.error = 'empty';
        }
      },
      fetchData() {
        axios.get('https://vuejs-http-a3463.firebaseio.com/data.json')
          .then(response => {
            this.textPost.speed = response.data.speed;
            this.textPost.text = response.data.text;
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

  .content {
    width: 100%;
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
