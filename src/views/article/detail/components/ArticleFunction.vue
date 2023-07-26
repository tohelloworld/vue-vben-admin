<template>
  <Row class="mt-4">
    <Col class="p-1" :span="2" :order="1"><Button type="primary" :block="true">添加</Button></Col>
    <Col class="p-1" :span="2" :order="2"
      ><Button type="primary" :block="true">文章抓取</Button></Col
    >
    <Col class="p-1" :span="2" :order="3"
      ><Button type="primary" :block="true">批量SEO</Button></Col
    >
    <Col class="p-1" :span="2" :order="4"
      ><Button type="primary" :block="true">批量删除</Button></Col
    >
  </Row>
</template>
<script lang="ts" setup>
  import { Row, Col, Button } from 'ant-design-vue';
  import 'ant-design-vue/lib/button/style';
</script>
