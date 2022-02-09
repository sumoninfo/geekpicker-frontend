<template>
  <div>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Create Transition</h1>
    </div>
    <form @submit.prevent="store()">
      <div class="row">
        <div class="mb-3 col-md-4">
          <label for="date" class="form-label">Date</label>
          <DatePickerComponent title="Date" v_model="date"/>
        </div>
        <div class="mb-3 col-md-4">
          <label for="user_id" class="form-label">User</label>
          <drop-down :class_name="{ 'is-invalid': errors['user_id'] }" title="User" v_model="user"/>
          <div v-if="errors['user_id']" class="invalid-feedback">
            {{ errors['user_id'][0] }}
          </div>
        </div>
        <div class="mb-3 col-md-4">
          <label for="amount" class="form-label">Amount</label>
          <input v-model="form.amount" type="text" class="form-control" id="amount">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import DatePickerComponent from "@/components/picker/DatePicker";
import DropDown            from "@/components/dropdown/DropDown";
import moment              from "moment";
import ApiService          from "@/services/api.service";
import JwtService          from "@/services/jwt.service";
import NotificationService from "@/services/notification.service";

export default {
  name      : "TransitionCreate",
  components: {DatePickerComponent, DropDown},
  data      : () => ({
    errors: [],
    form  : {
      user  : '',
      date  : moment(new Date()).format("YYYY-MM-DD"),
      amount: '',
    }
  }),
  methods   : {
    store() {
      ApiService.post('/transitions', this.form).then((res) => {
        this.errors = [];
        //this.$router.push({name: "TransitionList"});
        NotificationService.success(res.data.message);
      }).catch(error => {
        this.errors = error.response.data.errors;
        NotificationService.error(error.response.data.message);
      });
    }
  }
}
</script>

<style scoped>

</style>