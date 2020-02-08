<template>
  <div>
    <el-button @click="toAddHandler">增加</el-button>  
    <el-button>批量删除</el-button>
  <!--表格-->
    <el-table style="width: 100%" max-height="250" :data="products">
    <el-table-column
      fixed
      prop="id"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格">
    </el-table-column>
  </el-table>

  <!--模态框-->
  <el-dialog :visible="visible" title="录入产品">
      <span slot="footer" class="dialog-footer">
    <el-button @click="visible = false">取 消</el-button>
    <el-button type="primary" @click="visible = false">确 定</el-button>
  </span>
  </el-dialog>
  </div>
</template>
<script>
/*
import {name, sayName} from './m1'
sayName();
import obj from './m2'
console.log(obj);
*/
import request from '@/utils/request'
export default {
  
  data(){
    return {
      visible:false,
      products:[],
      
    }
  },
    created(){
        this.loadCategories();
      },
      methods:{
        toAddHandler(){
         this.visible=true;
        },
        loadCategories(){
          let url ="http://134.175.154.93:6677/product/findAll";
          request.get(url).then((result)=>{
            this.products = result.data;
          });
        }
      }
  
}
</script>