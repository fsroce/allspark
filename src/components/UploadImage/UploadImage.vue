<script lang="ts" setup>
import { onMounted, ref } from "vue";
const previewRef = ref<HTMLImageElement>();
const inputRef = ref<HTMLInputElement>();
const canvasRef = ref<HTMLCanvasElement>();
onMounted(() => {
  inputRef.value.onchange = (e) => {
    const file = (e.target as HTMLInputElement).files[0];
    // console.log(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      previewRef.value.src = e.target.result as string;
    };
  };
});
const uploadCutedImg = ({ cutWidth, cutHeight, cutX, cutY }) => {
  canvasRef.value.height = 200;
  canvasRef.value.width = 200;
  const ctx = canvasRef.value.getContext("2d");
  ctx.drawImage(
    previewRef.value,
    cutX,
    cutY,
    cutWidth,
    cutHeight,
    0,
    0,
    200,
    200
  );
  canvasRef.value.toBlob((blob) => {
    const file = new File([blob], "image.png", {
      type: "image/png",
    });
    // 此处是生成的裁剪后的图片文件
    console.log(file);
  });
};
</script>

<template>
  <div>
    <input ref="inputRef" type="file" />
    <br />
    <img ref="previewRef" class="preview" />
    <br />
    preview
    <br />
    <canvas ref="canvasRef"></canvas>
    <button
      @click="
        () =>
          uploadCutedImg({
            cutHeight: 100,
            cutWidth: 100,
            cutX: 100,
            cutY: 100,
          })
      "
    >
      click
    </button>
  </div>
</template>

<style>
.preview {
  max-height: 400px;
}
</style>
