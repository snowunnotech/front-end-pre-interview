<template>
  <div class="loading">
    <!-- Google Chrome loading svg icon -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 16 16">
      <g class="qp-circular-loader">
        <path class="qp-circular-loader-path" fill="none" 
              d="M 8,1.125 A 6.875,6.875 0 1 1 1.125,8" stroke-width="2.25"
              stroke-linecap="round"></path>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="scss" scoped>
.loading {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;

  svg {
    width: 32px;
    height: 32px;
  }
}
.qp-circular-loader,
.qp-circular-loader * {
  transform-origin: 50% 50%;
}
.qp-circular-loader {
  animation: rotate 1568.63ms linear infinite;
}
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.qp-circular-loader-path {
  stroke-dasharray: 32.4;
  stroke-dashoffset: 32.4;
  stroke: var(--primary);
  animation: fillunfill 1333ms cubic-bezier(0.4, 0.0, 0.2, 1) infinite forwards,
             rot 5332ms steps(4) infinite;
}
@keyframes fillunfill {
  from { stroke-dashoffset: 32.3; }
  50% { stroke-dashoffset: 0; }
  to { stroke-dashoffset: -31.9 }
}
@keyframes rot {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}
</style>
