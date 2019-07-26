<template>
    <div class="productPage">
        <div class="wrap">
            <div class="leftAside">
                <div class="typeList">
                    <div class="typeItem">
                        <div class="title">25系列</div>
                        <div class="slide">
                            <div>Wings1800 - 轻羽 双单加震</div>
                            <div>Wings1800 - 轻羽 双单加震</div>
                            <div>Wings1800 - 轻羽 双单加震</div>
                            <div>Wings1800 - 轻羽 双单加震</div>
                            <div>Wings1800 - 轻羽 双单加震</div>
                            <div>Wings1800 - 轻羽 双单加震</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rightAside">
                <div class="productList">
                    <div class="item" v-for="(item, index) in productList" :key="index" @click="toProductDetail(item)">
                        <div class="imgWrap">
                            <img :src="item.img">
                        </div>
                        <div class="productName">{{ item.name }}</div>
                    </div>
                    <!--<div class="item">-->
                        <!--<div class="imgWrap">-->
                            <!--<img src="../../static/images/jita.png">-->
                        <!--</div>-->
                        <!--<div class="productName">J-80F</div>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "product",
        data(){
            return {
                productList: [{
                    id: 1,
                    img: "../../static/images/jita.png",
                    name: "J-80F"
                },{
                    id: 1,
                    img: "../../static/images/jita.png",
                    name: "J-80F"
                },{
                    id: 1,
                    img: "../../static/images/jita.png",
                    name: "J-80F"
                },{
                    id: 1,
                    img: "../../static/images/jita.png",
                    name: "J-80F"
                },{
                    id: 1,
                    img: "../../static/images/jita.png",
                    name: "J-80F"
                }]
            }
        },
        methods: {
            toProductDetail(item) {
                this.$router.push({
                    path: "/productDetail",
                    query: {
                        id: item.id
                    }
                })
            }
        }
    }
</script>
