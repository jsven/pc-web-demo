<template>
    <section >
        <div class="grid-content bg-purple-light">
            <el-col :span="24" class="content-wrapper">
                <transition name="fade" mode="out-in">
                    <router-view :key="key"></router-view>
                </transition>
            </el-col>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            key() {
                return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
            }
        }
    }
</script>