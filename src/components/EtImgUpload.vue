<template>
  <div class="et-img-upload" :style="{'height':height,'width':width}">
    <input type="file" @change="readImgData" ref="inputFile" class="hidden">
    <div class="bt-edit" @click="edit">
      <i class="material-icons">edit</i>
      <span>Edit</span>
    </div>
    <img :src="urlImg" :style="{'height':height,'width':width}">
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  props: {
    height: {
      type: String,
      default: '200px',
    },
    width: {
      type: String,
      default: '280px',
    },
    url: {
      type: String,
      default: 'statics/upload-image-size.svg',
    },
  },
  data() {
    return {
      urlImg: this.url,
    }
  },
  methods: {
    ...mapMutations('util', ['setCurrentUploadImageData']),
    readImgData(event) {
      let reader = new FileReader()
      reader.onload = () => {
        this.urlImg = reader.result
        this.setCurrentUploadImageData(reader.result)
      }
      reader.readAsDataURL(event.target.files[0])
    },
    edit() {
      this.$refs.inputFile.click()
    },
  },
}
</script>
<style lang="stylus" scoped>
.et-img-upload
  border-radius 10px
  background-color #d9d9d9
  position relative

img
  border-radius 10px

.bt-edit
  background-color #f2f2f2
  width min-content
  display flex
  border-radius 6px
  font-size 16px
  position absolute
  right 10px
  top 10px
  padding 5px
  cursor pointer
</style>
