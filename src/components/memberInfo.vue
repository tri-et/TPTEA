<template>
  <div class="member-info">
    <div class="header-member shadow-4">
      <div class="display-member">
        <img class="icon-member shadow-1" src="~assets/quasar-logo.png" width="40" height="40" />
        <span>Steve Nguyen</span>
      </div>
      <span>15</span>
      <i class="material-icons points ">stars</i>
    </div>
    <div class="content-member">
      <q-list no-border>
        <q-item>
          <q-item-side icon="hourglass_empty" />
          <q-item-main label="Order History" />
          <q-item-side right icon="keyboard_arrow_right" />
        </q-item>
        <q-item>
          <q-item-side icon="language" />
          <q-item-main label="Language" />
          <q-item-side right>
            <q-radio v-model="language" val="en" label="English" />
            <q-radio v-model="language" val="cn" label="Chinese" style="margin-left: 10px" />
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side icon="notification_important" />
          <q-item-main label="Nofications" />
          <q-item-side right>
            <q-toggle v-model="checked" color="brown-14" />
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side icon="power_settings_new" />
          <q-item-main label="Sign Out" />
        </q-item>
      </q-list>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      language: 'cn',
    }
  },
}
</script>
<style>
.header-member {
  /* background-color: aqua; */
  height: 54px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.content-member {
  /* background-color: blueviolet; */
}
.display-member {
  display: flex;
  flex: 1;
  align-items: center;
  color: #5d4037;
  font-weight: 500;
}
.icon-member {
  border-radius: 50%;
  margin-right: 10px;
}
.points {
  font-size: 24px;
  color: #5d4037;
  padding-left: 5px;
}
</style>
