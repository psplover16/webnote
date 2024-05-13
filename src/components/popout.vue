<template>
    <div class="popoutPage" @click.self="closePageX">
        <div class="contents" v-if="contentsType == 'mainCJS'">
            <!-- 放electron/main.cjs -->
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, defineEmits, ref } from 'vue'

const props = defineProps({
    msg: String,
    contentsType: String
})



const emit = defineEmits(['closePage']);
const closePageX = () => {
    emit('closePage');
}

onMounted(() => {
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = '17px';
    console.log(props.contentsType);
})
onUnmounted(() => {
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = '0';
})
</script>


<style scoped lang="scss">
.popoutPage {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;

    .contents {
        width: 85%;
        height: 90%;
        display: inline-block;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: white;
        overflow-y: scroll;
    }
}
</style>
