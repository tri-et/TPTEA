import {_get, _procError} from '../../util/common'
import store from '../index'
export const fetchOrderSystemData = ({commit}) => {
  if (!store().getters['maincategory/getMainCategoriesData'].length) {
    commit('setIsOrderSystemLoading', true)
    return _get(`{
    fetchOrderSystemData {
      mainCategories {
        id
        name
        desc
        img
      }
      categories {
        id
        name
        desc
        img
        mainCategoryName
        mainCategoryId
      }
      menus {
        id
        name
        price
        desc
        img
        categoryId
        mainCategoryId
        modifierIds
      }
      modifiers {
        id
        name
        price
        isDefault
        groupType
        groupTitle
      }
    }
  }`)
      .then(({data}) => {
        let {mainCategories, categories, menus, modifiers} = data.fetchOrderSystemData
        store().commit('maincategory/setmainCategoriesData', mainCategories)
        store().commit('category/setCategoriesData', categories)
        store().commit('menu/setMenusData', menus)
        store().commit('modifier/setModifiersData', modifiers)
        commit('setIsOrderSystemLoading', false)
      })
      .catch(err => {
        _procError(err)
        commit('setIsOrderSystemLoading', false)
      })
  }
}
