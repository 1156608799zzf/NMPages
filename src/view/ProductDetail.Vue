<template>
    <div class="productDetailPage">
        <div class="wrap">
            <div class="leftAside">
                <img-zoom src="http://www.trumonguitars.com/uploads/allimg/161006/1-161006062Z1.png" width="440" height="440" bigsrc="http://www.trumonguitars.com/uploads/allimg/161006/1-161006062Z1.png" :configs="configs"></img-zoom>
            </div>
            <div class="rightAside">
                <div class="title">J-68F</div>
                <div class="editorContent">
                    <p class="sub-title">简介：</p>
                    68 Series 云杉玫瑰木【经典首选】<br />
                    &nbsp;<br />
                    云杉玫瑰木是所有的优秀乐手必然拥有的一款吉他，而楚门把它做到了极致。<br />
                    &nbsp;<br />
                    在众多乐手中云杉玫瑰木是被广泛使用的一个经典配置，因为它能轻松适应各种演奏需求。所以这个经典配置也成为了消费者最佳首选。<br />
                    &nbsp;<br />
                    楚门68系列云杉玫瑰木面板使用的是北美西提卡云杉，它拥有着清亮的音色，和极广域的音色动态表现，不同于英格曼云杉的质地较软，西提卡硬度、密度更大一些，所以在西提卡开声之后，会有着更直接和强烈的声音反馈，爆发力十足。而玫瑰木，音性饱满，低音浑厚，音色立体多层次，在快节奏曲风中，震慑人心的低音必不可少！西提卡云杉和玫瑰木的组合，相互弥补共振出色，非常适合节奏感较强的曲风演奏。<br />
                    &nbsp;<br />
                    楚门全系列吉他琴颈引进了德国手工琴颈五拼工艺，保证了琴颈绝对的稳定性，不只如此，D68作为一款亮光单板，琴颈部分的油漆采用的是由中间5分封闭式亚光到两头亮光过度的做法，这样做的目的是绝大程度上保证左手演奏部分琴颈手感的良好触感。我们知道亮光漆偏厚，并且演奏时，手上轻微的汗渍都会造成握琴的阻力，而亚光琴颈的出现解决了这一问题。<br />
                    &nbsp;<br />
                    亮光琴体的足以让你成为舞台上的焦点，又不用担心由于琴颈的不良触感给你带来的演奏增加紧张气氛，两全其美。<br />
                    &nbsp;<br />
                    玫瑰木单板出色的共鸣和稳定性是吉他手内心的最大的追求，为了保证更出色的稳定性，楚门吉他首次引进了澳大利亚琴颈调节技术，将调节位置做在了吉他内部位置，避开了音孔上方的面板音梁，采用特质扳手进行调节，有效保护了接柄部位到音孔位置面板的音量结构完整性和稳定性。<br />
                    &nbsp;<br />
                    并且在琴头14&deg;接角出，增加和借鉴了美国名琴的吉他V补强设计，经过反复的测试和实验，再借助CNC数控精准加工办法，绝大程度保证了琴头的强度。<br />
                    &nbsp;<br />
                    集众多手工&ldquo;黑科技&rdquo;的工艺于一身，只为了云杉玫瑰木能成为乐手能拥有的那把经典中的经典。 &nbsp; &nbsp;
                </div>
                <div class="arrow">^</div>
                <div class="grayBlock">配置参数</div>
                <div class="productMsg">
                    <div class="item">
                        <div class="label">桶形：  </div>
                        <div class="content">JF型缺角</div>
                    </div>
                    <div class="item">
                        <div class="label">桶形：  </div>
                        <div class="content">JF型缺角</div>
                    </div>
                    <div class="item">
                        <div class="label">桶形：  </div>
                        <div class="content">JF型缺角</div>
                    </div>
                    <div class="item">
                        <div class="label">桶形：  </div>
                        <div class="content">JF型缺角</div>
                    </div>
                    <div class="item">
                        <div class="label">桶形：  </div>
                        <div class="content">JF型缺角</div>
                    </div>
                    <div class="item">
                        <div class="label">桶形：  </div>
                        <div class="content">JF型缺角</div>
                    </div>
                    <div class="item">
                        <div class="label">桶形：  </div>
                        <div class="content">JF型缺角</div>
                    </div>
                    <div class="item">
                        <div class="label">桶形：  </div>
                        <div class="content">JF型缺角</div>
                    </div>
                    <div class="item">
                        <div class="label">桶形：  </div>
                        <div class="content">JF型缺角</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="leftArrow"><</div>
        <div class="rightArrow">></div>
    </div>
</template>
<script>
    import imgZoom from 'vue2.0-zoom'
    export default {
        name: "productDetail",
        components: {
            imgZoom
        },
        data(){
            return {
                configs: {
                    width:650,
                    height:350,
                    maskWidth:100,
                    maskHeight:100,
                    maskColor:'red',
                    maskOpacity:0.2
                }
            }
        },
        methods: {

        }
    }
</script>
