<template>
  <div class="tab-page-content">
    The setItem() method of the Storage interface, when passed a key name and value, will add that key to the storage, or update that key's value if it already exists. Link to sectionSyntax storage.setItem(keyName, keyValue); Link to sectionParameters keyName A DOMString containing the name of the key you want to create/update. keyValue A DOMString containing the value you want to give the key you are creating/updating. Link to sectionReturn value Void. Link to sectionExceptions setItem() may throw an exception if the storage is full. Particularly, in Mobile Safari (since iOS 5) it always throws when the user enters private mode (Safari sets quota to 0 bytes in private mode, contrary to other browsers, who allow storage in private mode, using separate data containers). Hence developers should make sure to always catch the possible exceptions from setItem(). Link to sectionExample The following function creates three data items inside local storage. function populateStorage() { localStorage.setItem('bgcolor', 'red'); localStorage.setItem('font', 'Helvetica'); localStorage.setItem('image', 'myCat.png'); } Note: To see this used within a real world example, see our Web Storage Demo. Link to sectionSpecifications Specification Status Comment HTML Living Standard The definition of 'Storage.setItem' in that specification. Living Standard Link to sectionBrowser compatibility New compatibility tables are in beta Desktop Mobile Chrome Edge Firefox Internet Explorer Opera Safari Android webview Chrome for Android Edge Mobile Firefox for Android Opera for Android iOS Safari Samsung Internet Basic support Full support 4 Full support 12 Full support 3.5 Full support 8 Full support 10.5 Full support 4 Full support 18 Full support 18 Full support 13 Full support 6 Full support 11 Full support 3.2 ? Legend Full support Full support Compatibility unknown Compatibility unknown Link to sectionSee also Storage.getItem() Storage.removeItem() Using the Web Storage API
    <p>sdfwsd</p>
    <h1>gfwgfwf</h1>
  </div>
</template>
<script>
import regButton from '../components/regButton.vue'
export default {
  name: 'FromLogin',
  components: {
    regButton,
  },
}
</script>
<style>
.tab-page-content {
  background:red;
  height: 100%;
}
</style>
