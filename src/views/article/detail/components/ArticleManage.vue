<template>
  <Table
    :scroll="{ y: 310, x: 1500 }"
    :row-selection="rowSelection"
    :columns="columns"
    :data-source="articleData.content"
    :pagination="false"
  >
    <template #imgSrc="row">
      <Image :width="150" :src="row.record.imgSrc" />
    </template>
    <template #type="{ text: type }">
      <span>
        <Tag v-for="item in type" :key="item" :color="'green'">
          {{ item.toUpperCase() }}
        </Tag>
      </span>
    </template>
    <template #classification="{ text: classification }">
      <span>
        <Tag v-for="item in classification" :key="item" :color="'orange'">
          {{ item.toUpperCase() }}
        </Tag>
      </span>
    </template>
    <template #tags="{ text: tags }">
      <span>
        <Tag v-for="tag in tags" :key="tag" :color="'geekblue'">
          {{ tag.toUpperCase() }}
        </Tag>
      </span>
    </template>
    <template #top="row">
      <Switch @change="handleSwitchChange(row)" v-model:checked="row.record.top" />
    </template>
    <template #operate>
      <a-button type="primary">编辑</a-button>
      <a-button type="danger">删除</a-button>
      <a-button type="dashed">下架</a-button>
    </template>
  </Table>
  <div class="mt-2" id="components-pagination-demo-mini">
    <Pagination
      size="default"
      v-model:current="articleData.current"
      v-model:pageSize="articleData.pageSize"
      :total="articleData.total"
      show-size-changer
      show-quick-jumper
    />
    {{
      console.log(
        'current：' +
          articleData.current +
          '===pageSize：' +
          articleData.pageSize +
          '===total' +
          articleData.total,
      )
    }}
  </div>
</template>
<script lang="ts" setup>
  import { Table, Tag, Switch, Image, Pagination } from 'ant-design-vue';
  import 'ant-design-vue/lib/button/style';
  import { reactive } from 'vue';
  import { articleManageStore } from '@/store/modules/articleManage';

  const columns = [
    {
      title: '文章名称',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 100,
      align: 'center',
    },
    {
      title: '文章封面',
      dataIndex: 'imgSrc',
      key: 'imgSrc',
      slots: { customRender: 'imgSrc' },
      width: 200,
      align: 'center',
    },

    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      slots: { customRender: 'type' },
      align: 'center',
    },
    {
      title: '分类',
      dataIndex: 'classification',
      key: 'classification',
      slots: { customRender: 'classification' },
      align: 'center',
    },
    {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      slots: { customRender: 'tags' },
      align: 'center',
    },
    {
      title: '置顶',
      dataIndex: 'top',
      key: 'top',
      slots: { customRender: 'top' },
      width: 80,
      align: 'center',
    },
    {
      title: '浏览量',
      dataIndex: 'pageviews',
      key: 'pageviews',
      width: 80,
      align: 'center',
    },
    {
      title: '添加时间',
      dataIndex: 'addtime',
      key: 'addtime',
      align: 'center',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      width: 230,
      slots: { customRender: 'operate' },
      align: 'center',
    },
  ];
  const articleData = reactive({
    content: [
      {
        key: '1',
        imgSrc: 'http://111.231.24.210/shiyi/img/b56fb6226bbb4f7899538b77682a5f33.png',
        name: '42',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
        type: ['nice', 'developer'],
        classification: ['nice', 'developer'],
        top: true,
        pageviews: 0,
        addtime: '2023-07-26 10:04:34',
      },
      {
        key: '2',
        imgSrc: 'http://111.231.24.210/shiyi/img/b56fb6226bbb4f7899538b77682a5f33.png',
        name: '42',
        address: 'London No. 1 Lake Park',
        tags: ['nice', 'developer'],
        type: ['nice', 'developer'],
        classification: ['nice', 'developer'],
        top: true,
        pageviews: 0,
        addtime: '2023-07-26 10:04:34',
      },
      {
        key: '3',
        imgSrc: 'http://111.231.24.210/shiyi/img/b56fb6226bbb4f7899538b77682a5f33.png',
        name: '42',
        address: 'Sidney No. 1 Lake Park',
        tags: ['nice', 'developer'],
        type: ['nice', 'developer'],
        classification: ['nice', 'developer'],
        top: true,
        pageviews: 0,
        addtime: '2023-07-26 10:04:34',
      },
      {
        key: '4',
        imgSrc: 'http://111.231.24.210/shiyi/img/b56fb6226bbb4f7899538b77682a5f33.png',
        name: '42',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
        type: ['nice', 'developer'],
        classification: ['nice', 'developer'],
        top: true,
        pageviews: 0,
        addtime: '2023-07-26 10:04:34',
      },
      {
        key: '5',
        imgSrc: 'http://111.231.24.210/shiyi/img/b56fb6226bbb4f7899538b77682a5f33.png',
        name: '42',
        address: 'London No. 1 Lake Park',
        tags: ['nice', 'developer'],
        type: ['nice', 'developer'],
        classification: ['nice', 'developer'],
        top: true,
        pageviews: 0,
        addtime: '2023-07-26 10:04:34',
      },
      {
        key: '6',
        imgSrc: 'http://111.231.24.210/shiyi/img/b56fb6226bbb4f7899538b77682a5f33.png',
        name: '42',
        address: 'Sidney No. 1 Lake Park',
        tags: ['nice', 'developer'],
        type: ['nice', 'developer'],
        classification: ['nice', 'developer'],
        top: true,
        pageviews: 0,
        addtime: '2023-07-26 10:04:34',
      },
    ],
    current: 0,
    total: 50,
    pageSize: 10,
  });
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  function handleSwitchChange(row) {
    console.log(articleManageStore.articleName);
    console.log(row);
  }
</script>
