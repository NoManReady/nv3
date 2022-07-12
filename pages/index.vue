<template>
  <el-main>
    <el-row>
      <el-col :span="10">
        <ClientOnly>
          <el-dropdown split-button type="primary" @click="handleClick">
            Dropdown List
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item>Action 4</el-dropdown-item>
                <el-dropdown-item>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown></ClientOnly
        >
      </el-col>
      <el-col :span="16">
        <div class="main-content">
          <div>ssss</div>
          <NuxtLink href="/my" title="my">my</NuxtLink>
        </div>
      </el-col>
      <el-col :span="4"> </el-col>
    </el-row>
  </el-main>
</template>

<script setup lang="ts">
import {
  ElMain,
  ElRow,
  ElCol,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
} from "element-plus";
const { $logger } = useNuxtApp();
useHead({
  viewport: "width=device-width, initial-scale=2, maximum-scale=2",
});
$logger("cm");

const handleClick = (value) => {
  console.log(value);
};
</script>

<style scoped></style>
