<template>
  <Row type="flex">
    <Col :span="4" :order="1"
      >文章名称：<Input
        v-model:value="condition.articleName"
        style="width: 60%"
        placeholder="文章名称"
    /></Col>
    <Col :span="4" :order="2"
      >标签名：
      <Space>
        <Select ref="select" v-model:value="condition.tagName" style="width: 120px">
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
        <Select ref="select" v-model:value="condition.classificationName" style="width: 120px">
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
        <Select ref="select" v-model:value="condition.pubStatus" style="width: 120px">
          <SelectOption value="jack">Jack</SelectOption>
          <SelectOption value="lucy">Lucy</SelectOption>
          <SelectOption value="disabled" disabled>Disabled</SelectOption>
          <SelectOption value="Yiminghe">yiminghe</SelectOption>
        </Select>
      </Space></Col
    >
    <Col :span="4" :order="5"
      ><Button type="primary" @click="submit()">提交</Button><Button>重置</Button></Col
    >
    <Col :span="4" :order="6" />
  </Row>
</template>
<script lang="ts" setup>
  import { Row, Col, Input, SelectOption, Select, Space, Button } from 'ant-design-vue';
  import { reactive } from 'vue';
  import { articleManageStore } from '@/store/modules/articleManage';
  // import { growCardList } from '../data';
  import 'ant-design-vue/lib/button/style';

  const condition = reactive({
    articleName: '',
    tagName: '',
    classificationName: '',
    pubStatus: '',
  });
  function submit() {
    articleManageStore.articleName = condition.articleName;
    // console.log(
    //   'articleName' +
    //     condition.articleName +
    //     '===tagName' +
    //     condition.tagName +
    //     '===classificationName' +
    //     condition.classificationName +
    //     '===pubStatus' +
    //     condition.pubStatus,
    // );
  }
</script>
