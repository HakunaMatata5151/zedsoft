<script setup>
import { ref } from 'vue';
import Icons from '../components/Icons.vue';

import Loading from '../util/loading';

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const step = ref(1);

function handleStep(check) {
    if (check) {
        if (step.value === 3) {
            let stopLoading = Loading();
            setTimeout(() => {
                toast.success('Record Added Successfully! ')
                stopLoading()
                step.value = 1;
            }, 1400)
        }
        if (step.value < 3) {
            step.value++
            return
        }
    } else {
        if (step.value > 1) {
            step.value--
            return
        }
    }
}

const uploadedFiles = ref([{ name: 'sample1.png', size: 123456, type: 'image/png' },
{ name: 'sample2.jpg', size: 234567, type: 'image/jpeg' }]);

function handleFiles(event) {
    console.log(event.target.files)
    uploadedFiles.value = Array.from(event.target.files);
}
</script>


<template>
    <div class="ml-18 pt-18 px-4 md:px-22">
        <h1 class="flex items-center justify-between gap-2 flex-wrap sm:gap-10 text-4xl text-blue-700 font-bold">
            <div class="flex items-center gap-10">
                <Icons :icon="'fa-plus'" class=" text-5xl font-bold text-emerald-500" />
                Add Record
            </div>
            <div class="flex items-center gap-5">
                <Icons :icon="'fa-bars'" class=" cursor-pointer text-5xl" />
                <Icons :icon="'fa-xmark'" class=" cursor-pointer bg-red-500 rounded-full text-white px-2 py-1" />
            </div>
        </h1>
        <div class="flex justify-center items-center mt-14 text-3xl text-blue-600/65 font-bold">
            <div class=" relative max-w-[350px] w-full flex justify-between items-center">
                <div class="bg-gray-200 rounded-full  px-4 py-1.5">
                    <span>1</span>
                </div>
                <div class="bg-gray-200 rounded-full" :class="[step > 1 ? 'px-4 py-1.5' : 'px-6 py-6']">
                    <span v-show="step > 1">2</span>
                </div>
                <div class="bg-gray-200 rounded-full" :class="[step > 2 ? 'px-4 py-1.5' : 'px-6 py-6']">
                    <span v-show="step > 2">3</span>
                </div>
                <div class=" absolute max-w-[310px] w-full h-1.5 bg-gray-200 -z-10"></div>
            </div>
        </div>
        <!-- First Step -->
        <div v-if="step === 1" class="flex flex-col gap-12 justify-center items-center mt-16">
            <h1 class="text-3xl font-bold">Create New Record</h1>

            <div class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[90rem] w-full ">
                <div class="flex flex-col gap-3 min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow">
                    <span class=" text-gray-400/70 font-bold text-xl">Date received*</span>
                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)] w-full
                        text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400" type="date" />
                </div>

                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">Time received*</span>
                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)] w-full
                        text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400" type="time" />
                </div>
            </div>
            <div class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[90rem] w-full">
                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">Customer titile*</span>
                    <div class="relative">
                        <select
                            class="appearance-none cursor-pointer w-full bg-white border border-gray-400/60 py-4.5 pr-10 pl-3 rounded-lg 
                                shadow-[3px_3px_4px_rgba(0,0,0,.35)] text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400 ">
                            <option></option>
                            <option>Farmer</option>
                            <option>Construction Worker</option>
                            <option>Doctor</option>
                        </select>
                        <Icons :icon="'fa-angle-down'"
                            class="text-3xl text-blue-600  font-extrabold absolute z-10 right-3 top-4" />
                    </div>
                </div>

                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">Customer name</span>
                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                        text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400" type="text" />
                </div>

                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">First name*</span>
                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                        text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400" type="text" />
                </div>
            </div>
            <div class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[90rem] w-full">
                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">Date of birth</span>
                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)] w-full
                        text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400" type="date" />
                </div>

                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">Sex</span>
                    <div class="relative">
                        <select
                            class="appearance-none cursor-pointer w-full bg-white border border-gray-400/60 py-4.5 pr-10 pl-3 rounded-lg 
                                shadow-[3px_3px_4px_rgba(0,0,0,.35)] text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400 ">
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <Icons :icon="'fa-angle-down'"
                            class="text-3xl text-blue-600  font-extrabold absolute z-10 right-3 top-4" />
                    </div>
                </div>
            </div>
        </div>
        <!-- Second Step -->
        <div v-if="step === 2" class="flex flex-col gap-12 justify-center items-center mt-16">
            <h1 class="text-3xl font-bold">Judicial Case References</h1>

            <div class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[90rem] w-full ">
                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">Name OBJ</span>
                    <div class="relative">
                        <select
                            class="appearance-none cursor-pointer w-full bg-white border border-gray-400/60 py-4.5 pr-10 pl-3 rounded-lg 
                                shadow-[3px_3px_4px_rgba(0,0,0,.35)] text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400 ">
                            <option></option>
                            <option>Wow</option>
                            <option>Awesome</option>
                            <option>Amazing</option>
                        </select>
                        <Icons :icon="'fa-angle-down'"
                            class="text-3xl text-blue-600  font-extrabold absolute z-10 right-3 top-4" />
                    </div>
                </div>
                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">Service Police</span>
                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                        text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400" type="text" />
                </div>
                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">OBJ Grade</span>
                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                        text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400" type="text" />
                </div>
            </div>
            <div class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[90rem] w-full">
                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">PV Number</span>
                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                        text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400" type="text" />
                </div>

                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">Nationality</span>
                    <div class="relative">
                        <select
                            class="appearance-none cursor-pointer w-full bg-white border border-gray-400/60 py-4.5 pr-10 pl-3 rounded-lg 
                                shadow-[3px_3px_4px_rgba(0,0,0,.35)] text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400 ">
                            <option></option>
                            <option>UK Citizen</option>
                            <option>American</option>
                            <option>Austalian</option>
                        </select>
                        <Icons :icon="'fa-angle-down'"
                            class="text-3xl text-blue-600  font-extrabold absolute z-10 right-3 top-4" />
                    </div>
                </div>

                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">TGI of</span>
                    <div class="relative">
                        <select
                            class="appearance-none cursor-pointer w-full bg-white border border-gray-400/60 py-4.5 pr-10 pl-3 rounded-lg 
                                shadow-[3px_3px_4px_rgba(0,0,0,.35)] text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400 ">
                            <option></option>
                            <option>OCD</option>
                            <option>ADHD</option>
                            <option>Bi Polar</option>
                        </select>
                        <Icons :icon="'fa-angle-down'"
                            class="text-3xl text-blue-600  font-extrabold absolute z-10 right-3 top-4" />
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[90rem] w-full">
                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">Magistrate Name</span>
                    <div class="relative">
                        <select
                            class="appearance-none cursor-pointer w-full bg-white border border-gray-400/60 py-4.5 pr-10 pl-3 rounded-lg 
                                shadow-[3px_3px_4px_rgba(0,0,0,.35)] text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400 ">
                            <option></option>
                            <option>Saad</option>
                            <option>Tariq</option>

                        </select>
                        <Icons :icon="'fa-angle-down'"
                            class="text-3xl text-blue-600  font-extrabold absolute z-10 right-3 top-4" />
                    </div>
                </div>

                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">Magistrate Grade</span>
                    <div class="relative">
                        <select
                            class="appearance-none cursor-pointer w-full bg-white border border-gray-400/60 py-4.5 pr-10 pl-3 rounded-lg 
                                shadow-[3px_3px_4px_rgba(0,0,0,.35)] text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400 ">
                            <option></option>
                            <option>28</option>
                            <option>30</option>
                            <option>Austalian</option>
                        </select>
                        <Icons :icon="'fa-angle-down'"
                            class="text-3xl text-blue-600  font-extrabold absolute z-10 right-3 top-4" />
                    </div>
                </div>

                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">Proseuctor's office number</span>
                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                 text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400" type="text" />
                </div>
            </div>

            <div class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[90rem] w-full">
                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">Instruction number</span>
                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                 text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400" type="text" />
                </div>
                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                    <span class=" text-gray-400/70 font-bold text-xl">Justice identifier</span>
                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                         text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400" type="text" />
                </div>
            </div>
        </div>
        <!-- Third Step -->
        <div v-if="step === 3" class="flex flex-col gap-12 justify-center items-center mt-16">
            <h1 class="text-3xl font-bold">Seals</h1>

            <div class="w-full ">
                <div class="font-bold text-2xl text-gray-800 flex border-gray-300 border-1 rounded-tr-2xl w-fit">
                    <span class="p-3 bg-gray-300 cursor-pointer">Seal 1</span>
                    <span class="cursor-pointer p-3 pr-15 border-gray-400 border-l-1">Add Seal</span>
                </div>
                <div class="border-gray-300 border-1 flex flex-col justify-center items-center p-5 md:p-12 lg:p-18">
                    <div
                        class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[65rem] w-full border-1 border-gray-300">
                        <h1 class="p-3 text-xl font-bold border-b-1 border-gray-300 w-full">Seal 1</h1>
                        <div class=" flex flex-col justify-center items-center w-full pb-12 gap-5">
                            <div
                                class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[60rem] w-full ">
                                <div class="flex flex-col gap-3 min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow">
                                    <span class=" text-gray-400/70 font-bold text-xl">Reception Date</span>
                                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)] w-full
                                        text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400"
                                        type="date" />
                                </div>

                                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                                    <span class=" text-gray-400/70 font-bold text-xl">Seal State</span>
                                    <div class="relative">
                                        <select
                                            class="appearance-none cursor-pointer w-full bg-white border border-gray-400/60 py-4.5 pr-10 pl-3 rounded-lg 
                                                shadow-[3px_3px_4px_rgba(0,0,0,.35)] text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400 ">
                                            <option></option>
                                            <option>Arizona</option>
                                            <option>Wyoming</option>
                                            <option>Kansas</option>
                                        </select>
                                        <Icons :icon="'fa-angle-down'"
                                            class="text-3xl text-blue-600  font-extrabold absolute z-10 right-3 top-4" />
                                    </div>
                                </div>
                            </div>

                            <div
                                class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[60rem] w-full ">
                                <div class="flex flex-col items-center justify-center w-full">
                                    <span
                                        class=" text-gray-400/70 font-bold text-xl text-start max-w-[30rem] my-2 w-full">Images</span>
                                    <label for="dropzone-file"
                                        class="flex z-20 flex-col items-center justify-center max-w-[30rem] w-full  h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                    class="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF
                                                (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" class="hidden" multiple
                                            @change="handleFiles" />
                                    </label>
                                    <div v-if="uploadedFiles.length"
                                        class="mt-4 flex flex-wrap gap-4 max-w-[30rem] w-full">
                                        <div v-for="(item, index) in uploadedFiles" :key="index"
                                            class="flex justify-between items-center text-gray-500 w-full p-3">
                                            <div class="flex justify-center items-center  gap-3">
                                                <Icons :icon="'fa-file'" class="" />
                                                <h1 class="w-25 overflow-hidden">{{ item.name }}</h1>
                                            </div>
                                            <div class="flex gap-5">
                                                <Icons :icon="'fa-eye'" class=" cursor-pointer" />
                                                <Icons :icon="'fa-xmark'" class=" cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div
                        class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[65rem] w-full border-1 border-gray-300 mt-12">
                        <h1 class="p-3 text-xl font-bold border-b-1 border-gray-300 w-full">Seal 1-A</h1>
                        <div class=" flex flex-col justify-center items-center w-full pb-12 gap-5">
                            <div
                                class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[60rem] w-full ">
                                <div class="flex flex-col gap-3 min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow">
                                    <span class=" text-gray-400/70 font-bold text-xl">Sample Date</span>
                                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)] w-full
                                        text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400"
                                        type="date" />
                                </div>

                                <div class="flex flex-col min-w-[280px]  sm:min-w-[350px]  max-w-[28rem] grow gap-3">
                                    <span class=" text-gray-400/70 font-bold text-xl">Sample Time</span>
                                    <input class=" cursor-pointer  bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)] w-full
                                    text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400"
                                        type="time" />
                                </div>
                            </div>

                            <div
                                class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[60rem] w-full ">
                                <div class="flex flex-col gap-3 min-w-[280px]  sm:min-w-[350px]   grow">
                                    <span class=" text-gray-400/70 font-bold text-xl">Sample Description</span>
                                    <textarea
                                        class="cursor-pointer bg-white border border-gray-400/60 py-4.5 rounded-lg text-start px-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                                        text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400 resize-none"
                                        placeholder="Enter description" rows="5"></textarea>
                                </div>
                            </div>
                            <div
                                class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[60rem] w-full ">
                                <div class="flex flex-col gap-3 min-w-[280px]  sm:min-w-[350px]   grow">
                                    <span class=" text-gray-400/70 font-bold text-xl">Analysis*</span>
                                    <div class="relative">
                                        <select
                                            class="appearance-none cursor-pointer w-full bg-white border border-gray-400/60 py-4.5 pr-10 pl-3 rounded-lg 
                                shadow-[3px_3px_4px_rgba(0,0,0,.35)] text-gray-400 placeholder-gray-400 placeholder-opacity-60 accent-gray-400 ">
                                            <option></option>
                                            <option>Reason 1</option>
                                            <option>Reason 2</option>
                                            <option>Reason 3</option>
                                        </select>
                                        <Icons :icon="'fa-angle-down'"
                                            class="text-3xl text-blue-600  font-extrabold absolute z-10 right-3 top-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex justify-center items-center lg:justify-start gap-12 flex-wrap max-w-[65rem] w-full border-1 border-gray-300 mt-12">
                        <h1
                            class="p-3 flex gap-2 justify-center items-center cursor-pointer text-xl font-bold border-b-1 border-gray-300 w-full text-center">
                            <Icons :icon="'fa-plus'" />
                            Add Sample
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <!-- Buttons -->
        <div class=" flex justify-center items-center mt-22 mb-12">
            <div class="flex gap-5 max-w-[90rem] w-full justify-center items-center lg:justify-end ">
                <!-- v-if="step > 1" -->
                <button class="w-45 py-3 text-white text-xl cursor-pointer font-bold rounded-2xl bg-emerald-600"
                    @click="handleStep(false)">Previous</button>
                <button class="w-45 py-3 text-white text-xl cursor-pointer font-bold rounded-2xl bg-blue-700"
                    @click="handleStep(true)">{{ step === 3 ? 'Finish' : 'Next' }}</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
