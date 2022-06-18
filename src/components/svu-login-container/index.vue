<template>
  <div class="svu-login-container tw-h-full">
    <v-img class="tw-h-full" aspect-ratio="2" :src="img">
      <template v-if="true" v-slot:default>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-col :md="cols" :cols="12" class="mb-9">
            <div class="svu-login-form">
              <v-row justify="center">
                <v-col cols="9">
                  <v-row>
                    <v-col cols="12">
                      <div class="text-h3 mb-9 text-center white--text">
                        {{ title }}
                      </div>
                    </v-col>
                  </v-row>
                  <div class="py-6"></div>
                  <slot />
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </template>
    </v-img>
  </div>
</template>

<script>
import img from './assets/blur-container.png'
export default {
  name: 'svu-login-container',
  props: {
    cols: {
      type: [String, Number]
    },
    title: {
      type: [String]
    }
  },
  data () {
    return {
      img
    }
  }
}
</script>

<style>
.svu-login-container {
  /* min-height: 100vh; */
}
.svu-login-form {
  background-color: #ffffff0a;

  padding-block: 4rem;
  border-radius: 15px;
  min-height: 70vh;
  /* min-height: 70vh; */
}
</style>
