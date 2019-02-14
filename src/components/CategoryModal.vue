<template>
  <q-modal no-backdrop-dismiss no-esc-dismiss v-model="isModalOpened">
    <q-modal-layout class="style-modal">
      <q-toolbar slot="header" color="secondary">
        <q-btn @click="isModalOpened = false" icon="keyboard_arrow_left" class="q-mr-md" :disabled="getIsLoading" wait-for-ripple color="primary"/>
        <q-btn :loading="getIsLoading" :color="getEditingRec.id?'primary':'secondary'">
          <q-icon :name="getEditingRec.id?'save':'add'" size="25px"/>
          <q-spinner-pie slot="loading" size="25px"/>
        </q-btn>
        <q-toolbar-title>{{getEditingRec.name}}</q-toolbar-title>
      </q-toolbar>
      <div class="row q-ma-md">
        <div class="col-6">
          <q-field icon="menu" label="Main Category" label-width="3">
            <q-select
              v-model="getEditingRec.mainCategoryId"
              placeholder="Please select main category"
              :options="getRecs.map(opt=>({label:opt.name,value:opt.id}))"
            />
          </q-field>
          <q-field icon="label" label="Name" label-width="3">
            <q-input v-model="getEditingRec.name"/>
          </q-field>
          <q-field icon="description" label="Desc" label-width="3">
            <q-input v-model="getEditingRec.desc" type="textarea" rows="4"/>
          </q-field>
        </div>
        <div class="col-6 q-pl-md">
          <et-img-upload :url="'statics/'+getEditingRec.img"/>
        </div>
      </div>
    </q-modal-layout>
  </q-modal>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import etImgUpload from './EtImgUpload'
export default {
  components: {
    etImgUpload,
  },
  computed: {
    ...mapGetters('category', ['getIsLoading', 'getEditingRec']),
    ...mapGetters('maincategory', ['getRecs']),
    isModalOpened: {
      get() {
        return this.$store.getters['category/getIsModalOpened']
      },
      set(val) {
        this.$store.commit('category/setIsModalOpened', val)
      },
    },
  },
  methods: {
    ...mapActions('maincategory', ['fetchRecs']),
  },
  mounted() {
    if (this.getRecs.length === 0) this.fetchRecs()
  },
}
</script>
<style lang="stylus" scoped>
.style-modal
  min-width 56vw !important
  min-height 30vh !important
</style>
