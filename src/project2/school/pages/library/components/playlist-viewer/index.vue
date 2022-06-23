<template>
  <div>
    <v-card :color="'dark-grey'" dark class="rounded-xl">
      <div class="d-flex flex-no-wrap  svu-white-border">
        <iframe
      :width="width"
      :height="height"
      :src="`https://www.youtube.com/embed/videoseries?list=${getId(item.url)}`"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
    </v-card>
  </div>
</template>

<script>
import _ from 'lodash'
let item_d = {
    // url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe'
    url: 'https://www.youtube.com/watch?v=X1ulCwyhCVM&list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe&index=1'
}
export default {
 methods:{
  getId(str){
    console.log(str);
    let list = _.chain(str)
    .replace('?', '')
    .split('&') 
    .map(_.partial(_.split, _, '=', 2)) 
    .fromPairs() 
    .value()
    console.log(list);
    let id =  list['https://www.youtube.com/playlistlist']? list['https://www.youtube.com/playlistlist'] : list['list'] 
    return id
  }
 },
 props: {
    width: {
      type: [String, Number],
      default: () => 560
    },
    height: {
      type: [String, Number],
      default: () => 315
    },
    item: {
      type: Object,
      default: ()=> item_d
    }
  }
}
</script>

<style></style>
