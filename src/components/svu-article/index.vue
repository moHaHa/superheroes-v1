<template>
  <div class="white--text">
    <v-card :color="'dark-grey'" dark class="rounded-xl">
      <div
        class="
          d-flex
          flex-no-wrap
          py-2
          paring-avatar-mobile
          px-2
          svu-white-border
        "
      >
        <v-avatar class="ma-3 rounded-lg avatar-mobile" size="225" tile>
          <v-img :src="item.image"></v-img>
        </v-avatar>
        <div>
          <v-card-title class="text-h6 mb-2" v-text="item.title"></v-card-title>

          <v-card-subtitle
            v-text="desSlice(item.description)"
          ></v-card-subtitle>

          <v-card-actions>
            <v-btn class="ml-2 mt-2" outlined rounded small>
              <a class="white--text" :href="item.url" target="_blank">
                read more
              </a>
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
  let item_d ={
        title: '5 Things I Wish I Knew When I Was Learning JavaScript',
        description:
          'JavaScript is the most difficult and the easiest programming language. But how is it possible? easiest programming language. easiest programming language. But how is  ',
        image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        url: 'https://google.com'
      } 
export default {
  name: 'svu-article',
  data () {
    return {
    }
  },
  methods: {
    desSlice (text) {
      if (typeof text === 'string') {
        let x = text.slice(0, 160)
        return `${x}...`
      } else {
        return text
      }
    }
  },
  props: {
    item: {
      type: Object,
      default: () => item_d
    },
    
  }
}
</script>

<style lang="scss">
@media (max-width: 900px) {
  .paring-avatar-mobile {
    flex-direction: column;
    .avatar-mobile {
      width: auto !important;
    }
  }
}
@media (min-width: 960px) {
  .paring-avatar-mobile {
    flex-direction: column;
    .avatar-mobile {
      width: auto !important;
    }
  }
}
@media (min-width: 1900px) {
  .paring-avatar-mobile {
    flex-direction: row;
    .avatar-mobile {
      width: 225px !important;
    }
  }
}
</style>
