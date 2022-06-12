<template>
  <div class="svu-nav">
    <ul class="svu-nav-ul">
      <li
        class="svu-nav-li"
        :to="item.path"
        v-for="(item, index) in navList"
        :key="index"
      >
        <router-link class="" :to="item.path">{{ item.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'svu-nav',
  data () {
    return {
      navList: [
        { path: '/svu/school/home', text: 'الرئيسية' },
        { path: '/svu/school/courses', text: 'الكورسات' },
        { path: '/svu/school/library', text: 'المكتبة' }
      ]
    }
  }
}
</script>

<style lang="scss">
.svu-nav {
  display: flex;
  align-items: center;
  .svu-nav-ul {
    display: flex;
    align-items: center;
    padding: 0;
    padding-inline-start: 3rem;
  }
  .svu-nav-li a {
    margin-inline-end: 2rem;
    color: var(--v-med-grey-base);
    position: relative;
    display: block;
    padding-block: 12px;
    transition: all 0.13s ease-out;
  }
  .svu-nav-li a:hover {
    color: var(--v-light-grey-base);
    transition: transform 0.13s ease-out;
  }
  .svu-nav-li a::after {
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 10px;
    right: calc(50% - 3px);
    bottom: 0;
    transform: scale(0);
    background-color: var(--v-white-base);
    transition: transform 0.13s ease-out;
  }
  .svu-nav-li a.router-link-active {
    color: var(--v-white-base);
    transform: translateY(-5px);
  }
  .svu-nav-li a.router-link-active::after {
    color: var(--v-white-base);
    width: 6px;
    height: 6px;
    transform: scale(1);
  }
}
</style>