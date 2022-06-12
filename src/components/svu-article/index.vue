<template>
  <div class="white--text">
    <v-card :color="'dark-grey'" dark class="rounded-xl">
      <div class="d-flex flex-no-wrap py-2 px-2 svu-white-border">
        <v-avatar class="ma-3 rounded-lg" size="225" tile>
          <v-img :src="item.image"></v-img>
        </v-avatar>
        <div>
          <v-card-title class="text-h6 mb-2" v-text="item.title"></v-card-title>

          <v-card-subtitle
            v-text="desSlice(item.description)"
          ></v-card-subtitle>

          <v-card-actions>
            <v-btn class="ml-2 mt-2" outlined rounded small>
              <a class="white--text" :href="item.url" target="_blank"> read more </a>
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import img from '@/assets/svu-course.png'
export default {
  name: 'svu-article',
  data () {
    return {
      item: {
        title: '5 Things I Wish I Knew When I Was Learning JavaScript',
        description:
          'JavaScript is the most difficult and the easiest programming language. But how is it possible? easiest programming language. easiest programming language. But how is  ',
        image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        url: 'https://google.com'
      }
    }
  },
  methods: {
    desSlice (text) {
      if (typeof text === 'string') {
        let x = text.slice(0, 160)
        return x + '...'
      } else {
        return text
      }
    }
  },
  props: {
    title: {
      type: String,
      default: () => 'كورس من الجامعة الافتراضية السورية في برمجة الويب'
    },
    image: {
      type: String,
      default: () => img
    },
    lessons: {
      type: [String, Number],
      default: () => 23
    },
    hours: {
      type: [String, Number],
      default: () => 10
    },
    price: {
      type: [String, Number],
      default: () => 10
    }
  }
}
</script>

<style></style>
