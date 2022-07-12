<template>
  <client-only>
    <el-dropdown class="m-4" type="primary">
      <el-button type="primary" plain>
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </client-only>
  <br />

  <el-button class="m-4" @click="hello">Hello</el-button>
  <el-button class="m-4" type="primary" @click="hello" plain>Hello</el-button>

  <br />

  <el-icon class="cursor-pointer">
    <Grape />
  </el-icon>
  <el-icon class="cursor-pointer">
    <IceCream />
  </el-icon>
  <el-icon class="cursor-pointer mb-4">
    <IceDrink />
  </el-icon>

  <br />
  <client-only>
    <el-date-picker v-model="timeValue" type="date"></el-date-picker>
  </client-only>
</template>

<script setup lang="ts">
import {
  ElIcon,
  ElButton,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElDatePicker,
  ElMessage,
} from "element-plus";
import { Grape, IceCream, IceDrink, ArrowDown } from "@element-plus/icons-vue";

const timeValue = ref("");
const hello = () => ElMessage.info("hello world");
</script>
