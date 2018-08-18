        <!-- popup modal -->
            <q-modal v-model="basicModal" >
              <div style="width:683px">
                <!-- <q-page-sticky desktop-only position="top-left" >
                  <q-btn flat position="top-left" icon="close" @click="basicModal = false"/>
                </q-page-sticky> -->
                        <q-btn flat class="absolute-top-left" icon="close" @click="basicModal = false"/>
                <div style="padding: 50px">
                  <div class="q-display-1 q-mb-md">Basic Modal</div>
                  <p v-for="n in 25" :key="`a-${n}`">Scroll down to close</p>
                  <!-- <q-btn class="absolute-top-left" icon="close" @click="basicModal = false"/> -->
                </div>
              </div>
            </q-modal>
     <!-- popup modal -->