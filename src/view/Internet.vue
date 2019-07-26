<template>
    <div class="internetPage">
        <div class="title">楚门吉他全国星级经销商网点</div>
        <div class="mapWrap">
            <div class="searchInput">
                <input type="text" class="input">
                <img src="../../static/images/search.png" class="searchImg">
            </div>
            <div id="allmap" class="mapContainer"></div>
            <div class="storeList">
                <div class="item" v-for="(item, index) in storeList" :key="index" @click="toSearchMap(item)">
                    <p>授权琴行：{{ item.name }}</p>
                    <p>琴行地址：{{ item.address }}</p>
                    <p>联系人：{{ item.contact }}</p>
                    <p>授权编号：{{ item.code }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Internet",
        data(){
            return {
                storeList: [{
                    name: "木琴社",
                    address: "山东省东营市东营区西四路木琴社",
                    contact: "王老师",
                    code: "TX-180303-1",
                },{
                    name: "伯克力琴行",
                    address: "天津市滨海新区塘沽新港三号路与港滨路交口华",
                    contact: "彭老师",
                    code: "TX-181018-1",
                },{
                    name: "北京 ",
                    address: "北京天安门",
                    contact: "彭老师",
                    code: "TX-181018-1",
                }]
            }
        },
        components: {
        },
        mounted(){
            //地图初始化
            this.searchMap(false,false);
        },
        methods: {
            searchMap(title,ad,state){
                var map = new BMap.Map("allmap");
                var point = new BMap.Point(116.331398,39.897445);
                map.centerAndZoom(point,12);
                //创建地址解析器实例
                var myGeo = new BMap.Geocoder();
                //将地址解析结果显示在地图上,并调整地图视野
                myGeo.getPoint(ad || '广州市越秀区中旅商业城 ',
                    function(point){
                        if (point) {
                            map.centerAndZoom(point, 16);
                            map.addOverlay(new BMap.Marker(point));
                        }else{
                            alert("您选择地址没有解析到结果!");
                        }
                    });
                map.enableScrollWheelZoom(true);
            },
            toSearchMap(item){
                this.searchMap(item.name, item.address);
            }
        }
    }
</script>

<style scoped>

</style>
