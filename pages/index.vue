<template lang="pug">
div
  div(class="flex items-start justify-between px-4 max-w-[1920px] pb-[64px]")
    div(class="flex-none")
      #svg-content(v-html="svgContent", @click="handleSvgClick")
    div(class="pl-2")
      //- div(
      //-   class="bg-blue-300 text-gray-700 px-2 cursor-pointer"
      //-   @click="openColorSelect = !openColorSelect"
      //- )
      //-   p {{openColorSelect ? 'Close Color Select': 'Open Color Select'}}
      div(
        class="overflow-hidden"
        :class="{'h-0': !openColorSelect}"
      )
        ColorPicker(
          :visible-formats="['rgb']",
          :color="nowColor",
          @color-change="updateColor"
        )
  div(class="fixed flex bottom-0 left-0 right-0 p-2")
    input(
      type="file",
      @change="uploadSvgFile",
      class="flex-1 cursor-pointer",
      accept=".svg"
    )
    p(
      class="flex-1 p-2 text-center cursor-pointer inline-block mt-2 rounded-md bg-slate-700 text-white"
      @click="downloadSvg()"
    ) Download SVG 123
</template>

<script setup>
import { ColorPicker } from 'vue-accessible-color-picker'

const openColorSelect = ref(true);

const nowColor = ref('rgb(255 255 255 / 1)');
const selectNowIndex = ref(-1);
const updateColor = (eventData) => {
  nowColor.value = eventData.cssColor;
  if (selectTarget.value) {
    changeColor(selectTarget.value)
  }
}

const selectTarget = ref('');
const handleSvgClick = (event) => {
  selectTarget.value = event.target;
  if (selectTarget.value) {
    let color = selectTarget.value.getAttribute('fill');
    if (!color) {
      const className = selectTarget.value.classList[0];
      if (className) {
        const rule = cssRules.value.find(r => r.selectorText === `.${className}` && r.style.fill);
        if (rule) {
          nowColor.value = rule.style.fill;
        }
      }
    }
    if (color) {
      nowColor.value = color;
    }
  }
}

const uploadSvgFile = (event) => {
  const file = event.target.files[0];
  if (file && file.type === 'image/svg+xml') {
    const reader = new FileReader();
    reader.onload = (e) => {
      svgContent.value = e.target.result;
    };
    reader.readAsText(file);
  } else {
    alert('Please upload a valid SVG file.');
  }
}

const selectColor = ref([]);
const svgContent = ref('');
const cssRules = ref([]);
const colors = ref([]);
const svgDoc = ref('');
onMounted(async () => {
  const svgFilePath = 'test.svg';
  const response = await fetch(svgFilePath)
  const getSvgContent = await response.text();
  if (getSvgContent) {
    const parser = new DOMParser();
    svgDoc.value = parser.parseFromString(getSvgContent, 'image/svg+xml');
    const styleElements = svgDoc.value.querySelectorAll('style');
    styleElements.forEach(styleElement => {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(styleElement.textContent);
      Array.from(sheet.cssRules).forEach(rule => {
        cssRules.value.push(rule);
        colors.value.push(rule.style.fill);
      });
    });
  
    svgContent.value = new XMLSerializer().serializeToString(svgDoc.value.documentElement);
  }
})

const convertToRgba = (color) => {
  const regex = /rgb\(\s*([0-9.]+)\s*([0-9.]+)\s*([0-9.]+)\s*(?:\/\s*([0-9.]+))?\s*\)/;
  const match = color.match(regex);

  if (match) {
    const r = Math.round(parseFloat(match[1]));
    const g = Math.round(parseFloat(match[2]));
    const b = Math.round(parseFloat(match[3]));
    const a = match[4] ? parseFloat(match[4]) : 1;
    if (a == 1) {
      return `rgb(${r}, ${g}, ${b})`;
    } else {
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
  }

  return color;
}

const changeColor = (target) => {
  target.setAttribute('class', '');
  target.setAttribute('fill', nowColor.value);
}

const downloadSvg = () => {
  const svgData = new XMLSerializer().serializeToString(document.querySelector('#svg-content svg'));
  const blob = new Blob([svgData], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'modified.svg';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
</script>

<style>
@import url('vue-accessible-color-picker/styles');
</style>