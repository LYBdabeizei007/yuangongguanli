<template>
<div>
  <div class="su">
      
<ul id="scroller">

    <li>元旦放假通知，放假时间是12月30号到1月1日</li>

    <li>本公司第三季度销售增长100%</li>

    <li>本月优秀员工是马云</li>

    
</ul>

  </div>

  <div class="tab">
  <div class="tab1">
  	<!-- Nav tabs 按钮-->
  <ul class="nav nav-pills nav-stacked" role="tablist">
    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">所有员工</a></li>
    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">招聘</a></li>
    <!-- <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">考勤</a></li> -->
    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">新闻&nbsp;公告</a></li>
    <li role="presentation"><a href="#tubiao" aria-controls="tubiao" role="tab" data-toggle="tab">图表</a></li>
  </ul>
  </div>
  <div class="tab2">
  	  <!-- Tab panes 按钮对应的列表-->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="home">
        <h2 class="Tab-h2">员工详情</h2>
        <p class="Tab-box2_p"><span>照片</span><span>姓名</span><span>职位</span></p>
        <hr>
        <ul class="Tab-box">
        <li><span><img src="../assets/img/ban-.jpg" alt=""></span><span>李想</span><span>CEO</span></li>
          <li><span><img src="../assets/img/ban-.jpg" alt=""></span><span>刘强东</span><span>懂事</span></li>
          <li><span><img src="../assets/img/ban-.jpg" alt=""></span><span>马化腾</span><span>懂事</span></li>
          <li><span><img src="../assets/img/ban-.jpg" alt=""></span><span>李想</span><span>CEO</span></li>
          <li><span><img src="../assets/img/ban-.jpg" alt=""></span><span>刘强东</span><span>懂事</span></li>
          <li><span><img src="../assets/img/ban-.jpg" alt=""></span><span>李想</span><span>CEO</span></li>
          <li><span><img src="../assets/img/ban-.jpg" alt=""></span><span>刘强东</span><span>懂事</span></li>
          <li><span><img src="../assets/img/ban-.jpg" alt=""></span><span>马化腾</span><span>懂事</span></li>
          <li><span><img src="../assets/img/ban-.jpg" alt=""></span><span>李想</span><span>CEO</span></li>
          <li><span><img src="../assets/img/ban-.jpg" alt=""></span><span>刘强东</span><span>懂事</span></li>
          
         
        </ul>
        <div class="Tab-paging">下一页</div>
    </div>
    <div role="tabpanel" class="tab-pane Tab-b2" id="profile">
       <h2>招贤纳士</h2>
       <p class="Tab-box2_p"><span>职位名</span><span>薪资</span><span>发布时间</span></p>
       <hr>
        <ul class="Tab-box2">
           <li><span>高级web前端开发工程师</span><span>7k-15k</span><span>12-26</span></li>
           <li><span>高级web前端开发工程师</span><span>7k-15k</span><span>12-26</span></li>
           <li><span>高级web前端开发工程师</span><span>7k-15k</span><span>12-26</span></li>
        </ul>
     </div>
    <!-- <div role="tabpanel" class="tab-pane" id="messages">
           <h2>考勤</h2>
       <p class="Tab-box2_p"><span>职位名</span><span>薪资</span><span>发布时间</span></p>
       <hr>
        <ul class="Tab-box2">
           <li><span>高级web前端开发工程师</span><span>7k-15k</span><span>12-26</span></li>
           <li><span>高级web前端开发工程师</span><span>7k-15k</span><span>12-26</span></li>
           <li><span>高级web前端开发工程师</span><span>7k-15k</span><span>12-26</span></li>
        </ul>

    </div> -->
    <div role="tabpanel" class="tab-pane" id="settings">
              <h2>新闻&nbsp;公告</h2>
       <p class="Tab-box2_p"><span>职位名</span><span>薪资</span><span>发布时间</span></p>
       <hr>
        <ul class="Tab-box2">
           <li><span>高级web前端开发工程师</span><span>7k-15k</span><span>12-26</span></li>
           <li><span>高级web前端开发工程师</span><span>7k-15k</span><span>12-26</span></li>
           <li><span>高级web前端开发工程师</span><span>7k-15k</span><span>12-26</span></li>
        </ul>
    </div>
    <div role="tabpanel" class="tab-pane Tab-b5" id="tubiao">
              <h2>1.员工年龄分布</h2>
       
       <hr>
       <!-- 图表1 -->
        <div id="container tubiao1">
    <canvas id="chart" width="600" height="500"></canvas>
    <table id="chartData">
      <tr>
        <th>jsfoot 网页特效</th><th>下载量</th>
      </tr>
      <tr style="color:#0DA068">
        <td>jquery图片特效</td><td>1862.12</td>
      </tr>

      <tr style="color:#194E9C">

        <td>jquery导航菜单</td><td>1316.00</td>

      </tr>

      <tr style="color:#ED9C13">

        <td>jquery选项卡特效</td><td>712.49</td>

      </tr>

      <tr style="color:#ED5713">

        <td>jquery文字特效</td><td>3236.27</td>

      </tr>

      <tr style="color:#057249">

        <td>jquery表单特效</td><td>6122.06</td>

      </tr>

      <tr style="color:#5F91DC">

        <td>html5特效</td><td>128.11</td>

      </tr>

      <tr style="color:#F88E5D">

        <td>html5 图表</td><td>245.55</td>

      </tr>

    </table>
  </div><!--container end图表1-->
  <div class="clear"></div> 
  <!-- 图表2开始 -->
      <h2>2.员工地区、年龄分布</h2>
       <hr>
  <div style="width:600px;margin:0 auto;">

     <table id='myTable5'>
      <caption>会员地区分布</caption>
      <thead>
        <tr>
          <th></th>
          <th>河北</th>
          <th>辽宁</th>
          <th>吉林</th>
          <th>黑龙江</th>
          <th>山东</th>
          <th>山西</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1200</th>
          <td>540</td>
          <td>300</td>
          <td>150</td>
          <td>180</td>
          <td>120</td>
          <td>180</td>
        </tr>
      </tbody>
    </table>  

     <table id='myTable1'>
      <caption>会员性别分布</caption>
      <thead>
        <tr>
          <th></th>
          <th>男</th>
          <th>女</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>200</th>
          <td>50</td>
          <td>150</td>
          </tr>
      </tbody>
    </table>  
  
  </div>  
  <!-- 图表3开始 -->
      <h2>3.系销售额</h2>
       <hr>

  
--柱形图
<div class="main">
    <div id="cylindrical">
    </div>
</div>
<br />
--折线图
<div class="main">
    <div id="line">
    </div>
</div>
<br />
--饼图
<div class="main">
    <div id="pie">
    </div>
</div>



</div>

  </div>

  </div>
   <div class="clear"></div>    
  </div>
  </div>
</template>
<style scoped>
    @import '../assets/css/contr.css';
 </style>
 <script>
  
 	
 </script>