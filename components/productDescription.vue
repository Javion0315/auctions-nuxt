<template>
    <div>
        <h2 style="font-size: 2rem; font-weight: 300;">Description</h2>
        <el-divider style="background-color: #6d6d6d;"></el-divider>
        <h3 class="title-m">Story Story Story Story Story Story Title</h3>
        <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sed architecto nobis exercitationem officiis modi, omnis nam harum quam enim quaerat, aspernatur, pariatur atque quod fugiat quae ipsam ut veniam!
        </p>
        <el-divider></el-divider>
        <el-row :gutter="20">
            <el-col :span="10">
                <el-image
                    :src="require(`~/assets/images/article-1.png`)"
                    :fit="contain">
                </el-image>
            </el-col>
            <el-col :span="14">
                <p class="text">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sed architecto nobis exercitationem officiis modi, omnis nam harum quam enim quaerat, aspernatur, pariatur atque quod fugiat quae ipsam ut veniam!
                </p>    
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <h3 class="title-m">Story Story Story Story Story Story Title</h3>
        <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sed architecto nobis exercitationem officiis modi, omnis nam harum quam enim quaerat, aspernatur, pariatur atque quod fugiat quae ipsam ut veniam!
        </p>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    
</style>