<template>
    <div class="headerr">
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="row">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#/"> 宋超群个人简历</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <!-- <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li> -->
                        <li><a href="#base">个人信息</a></li>
                        <!-- <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">定位 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">沈阳</a></li>
                            <li><a href="#">北京</a></li>
                            <li><a href="#">吉林</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                        </li> -->
                        <li><a href="#work">工作经历</a></li>
                        <li><a href="#project">项目经历</a></li>
                        <li><a href="#education">教育经历</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div>
        </div><!-- /.container-fluid -->
      </nav>
      
      <!-- <button type="button" class="btn btn-default navbar-btn">Sign in</button> -->
      
    </div>
    
</template>
<script>
export default {
    name: 'headerr',
    data: ()=>{
        return {
            logoUrl: require("../assets/images/logo.png")
        }
    }
}
</script>
<style>
    .headerr {
        content: '';
        display: block;
        height: 68px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        /* background-color: #333; */
    }
   .navbar-nav li a {
       padding-left: 5rem;
   }
</style>

