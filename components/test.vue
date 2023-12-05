<template>
    <div>
        <h1>OWO {{ count }}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    mounted() {
        this.count = Math.random();
        console.log({ mounted: this.count });
    },
};
</script>
<style lang=""></style>
