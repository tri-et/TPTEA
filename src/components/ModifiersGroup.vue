<template>
  <div>
    <div class="title-modify">{{groupTitle}}</div>
    <q-list inset-separator class="q-pa-none listing-modifier">
      <q-item v-for="(modifier,index) in data" :key="index">
        <q-item-main class="text-secondary">
          <q-radio class="fit" v-if="groupType==='radio'" v-model="defaultModifiers" :val="modifier" :label="modifier.name" color="primary"/>
          <q-checkbox class="fit" v-else v-model="defaultModifiers" :label="modifier.name" :val="modifier" color="primary"/>
        </q-item-main>
        <q-item-side right class="text-secondary">{{modifier.price|formatPrice}}</q-item-side>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import _d from 'lodash'
import {mapGetters, mapMutations} from 'vuex'
export default {
  props: {
    groupTitle: String,
    groupType: String,
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      defaultModifiers: [],
      oldModifiers: [],
    }
  },
  computed: {
    ...mapGetters('modifier', ['getCurrentMenuModifier']),
  },
  filters: {
    formatPrice(val) {
      var formatedPrice = ''
      if (val.includes('-')) {
        formatedPrice = '-$' + val.replace('-', '')
      } else if (val === '0') {
        formatedPrice = ''
      } else {
        formatedPrice = '+$' + val
      }
      return formatedPrice
    },
  },
  methods: {
    ...mapMutations('modifier', ['setCurrentMenuModifier']),
    upDateModifiers(newModifiers, oldModifiers) {
      let currentModifiers = this.getCurrentMenuModifier
      if (oldModifiers) {
        let modifierIds = []
        if (_d.isArray(oldModifiers)) modifierIds = _d.map(oldModifiers, 'id')
        else modifierIds = [oldModifiers.id]
        _d.remove(currentModifiers, ({id}) => {
          return modifierIds.includes(id)
        })
      }

      let newFormatedModifier = []
      if (_d.isArray(newModifiers)) {
        newFormatedModifier = _d.map(this.defaultModifiers, ({id, price}) => ({
          id,
          price,
        }))
      } else newFormatedModifier = [_d.pick(this.defaultModifiers, ['id', 'price'])]
      this.setCurrentMenuModifier(_d.concat(currentModifiers, newFormatedModifier))
    },
  },
  mounted() {
    let modifierDedault = _d.find(this.data, modifier => {
      return modifier.isDefault
    })
    if (modifierDedault) this.defaultModifiers = modifierDedault
  },
  watch: {
    defaultModifiers: {
      immediate: true,
      handler(newModifiers, oldModifiers) {
        this.upDateModifiers(newModifiers, oldModifiers)
      },
    },
  },
}
</script>
<style lang="stylus" scoped>
.title-modify
  background #f2f2f2
  padding 15px 0 5px 18px
  font-weight bold
  text-transform capitalize

.listing-modifier
  border-left none
  border-right none

.q-item-division + .q-item-division:after, .q-item-division + .q-item-inset-separator:after
  left 20px
  right 20px
</style>
