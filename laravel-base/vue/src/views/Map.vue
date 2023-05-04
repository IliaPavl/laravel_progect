<template>
  <PageComponent>
    <template v-slot:headerSecond>
      <div class="flex justify-between items-center">
        Map
        <button
          v-on:click="open = true"
          class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
        >
          new Photo
        </button>
      </div>
    </template>
    <template v-slot:body>
      <div class="grid grid-cols-1 grap-3 sm:grid-cols-2 md:grid-cols-3">
        <TransitionRoot as="template" :show="open">
          <Dialog as="div" class="relative z-10" @close="open = false">
            <Modal>
              <template v-slot:bodyText>
                <!-- <form method="post" @submit.prevent="save" enctype="multipart/form-data"> -->
                
                  <div class="overflow-hidden flex-1 m-3">
                    <div class="space-y-12">
                      <div class="border-b border-gray-900/10 pb-12">
                        <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div class="col-span-full">
                            <label
                              for="about"
                              class="block text-sm font-medium leading-6 text-gray-900"
                              >About</label
                            >
                            <div class="mt-2">
                              <textarea
                                v-model="newPhoto.comment"
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
                                    for="photos"
                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                  >
                                    <span>Upload a file</span>
                                    <input
                                      @change="previewFiles"
                                      id="photos"
                                      name="photos"
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
                        type="button"
                        class="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Cancel
                      </button>
                      <button
                      @click="save"
                        type="submit"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Save
                      </button>
                    </div>

                    <!-- <img :src="photo.url" alt="photo" v-on:click="open = false" /> -->

                    <!-- <h6 v-html="photoData.comment" class="mt-4 text-lg font-bold"></h6> -->
                  </div>
              </template>
            </Modal>
          </Dialog>
        </TransitionRoot>
      </div>
    </template>
  </PageComponent>
</template>
<script setup>
import PageComponent from "../components/PageComponent.vue";
import Modal from "../views/Modal.vue";
import { useStore } from "vuex";
import { ref } from "vue";
import { Dialog, TransitionRoot } from "@headlessui/vue";
import { PhotoIcon } from "@heroicons/vue/24/solid";
const open = ref(false);
const store = useStore();

let newPhoto = {
  user_id: 8,
  url: {},
  comment: null,
  lat: 10,
  lng: 10,
};

function previewFiles(event) {
  newPhoto.url = event.target.files[0];
}

function save() {
  let formData = new FormData();
  console.log(newPhoto.url);
  formData.append("file", newPhoto.url);
  formData.append("user_id", newPhoto.user_id);
  formData.append("lat", newPhoto.lat);
  formData.append("lng", newPhoto.lng);
  formData.append("comment", newPhoto.comment);
  store
    .dispatch("savePhoto", formData)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
      if (error.response.data.errors.name !== undefined)
        alert(error.response.data.errors.name);
      else alert(error.response.data.errors);
    });
}
</script>


