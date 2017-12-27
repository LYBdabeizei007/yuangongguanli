$(function () {
    // 1.员工详情接口
    $.ajax({
        url:"http://localhost:3000/detail",
        type:"POST",
        success:function(data){
            for(i in data){
                $('#guanliindex').append(`
                <tr>
                <td><div style="width: 40px;height: 40px;"><img src="${data[i].img}" alt="" class="img-circle" style="width: 100%;height: 100%;margin-left: 20px;"></div></td>
                <td>${data[i].name}</td>
                <td>${data[i].sex}</td>
                <td>${data[i].age}</td>
                <td>${data[i].posting}</td>
                <td>${data[i].employee}</td>
                <td id="delete1"><a class="btn btn-default" href="#" role="button" id="${data[i].id}" path="${data[i].path}">删除</a></td>
                <td><a class="btn btn-default" href="yuangongxg.html?id=${data[i].id}" role="button">点击操作</a></td>
            </tr> `)
            }

        }
    })
    // //2.用户登录接口
    // $.ajax({
    //     url:"http://localhost:3000/user",
    //     type:"POST",
    //     success:function(e){
    //         console.log(e)
    //     }
    // })
    // //3.用户注册接口
    // $.ajax({
    //     url:"http://localhost:3000/register",
    //     type:"POST",
    //     success:function(e){
    //         console.log(e)
    //     }
    // })
    // //4.管理员登录接口
    // $.ajax({
    //     url:"http://localhost:3000/Administrator",
    //     type:"POST",
    //     success:function(e){
    //         console.log(e)
    //     }
    // })
    // //5.后台增加接口
    // //年龄option循环
    for(i=0;i<101;i++){
        $('#age').append('<option value="">'+i+'</option>')
    }
    // //正则判断
    let [
        namez,
        telz,
        birthdayz,
        employeez
    ]=[
        /^[\u4e00-\u9fa5]{0,}$/,
        /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
        /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/,
        /^\d{6}$/
    ]
    //姓名判断
    $('#name').blur(function () {
        if(namez.test($(this).val())&&$(this).val()!==''){
            $(this).parent().attr('class','form-group')
            $(this).attr('panduan',true)
        }else{
            $(this).parent().attr('class','form-group has-error')
            $(this).val('')
            $(this).attr('placeholder','请输入正确的姓名，只支持中文')
            $(this).attr('panduan',false)
        }
    })
    //年龄判断
    $('#age').blur(function () {
        if($(this).find("option:selected").text()!=='请选择年龄'){
            $(this).parent().attr('class','form-group')
            $(this).attr('panduan',true)
        }else{
            $(this).parent().attr('class','form-group has-error')
            $(this).attr('panduan',false)
        }
    })
    //电话判断
    $('#tel').blur(function () {
        if(telz.test($(this).val())&&$(this).val()!==''){
            $(this).parent().attr('class','form-group')
            $(this).attr('panduan',true)
        }else{
            $(this).parent().attr('class','form-group has-error')
            $(this).attr('panduan',false)
            $(this).val('')
            $(this).attr('placeholder','请输入正确电话号')
        }
    })
    //生日判断
    $('#birthday').blur(function () {
        if(birthdayz.test($(this).val())&&$(this).val()!==''){
            $(this).parent().attr('class','form-group')
            $(this).attr('panduan',true)
        }else{
            $(this).parent().attr('class','form-group has-error')
            $(this).attr('panduan',false)
            $(this).val('')
            $(this).attr('placeholder','请输入正确格式')
        }
    })
    //籍贯判断
    $('#province').blur(function () {
        if($(this).val()!==''){
            $(this).parent().attr('class','form-group')
            $(this).attr('panduan',true)
        }else{
            $(this).parent().attr('class','form-group has-error')
            $(this).attr('panduan',false)
            $(this).attr('placeholder','请填写此选项')
        }
    })
    //家庭住址判断
    $('#address').blur(function () {
        if($(this).val()!==''){
            $(this).parent().attr('class','form-group')
            $(this).attr('panduan',true)
        }else{
            $(this).parent().attr('class','form-group has-error')
            $(this).attr('panduan',false)
            $(this).attr('placeholder','请填写此选项')
        }
    })
    //学校判断
    $('#school').blur(function () {
        if($(this).val()!==''){
            $(this).parent().attr('class','form-group')
            $(this).attr('panduan',true)
        }else{
            $(this).parent().attr('class','form-group has-error')
            $(this).attr('panduan',false)
            $(this).attr('placeholder','请填写此选项')
        }
    })
    //学历判断
    $('#education').blur(function () {
        if($(this).val()!==''){
            $(this).parent().attr('class','form-group')
            $(this).attr('panduan',true)
        }else{
            $(this).parent().attr('class','form-group has-error')
            $(this).attr('panduan',false)
            $(this).attr('placeholder','请填写此选项')
        }
    })
    //学历判断
    $('#posting').blur(function () {
        if($(this).val()!==''){
            $(this).parent().attr('class','form-group')
            $(this).attr('panduan',true)
        }else{
            $(this).parent().attr('class','form-group has-error')
            $(this).attr('panduan',false)
            $(this).attr('placeholder','请填写此选项')
        }
    })
    //工号判断
    $('#employee').blur(function () {
        if(employeez.test($(this).val())&&$(this).val()!==''){
            $(this).parent().attr('class','form-group')
            $(this).attr('panduan',true)
        }else{
            $(this).parent().attr('class','form-group has-error')
            $(this).attr('panduan',false)
            $(this).val('')
            $(this).attr('placeholder','请输入6位工号')
        }
    })
    //性别判断
    var xingbie=$("input[type='radio']:checked").val()
    $('input:radio').click(function () {
        xingbie=$("input[type='radio']:checked").val()
    })
    $('#add1').click(function () {
        if(
            $('#name').attr('panduan')=='true'&&
            $('#age').attr('panduan')=='true'&&
            $('#tel').attr('panduan')=='true'&&
            $('#birthday').attr('panduan')=='true'&&
            $('#province').attr('panduan')=='true'&&
            $('#address').attr('panduan')=='true'&&
            $('#school').attr('panduan')=='true'&&
            $('#education').attr('panduan')=='true'&&
            $('#posting').attr('panduan')=='true'&&
            $('#employee').attr('panduan')=='true'&&
            I!==null
        ){

        }
        var [
            name,
            sex,
            age,
            tel,
            birthday,
            province,
            address,
            school,
            education,
            posting,
            employee,
            hobby,
            entry,
            dimission,
            marital
        ]= [
            $('#name').val(),
            xingbie,
            $("option:selected").text(),
            $('#tel').val(),
            $('#birthday').val(),
            $('#province').val(),
            $('#address').val(),
            $('#school').val(),
            $('#education').val(),
            $('#posting').val(),
            $('#employee').val(),
            $('#hobby').val(),
            $('#entry').val(),
            $('#dimission').val(),
            $('#marital').val(),
        ]
        // console.log(name,xingbie,age,tel,birthday,province,address,school,education,posting,employee,hobby,entry,dimission,marital)
        $.ajax({
            url:"http://localhost:3000/increase",
            type:"POST",
            data:{
                name,
                sex,
                age,
                tel,
                birthday,
                province,
                address,
                school,
                education,
                posting,
                employee,
                hobby,
                entry,
                dimission,
                marital,
                I,
                I2
            },
            success:function(data){
                window.location.reload()
            }
        })
    })



    //6.后台删除接口
    $(document).on('click','#delete1>a',function () {
        let id=this.id
        let path=$(this).attr('path')
        $.ajax({
            url:"http://localhost:3000/delete",
            type:"POST",
            data:{
                id,
                path
            },
            success:function(e){
                window.location.reload()
            }
        })
    })
    // //8.查询（姓名）的接口
    // $.ajax({
    //     url:"http://localhost:3000/inquire",
    //     type:"POST",
    //     success:function(e){
    //         console.log(e)
    //     }
    // })
    // //9.员工列表的接口
    // $.ajax({
    //     url:"http://localhost:3000/list",
    //     type:"POST",
    //     success:function(e){
    //         console.log(e)
    //     }
    // })
    // //10.招聘信息接口
    // $.ajax({
    //     url:"http://localhost:3000/recruit",
    //     type:"POST",
    //     success:function(e){
    //         console.log(e)
    //     }
    // })
    //图片上传 I为图片路径  I2为图片路径
    var Files=null
    var I=null
    var I2=null
    $('#file').change(function () {
        Files=$(this).prop('files')
        if(Files!==null){
            var fd=new FormData()
            for(i=0;i<Files.length;i++){
                fd.append('file',Files[i])
            }
            $.ajax({
                url:'http://localhost:3000/img',
                type:'POST',
                data:fd,
                contentType:false,
                processData:false,
                success:function (data) {
                    I='http://localhost:3000/'+data.a
                    I2=data.b
                    $('#img').attr('src','http://localhost:3000/'+data.a)
                }
            })
        }
    })
    //   新闻上传接口
    $('#add2').click(function () {
        if($('#title').val()!==''&&$('#new').val()!==''){
            let [title,xinwen]=[$('#title').val(),$('#new').val()]
            $.ajax({
                url:'http://localhost:3000/news_zj',
                type:'POST',
                data:{
                    title,
                    xinwen
                },
                success:function (data) {
                    window.location.reload()
                }
            })
        }else{
            alert('请填写标题和内容')
        }
    })
    //   新闻读取接口
    $.ajax({
        url:'http://localhost:3000/news_xx',
        type:'POST',
        data:{

        },
        success:function (data) {
            for(i in data){
                $('#xinwen').append(`
                 <tr>
                 <td>${data[i].title}</td>
                 <td>${data[i].detail}</td>
                 <td id="delete2"><a class="btn btn-default" href="#" role="button" id="${data[i].id}">删除</a></td>
                 <td><a class="btn btn-default" href="newsxg.html?id=${data[i].id}" role="button">点击操作</a></td>
                 </tr>
                `)
            }
        }
    })
    //新闻删除接口
    $(document).on('click','#delete2>a',function () {
        let id=this.id
        $.ajax({
            url:"http://localhost:3000/news_delete",
            type:"POST",
            data:{
                id,
            },
            success:function(e){
                window.location.reload()
            }
        })
    })
    //招聘增加接口
    $('#add3').click(function () {
        if(
            $('#gangwei').val()!==''&&
            $('#jingyan').val()!==''&&
            $('#yaoqiu').val()!==''&&
            $('#fuli').val()!==''
        ){
            let [
                gangwei,
                jingyan,
                yaoqiu,
                fuli
            ]=[
                $('#gangwei').val(),
                $('#jingyan').val(),
                $('#yaoqiu').val(),
                $('#fuli').val()
            ]
            $.ajax({
                url:'http://localhost:3000/zp_recruit',
                type:'POST',
                data:{
                    gangwei,
                    jingyan,
                    yaoqiu,
                    fuli
                },
                success:function (data) {
                    window.location.reload()
                }
            })
        }else{
            alert('请补全信息')
        }
    })
    //招聘读取接口
    $.ajax({
        url:'http://localhost:3000/zp_selsect',
        type:'POST',
        data:{

        },
        success:function (data) {
            for(i in data){
                $('#zhaopin').append(`
                 <tr>
                 <td>${data[i].gangwei}</td>
                 <td><a class="btn btn-default" href="#" role="button" id="${data[i].id}">删除</a></td>
                 <td><a class="btn btn-default" href="recruitxg.html?id=${data[i].id}" role="button">点击操作</a></td>
                 </tr>
                `)
            }
        }
    })
})
