<template>
  <div style="text-align: center">
<!--    <el-input-->
<!--      placeholder="请输入搜索内容"-->
<!--      prefix-icon="el-icon-search"-->
<!--      :fetch-suggestions="querySearchAsync"-->
<!--      v-model="search"-->
<!--      @select="handleSelect"-->
<!--    >-->
<!--    </el-input>-->
    <el-autocomplete
      style="width: 100%;"
      v-model="search"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入搜索内容"
      @select="handleSelect"
      prefix-icon="el-icon-search"
    ></el-autocomplete>
    <el-table
      :data="tableData"
      style="width: 100%"
      border="true"
      :default-sort="{prop: 'id', order: 'descending'}"
    >
      <el-table-column
        type="selection"
        width="55"
      >
      </el-table-column>
      <el-table-column
        prop="id"
        label="编号"
        width="80"
        sortable
      >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="rolename"
        label="角色名称"
        width="120"
        sortable
      >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.rolename }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="department"
        label="部门"
        width="120"
        sortable
      >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.department }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="permission"
        label="权限级别"
        width="150"
        sortable
      >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.permission }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="peopleNum"
        label="人数"
        width="80"
        sortable
      >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.peopleNum }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        width="250"
        sortable
      >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.remark }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="createDate"
        label="创建日期日期"
        width="180"
        sortable
      >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.createDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :page-size=5
      :pager-count=5
      layout="prev, pager, next"
      :total="11"
    >
    </el-pagination>
  </div>
</template>

<script>
import {getList} from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      //搜索框
      search: '',
      timeout: null,
      restaurants: [],


      tableData: [{
        id: '1',
        rolename: '管理员',
        department: '保安部',
        permission: 'B',
        peopleNum: '4',
        remark: '保安部的管理员',
        createDate: '2016-05-02',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '2',
        rolename: '管理员',
        department: '保安部',
        permission: 'B',
        peopleNum: '4',
        remark: '保安部的管理员',
        createDate: '2016-05-02',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: '3',
        rolename: '管理员',
        department: '保安部',
        permission: 'B',
        peopleNum: '4',
        remark: '保安部的管理员',
        createDate: '2016-05-01',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: '4',
        rolename: '管理员',
        department: '保安部',
        permission: 'B',
        peopleNum: '4',
        remark: '保安部的管理员',
        createDate: '2016-05-03',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        id: '5',
        rolename: '管理员',
        department: '保安部',
        permission: 'B',
        peopleNum: '4',
        remark: '保安部的管理员',
        createDate: '2016-05-03',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        id: '6',
        rolename: '管理员',
        department: '保安部',
        permission: 'B',
        peopleNum: '4',
        remark: '保安部的管理员',
        createDate: '2016-05-03',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        id: '7',
        rolename: '管理员',
        department: '保安部',
        permission: 'B',
        peopleNum: '4',
        remark: '保安部的管理员',
        createDate: '2016-05-03',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        id: '8',
        rolename: '管理员',
        department: '保安部',
        permission: 'B',
        peopleNum: '4',
        remark: '保安部的管理员',
        createDate: '2016-05-03',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        id: '9',
        rolename: '管理员',
        department: '保安部',
        permission: 'B',
        peopleNum: '4',
        remark: '保安部的管理员',
        createDate: '2016-05-03',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      listLoading: false   //从后端获取数据改为true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = false  //从后端获取数据改为true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },

    //搜索方法
    loadAll() {
      return tableData;
    },
    querySearchAsync(queryString, cb) {
      var tableData = this.tableData;
      var results = queryString ? tableData.filter(this.createsearchFilter(queryString)) : tableData;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createsearchFilter(queryString) {
      return (search) => {
        return (search.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);     //value不可更改不知道为啥，所以数据中要有value元素
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    mounted() {
      this.tableDate = this.loadAll();
    }
  }

    //   loadAll() {
    //     return this.tableData;
    //   },
    //   querySearchAsync(queryString, cb) {
    //     var restaurants = this.restaurants;
    //     var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
    //
    //     clearTimeout(this.timeout);
    //     this.timeout = setTimeout(() => {
    //       cb(results);
    //     }, 3000 * Math.random());
    //   },
    //   createStateFilter(queryString) {
    //     return (search) => {
    //       return (search.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    //     };
    //   },
    //   handleSelect(item) {
    //     console.log(item);
    //   }
    // },
    // mounted() {
    //   this.restaurants = this.loadAll();
    // }

};

</script>
