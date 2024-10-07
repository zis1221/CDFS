<template>
  <div id="prd">
    <div id="promotdivl">
        <img v-for="(image, index) in images" :key="index" :src="image">
    </div>
    <div id="promotdivr">
        <div>
            <div v-for="(imgcl,index) in imgcls" :key="index" :style="{ backgroundImage: 'url(' + imgcl + ')' }" :class="imgcld"></div>
        </div>
        <div>
            <div v-for="(imgbr,indexb) in imgbrs" :key="indexb" :style="{ backgroundImage: 'url(' + imgbr + ')' }" :class="imgbrd"></div>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            imgcld:'imgcld',
            imgbrd:'imgbrd',
            images:[
                require('@/assets/L1.jpg'),
                require('@/assets/L2.jpg'),
                require('@/assets/L3.jpg'),
                require('@/assets/L4.jpg'),
                require('@/assets/L5.jpg'),
                require('@/assets/L6.jpg'),
                require('@/assets/L7.jpg'),
            ],
            imgcls:[
                require('@/assets/CL1.jpg'),
                require('@/assets/CL2.jpg'),
                require('@/assets/CL3.jpg'),
                require('@/assets/CL4.jpg'),
                require('@/assets/CL5.jpg'),
                require('@/assets/CL6.jpg'),
            ],
            imgbrs:[
                require('@/assets/BR1.png'),
                require('@/assets/BR2.png'),
                require('@/assets/BR3.png'),
                require('@/assets/BR4.png'),
                require('@/assets/BR5.png'),
                require('@/assets/BR6.png'),
                require('@/assets/BR7.png'),
                require('@/assets/BR8.png'),
                require('@/assets/BR9.png'),
                require('@/assets/BR10.png'),
                require('@/assets/BR11.png'),
                require('@/assets/BR12.png'),
                require('@/assets/BR8.png'),
                require('@/assets/BR13.png'),
                require('@/assets/BR14.png'),
                require('@/assets/BR15.png'),
                require('@/assets/BR10.png'),
            ]
        }
    },
}
</script>

<style lang="less" scoped>
#prd{
    width: 100%;
    height: 650px;
    display: flex;
    overflow: hidden;
    border-radius: 3px;
    #promotdivl,#promotdivr{
        height: calc(100%*7);
        background-position: center center;
        background-size: cover;
    }
    #promotdivl{
        width: 422.5px;
        border-top-left-radius: 6px;
     img{
        width: 422.5px;
        object-fit: cover;
        animation: imgfor 100s linear infinite;
    }   
    }
    #promotdivr{
        width: 422.5px;
        border-top-right-radius: 2px;
        background-color: #000;
        display: flex;
        .imgcld{
            width: 300px;
            height: 285px;
            background-position: center center;
            background-size: cover;
            border-left: 8px solid #000;
            margin: 0px auto;
            border-radius: 3px;
            animation: imgcl 100s linear infinite;
        }
        .imgbrd{
            width: 80px;
            height: 60px;
            background-position: center center;
            background-size: cover;
            margin-left: 10px;
            margin-top: 30px;
            animation: imgbr 40s linear infinite;
        }
    }
    
}
@keyframes imgfor{
    0%{
        transform: translateY(0);
    }
    25%{
        transform: translateY(-270%);
    }
    50%{
        transform: translateY(-580%);
    }
    75%{
        transform: translateY(-270%);
    }
    100%{
        transform: translateY(0);
    }
}
@keyframes imgcl{
    0%{
        transform: translateY(-370%);
    }
    25%{
        transform: translateY(-185%);
    }
    50%{
        transform: translateY(0%);
    }
    75%{
        transform: translateY(-185%);
    }
    100%{
        transform: translateY(-370%);
    }
}
@keyframes imgbr{
    0%{
        transform: translateY(0);
    }
    25%{
        transform: translateY(-185%);
    }
    50%{
        transform: translateY(-370%);
    }
    75%{
        transform: translateY(-185%);
    }
    100%{
        transform: translateY(0);
    }
}

</style>