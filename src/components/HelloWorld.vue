<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Marcos Araujo Goulart
    </p>
    <h3>Meu links</h3>
    <ul>
      <li><a href="https://github.com/marcos-grocha" target="_blank" rel="noopener">github</a></li>
      <li><a href="https://www.linkedin.com/in/marcos-grocha/" target="_blank" rel="noopener">linkedin</a></li>
    </ul>
    <h3>Projetos Back-end</h3>
    <ul>
      <li><a href="https://github.com/marcos-grocha/paleva-app" target="_blank" rel="noopener">Palevá</a></li>
      <li><a href="https://github.com/marcos-grocha/warehouse-app" target="_blank" rel="noopener">Warehouse</a></li>
      <li><a href="https://github.com/marcos-grocha/movie-manager" target="_blank" rel="noopener">Movie-Manager</a></li>
    </ul>
    <h3>Projetos Front-end</h3>
    <ul>
      <li><a href="https://github.com/marcos-grocha/paleva-cozinha-vuejs" target="_blank" rel="noopener">palevá</a></li>
      <li><a href="https://github.com/marcos-grocha/warehouse-vuejs" target="_blank" rel="noopener">warehouse</a></li>
      <li><a href="https://github.com/marcos-grocha/censo-galatico" target="_blank" rel="noopener">star-wars</a></li>
      <li><a href="https://github.com/marcos-grocha/contact-book" target="_blank" rel="noopener">contact-book</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
