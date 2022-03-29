<template>
  <h1 class="msg">{{ msg }}</h1>
  <div class="text">hello</div>
  <button type="button" @click="setCount">count is: {{ count }}</button>
  <h3>
    <input type="text" v-model="valueComputed" />
    <el-select-v2
      v-model="value"
      clearable
      :options="options"
      placeholder="选择数值"
    />
  </h3>
</template>

<script setup lang="ts">
import { inject, ref, useAttrs, watch, reactive, computed } from "vue";
defineProps<{ msg: string; color: string }>();

const emit = defineEmits(["count"]);

const count = ref(1);

const attrs = useAttrs();

const themes = reactive({
  color: "red",
});

const value = ref("");

const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}));

const reds = ref("blue");
/* 引入 */

const name = inject("name");

const setCount = () => {
  count.value++;
  emit("count", count.value);
  console.log(name, attrs);
};

const valueComputed = computed({
  get: () => value.value,
  set: (str) => (value.value = str + "b"),
});

const setColors = (color: string) => {
  themes.color = color;
  console.log(themes);
};

watch(valueComputed, (n, o) => {
  console.log(n, o);
});

watch(count, (n, o) => {
  console.log(`新值${n},旧值${o}`);
});

/* 通过defineExpose暴露 */
defineExpose({
  setColors,
  count,
});
</script>

<style scoped lang="less">
.msg {
  color: v-bind(reds);
}
.text {
  height: 30px;
  color: v-bind("themes.color");
  background: v-bind(reds);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
