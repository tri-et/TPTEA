<template>
  <!-- <q-modal v-model="opened" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
    <q-modal-layout>
      <q-toolbar slot="header" color="brown-6">
        <q-btn flat round dense @click="hide()" icon="reply" />
        <q-toolbar-title>
          {{catName}}
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar slot="header" color="brown-6">
        <q-search class="full-width" v-model="search" inverted color="none" />
      </q-toolbar>
      <q-toolbar slot="footer" color="brown-6" class="row inline items-center">
        <div class="col-6" @click="show()">
          <q-btn label="View Carts" />
        </div>
        <div class="col-6 text-right">{{totalSpent()}}</div>
      </q-toolbar>
      <div>
        <q-list no-border separator>
          <menu-cat-item v-for="(item,index) in filterSubMenu" :submenu="item" :key="`submenu${index}`">
            <menu-detail :menudata="item"></menu-detail>
          </menu-cat-item>
        </q-list>
      </div>
      <slot></slot>
    </q-modal-layout>
  </q-modal> -->
  <q-layout class="fullscreen bg-white">
    <q-layout-header>
      <q-toolbar color="brown-6">
        <q-btn flat round dense @click="hide()" icon="reply" />
        <q-toolbar-title>
          {{getSubMenu.name}}
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar color="brown-6">
        <q-search class="full-width" v-model="search" inverted color="none" />
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <q-list no-border separator>
        <menu-cat-item v-for="(item,index) in filterSubMenu" :submenu="item" :key="`submenu${index}`">
          <!-- <menu-detail :menudata="item"></menu-detail> -->
        </menu-cat-item>
      </q-list>
    </q-page-container>
    <q-layout-footer>
      <q-toolbar color="brown-6" class="row inline items-center">
        <div class="col-6" @click="show()">
          <q-btn label="View Carts" />
        </div>
        <div class="col-6 text-right">ggg</div>
      </q-toolbar>
    </q-layout-footer>

    <!-- <q-toolbar slot="header" color="brown-6">
        <q-search class="full-width" v-model="search" inverted color="none" />
      </q-toolbar>
      <q-toolbar slot="footer" color="brown-6" class="row inline items-center">
        <div class="col-6" @click="show()">
          <q-btn label="View Carts" />
        </div>
        <div class="col-6 text-right">{{totalSpent()}}</div>
      </q-toolbar>
      <div>
        <q-list no-border separator>
          <menu-cat-item v-for="(item,index) in filterSubMenu" :submenu="item" :key="`submenu${index}`">
            <menu-detail :menudata="item"></menu-detail>
          </menu-cat-item>
        </q-list>
      </div> -->
  </q-layout>
</template>
<script>
import _ from 'lodash'
import {mapGetters, mapActions} from 'vuex'
import menuCatItem from './menuCatItem'
import menuDetail from './menuDetail'
export default {
  props: {
    catId: [Number],
    catName: [String],
  },
  components: {
    menuCatItem,
    menuDetail,
  },
  data() {
    return {
      search: '',
      opened: true,
    }
  },
  computed: {
    ...mapGetters('order', ['getSubMenu', 'getRecsOrdered']),
    filterSubMenu() {
      if (this.getSubMenu.subMenu != null) {
        return this.getSubMenu.subMenu.filter(({name}) => {
          return name.match(new RegExp(this.search, 'gi'))
        })
      }
    },
  },
  methods: {
    ...mapActions('order', ['fetchSubMenuCategory']),
    show() {
      if (!_.isEmpty(this.$slots)) {
        this.$slots.default[0].componentInstance.opened = true
      }
    },
    totalSpent() {
      return `Total: $${_.sumBy(this.getRecsOrdered, 'totalprice')}`
    },
    hide() {
      this.$router.push('/orders')
    },
  },
  watch: {
    getRecsOrdered: {
      handler(val) {
        this.totalSpent()
      },
      deep: true,
    },
    opened(newval) {
      if (newval) {
        this.fetchSubMenuCategory(this.catId)
      }
    },
  },
  created() {
    var id = this.$route.params.id
    this.fetchSubMenuCategory(id)
  },
}
</script>
<style scoped>
.q-toolbar {
  min-height: 42px !important;
}
</style>
