<template>
    {{ date }}
</template>

<script >
export default {
    data() {
        return {
            date: new Date().toLocaleDateString("br")
        }        
    }
};
</script>

<style></style>
