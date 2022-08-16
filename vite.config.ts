/*
 * @Author: hly
 * @Date: 2022-08-16 09:31:36
 * @LastEditors: hly
 * @LastEditTime: 2022-08-16 10:37:49
 * @Description:
 */
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test:{
    globals: true,
  }
})
