<template>
  <PageComponent>
    <template v-slot:headerSecond>
      <div class="flex justify-between items-center">
        My photos
        <router-link
          :to="{ name: 'Map' }"
          class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
          >go to new Photo</router-link
        >
      </div>
    </template>

    <template v-slot:body>
      <div class="grid grid-cols-1 grap-3 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="photo in photos"
          :key="photo.id"
          class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[250px]"
        >
          <img
            :src="photo.url"
            alt="photo"
            class="w-full h-48 object-cover cursor-pointer"
            v-on:click="
              open = true;
              setComment(photo.id);
            "
          />
          <button
            v-if="photo.id"
            class="mt-1 text-white bg-red-500 rounded-md hover:bg-red-600"
            v-on:click="delPhoto(photo.id)"
          >
            delete
          </button>
          <div class="grid grid-cols-1 grap-3 sm:grid-cols-2 md:grid-cols-3">
            <TransitionRoot as="template" :show="open">
              <Dialog as="div" class="relative z-10" @close="open = false">
                <Modal>
                  <template v-slot:bodyText>
                    <div class="overflow-hidden flex-1 m-3">
                      <div class="space-y-12">
                        <div class="border-b border-gray-900/10 pb-12">
                          <div
                            class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                          >
                            <div class="col-span-full">
                              <label
                                for="about"
                                class="block text-sm font-medium leading-6 text-gray-900"
                                >About</label
                              >
                              <div class="mt-2">
                                <textarea
                                  v-if="photo"
                                  v-model="photo.comment"
                                  id="about"
                                  name="about"
                                  rows="3"
                                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                              <p class="mt-3 text-sm leading-6 text-gray-600">
                                Write a few sentences about this photo.
                              </p>
                            </div>

                            <div class="col-span-full">
                              <label
                                for="cover-photo"
                                class="block text-sm font-medium leading-6 text-gray-900"
                                >Cover photo</label
                              >
                              <div
                                class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                              >
                                <div class="text-center">
                                  <PhotoIcon
                                    class="mx-auto h-12 w-12 text-gray-300"
                                    aria-hidden="true"
                                  />
                                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                      for="file-upload"
                                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                      <span>Upload a file</span>
                                      <input
                                      
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        class="sr-only"
                                      />
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                  </div>
                                  <!-- <p class="text-xs leading-5 text-gray-600">
                                  PNG, JPG up to 10MB
                                </p> -->
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mt-6 flex items-center justify-end gap-x-6">
                        <button
                          v-on:click="open = false"
                          type="button"
                          class="text-sm font-semibold leading-6 text-gray-900"
                        >
                          Cancel
                        </button>
                        <button
                        v-on:click="save"
                          type="submit"
                          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </button>
                      </div>
                      <p>Just now</p>
                      <img
                        v-if="photo"
                        :src="photo.url"
                        alt="photo"
                        v-on:click="open = false"
                      />
                    </div>
                  </template>
                </Modal>
              </Dialog>
            </TransitionRoot>
          </div>
        </div>
      </div>
    </template>
  </PageComponent>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";

//modal
import Modal from "../views/Modal.vue";
import { Dialog, TransitionRoot } from "@headlessui/vue";
const open = ref(false);
const photoData = { comment: "",url:{},lat:10,lng:12 };

function setComment(id) {
  photoData.comment = id;
}
//
function save(){

}
function delPhoto(id) {
  if (confirm("Are you sure want to delete this photo?")) {
  }
}
import PageComponent from "../components/PageComponent.vue";
</script>
