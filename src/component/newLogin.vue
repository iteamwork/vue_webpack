<template>
    <div id="newLogin">
        <div class="columns">
            <div class="column is-12">
                <label class="label">Email</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="email" v-validate="'required|email'" data-vv-delay="1000" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
                    <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                </p>
            </div>
            <div class="column is-12">
                <label class="label">Name</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="name" v-validate="'required|alpha'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
                    <i v-show="errors.has('name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email:'',
            name:''
        }
    }
}
</script>