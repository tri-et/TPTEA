
<template>
<div>
    <div class="header">
    <div id="background"></div>
    <div id="labels">
        labels here
    </div>
     <q-scroll-observable @scroll="userHasScrolled" />
</div>
    <div class="content">
</div>
</div>
</template>
<script>
export default {
  name: 'PageOrder',
  methods: {
    userHasScrolled(scroll) {
      var target = scroll.position / 10000
      if (scroll.direction === 'down') {
        console.log(scroll.position / 1000)
        document.getElementById('labels').style.opacity = target
      } else {
        document.getElementById('labels').style.display = 'none'
      }
    },
  },
}
</script>
<style>
.header {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0px;
  z-index: 3;
}
body {
  margin: 0px;
}
.header #background,
.header #labels {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
}

.header #labels {
  background-color: transperent;
}

.header #background {
  background-color: yellow;
  display: none;
}

.content {
  width: 100%;
  height: 5000px;
  background-color: green;
}
</style>
