<template>
    <button @click="buttonClick" class="px--button"> <slot></slot> </button>
</template>

<script>

export default {
  name: 'PxButton',

  methods: {
    buttonClick() {
      this.$emit('click')
    },
  },
}
</script>