$(function(){
        
        locd(1)
        function locd(e){
            $.ajax({
                url:"http://localhost:3000/recruit" ,
                type:"POST",
                data:{num:e},
                success:function(e){
                console.log(e)
                    
                }
            })
        }



    })