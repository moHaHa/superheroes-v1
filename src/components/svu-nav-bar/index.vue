<template>
  <div>
    <div class="header">
      <img class="logo" :src="logo" alt="logo" />
      <nav>
        <ul class="nav-links">
          <li v-for="(item, index) in links" :key="index">
            <router-link :to="item.link">{{ item.name }} </router-link>
          </li>
        </ul>
      </nav>

      <div class="boto">
        <a class="register" href="#"
          ><button class="register">register</button></a
        >
        <a class="login" href="#"><button class="login">login</button></a>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/svu-assets/logo.svg'
export default {
  name: 'svu-nav-bar',
  data () {
    return {
      logo,
      links: [
        { name: 'Home', link: '/home' },
        { name: 'Courses', link: '/courses' },
        { name: 'Library', link: '/library' }
      ]
    }
  }
}
</script>

<style>
li a button {
  font-weight: 500;
  font-size: 16px;
  color: #eee;
  text-decoration: none;
}
.header {
  display: flex;
  /*  justify-content: space-between;*/
  align-items: center;
  padding: 12px 10%;
  height: 50px;
  background-color: #1b1b1b;
}
.logo {
  cursor: pointer;
  background-color: #1b1b1b;
}
.nav-links {
  list-style: none;
  background-color: #1b1b1b;
}
.nav-links li {
  display: inline-block;
  padding: 0px 20px;
  background-color: #1b1b1b;
}
.nav-links li a {
  color: #858585;
  text-decoration: none;
  background-color: #1b1b1b;
  transition: all 0.3s ease 0s;
}
.nav-links li a:hover {
  color: #ffffff;
}

button {
  padding: 9px 25px;
  border-radius: 5px;
}
.boto {
  position: absolute;
  right: 150px;
}
.login {
  color: #ffffff;
  border: 1px solid #ffffff;
  background-color: #0c0c0c;
  text-align: center;
}
.login button:hover {
  background-color: #858585;
  color: #ffffff;
}
.register button:hover {
  background-color: #858585;
}
</style>