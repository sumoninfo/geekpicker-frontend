<template>
  <div>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Transitions</h1>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <form class="row g-3">
          <div class="col-auto">
            <router-link :to="{name:'TransitionCreate'}" class="btn btn-primary">
              <i class="fas fa-plus-square"></i>
              Add New
            </router-link>
          </div>
          <div class="col-auto">
            <input type="text" class="form-control" id="searching" placeholder="Searching">
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Submit</button>
          </div>
        </form>
        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Account</th>
            <th scope="col">Description</th>
            <th scope="col">Currency Code</th>
            <th scope="col">Transfer Amount</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransitionIndex"
}
</script>

<style scoped>

</style>