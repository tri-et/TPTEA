<template>
  <q-modal no-backdrop-dismiss no-esc-dismiss v-model="isModalOpened">
    <q-modal-layout class="style-modal">
      <q-toolbar slot="header" color="secondary">
        <q-btn @click="isModalOpened = false" icon="keyboard_arrow_left" class="q-mr-md" :disabled="getIsLoading" wait-for-ripple color="primary"/>
        <q-btn :loading="getIsLoading" :color="getEditingRec.id?'primary':'secondary'">
          <q-icon :name="getEditingRec.id?'save':'add'" size="25px"/>
          <q-spinner-pie slot="loading" size="25px"/>
        </q-btn>
        <q-toolbar-title>dfdfd</q-toolbar-title>
      </q-toolbar>
      <div class="row q-ma-md">
        <div class="col-8">
          <q-field icon="menu" label="Main Category" label-width="3">
            <q-select v-model="select" :options="selectOptions"/>
          </q-field>
          <q-field icon="label" label="Name" label-width="3">
            <q-input v-model="text"/>
          </q-field>
          <q-field icon="description" label="Desc" label-width="3">
            <q-input v-model="text" type="textarea" rows="4"/>
          </q-field>
        </div>
        <div class="col-4 q-pl-md">
          <et-img-upload/>
        </div>
      </div>
    </q-modal-layout>
  </q-modal>
</template>
<script>
import {mapGetters} from 'vuex'
import etImgUpload from './EtImgUpload'
export default {
  data() {
    return {
      select: 'fb',
      selectOptions: [
        {
          label: 'Google',
          value: 'goog',
        },
        {
          label: 'Facebook',
          value: 'fb',
        },
      ],
    }
  },
  components: {
    etImgUpload,
  },
  computed: {
    ...mapGetters('category', ['getIsLoading', 'getEditingRec']),
    isModalOpened: {
      get() {
        return this.$store.getters['category/getIsModalOpened']
      },
      set(val) {
        this.$store.commit('category/setIsModalOpened', val)
      },
    },
  },
}
</script>
<style lang="stylus" scoped>
.style-modal
  min-width 57vw !important
  min-height 70vh !important
</style>
