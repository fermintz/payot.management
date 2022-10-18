<template>
  <div class="wrap">
    <HeaderMobile />
    <Aside />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrap{
  position: relative;
  padding-left:230px;
}

@media(max-width:1200px){
  .wrap{
    padding:0;
  }
}
</style>