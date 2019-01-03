<template>
  <q-page class="menu-details">
    <q-page-sticky position="top-left" class="z-max absolute">
      <q-btn round color="secondary" class="q-ml-sm q-mt-sm" icon="reply" @click="backToMenu()"/>
    </q-page-sticky>
    <q-card>
      <q-card-media>
        <img :src="'statics/'+menu.img">
      </q-card-media>
    </q-card>
    <q-collapsible :label="menu.name" class="text-bold" header-style="font-size:18px">
      <div class="desc">{{menu.desc}}</div>
    </q-collapsible>
    <modifiers-group
      v-for="(group,index) in getRecsModifier"
      :data="group.data"
      :groupTitle="group.groupTitle"
      :groupType="group.groupType"
      :key="index"
    />
    <q-layout-footer class="max-width-center-h">
      <q-toolbar color="white">
        <q-btn round outline size="11px" color="secondary" icon="remove" :disable="counter===1" @click="counter--"/>
        <div class="text-black q-mr-md q-ml-md">{{counter}}</div>
        <q-btn round size="11px" color="secondary" icon="add" @click="counter++" class="q-mr-sm"/>
        <q-btn color="secondary absolute-right q-mt-sm q-mb-sm q-pl-lg q-pr-lg add-to-cart">{{'$'+totalPrice()}}</q-btn>
      </q-toolbar>
    </q-layout-footer>
  </q-page>
</template>
<script>
import _ from 'lodash'
import {mapGetters, mapActions, mapMutations} from 'vuex'
import etCounter from 'components/Counter'
import modifiersGroup from 'components/ModifiersGroup'
export default {
  data() {
    return {
      opened: true,
      menu: {},
      number: {},
      counter: 1,
    }
  },
  components: {
    etCounter,
    modifiersGroup,
  },
  computed: {
    ...mapGetters('menu', ['getRecs', 'getCounter']),
    ...mapGetters('modifier', {getRecsModifier: 'getRecs'}),
    ...mapGetters('modifier', ['getCurrentMenuModifier']),
  },
  methods: {
    ...mapActions('modifier', ['fetchModifiers']),
    ...mapMutations('menu', ['setCounter']),
    ...mapMutations('modifier', ['setRecs', 'setCurrentMenuModifier']),
    backToMenu() {
      this.setRecs([])
      this.setCurrentMenuModifier([])
      this.$router.go(-1)
      this.setCounter(1)
    },
    totalPrice() {
      let menuModifierPrice =
        parseFloat(this.menu.price) +
        _.sumBy(this.getCurrentMenuModifier, ({price}) => {
          return parseFloat(price)
        })
      return this.counter * menuModifierPrice
    },
  },
  watch: {
    getCurrentMenuModifier() {
      this.totalPrice()
    },
    counter() {
      this.totalPrice()
    },
  },
  mounted() {
    this.menu = this.getRecs.find(item => item.id === parseFloat(this.$route.params.menuId))
    this.fetchModifiers(this.menu)
  },
}
</script>
<style scoped lang="stylus">
.menu-details
  min-height calc(100vh - 70px) !important

.add-to-cart
  margin-right 14px

.desc
  font-weight normal
  font-size 14px
  color #757575
  padding-left 10px
  margin-top -5px

.q-card-media > img
  max-height 350px
</style>
