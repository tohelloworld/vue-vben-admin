<template>
  <Row type="flex">
    <Col :span="4" :order="1"
      >文章名称：<Input v-model="value" style="width: 60%" placeholder="文章名称"
    /></Col>
    <Col :span="4" :order="2"
      >标签名：
      <Space>
        <Select ref="select" v-model:value="value" style="width: 120px">
          <SelectOption value="jack">Jack</SelectOption>
          <SelectOption value="lucy">Lucy</SelectOption>
          <SelectOption value="disabled" disabled>Disabled</SelectOption>
          <SelectOption value="Yiminghe">yiminghe</SelectOption>
        </Select>
      </Space>
    </Col>
    <Col :span="4" :order="3"
      >分类名：
      <Space>
        <Select ref="select" v-model:value="value" style="width: 120px">
          <SelectOption value="jack">Jack</SelectOption>
          <SelectOption value="lucy">Lucy</SelectOption>
          <SelectOption value="disabled" disabled>Disabled</SelectOption>
          <SelectOption value="Yiminghe">yiminghe</SelectOption>
        </Select>
      </Space></Col
    >
    <Col :span="4" :order="4"
      >发布状态
      <Space>
        <Select ref="select" v-model:value="value" style="width: 120px">
          <SelectOption value="jack">Jack</SelectOption>
          <SelectOption value="lucy">Lucy</SelectOption>
          <SelectOption value="disabled" disabled>Disabled</SelectOption>
          <SelectOption value="Yiminghe">yiminghe</SelectOption>
        </Select>
      </Space></Col
    >
    <Col :span="4" :order="5"><Button type="primary">提交</Button><Button>重置</Button></Col>
    <Col :span="4" :order="6" />
  </Row>
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
  import { Row, Col, Input, SelectOption, Select, Space, Button } from 'ant-design-vue';
  import { ref } from 'vue';
  // import { growCardList } from '../data';
  import 'ant-design-vue/lib/button/style';

  let value = ref('a');
</script>
