<template>
  <div class="modalContainer">
      <div>
          <slot name="header"></slot>
      </div>
      <div>
          <slot name="footer"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.modalContainer{
    background:#ffff;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.3);
    position: fixed;
    width: 300px;
    padding: 20px 30px;
    left: 50%; top: 50%;
    transform: translate(-50%,-50%);
}
</style>