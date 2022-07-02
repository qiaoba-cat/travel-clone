<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-imag" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_b2c_001/c4a5dc5a-11c0-488e-8841-7ddcef41ec17.jpg_r_390x260x95_1b4a409f.jpg'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_b2c_001/b8f08ef6-9cf0-49eb-bc10-b4ed68bb541b.jpg_r_390x260x95_af9ec2f2.jpg'
        },
        {
          id: '0003',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_b2c_001/dc9ff369-ba2e-4aa3-8bc1-7cfdf4c52bef.jpg_r_390x260x95_8b4cf17e.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  //样式穿透
  .wrapper >>> .swiper-pagination-bullet-active
      background: #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    // 宽高比
    padding-bottom: 66.6%
    background: #eee
    .swiper-imag
      width: 100%
</style>
