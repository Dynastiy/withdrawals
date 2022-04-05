<template>
  <div>
    <h1>All Withdrawal requests</h1>
    <!-- Pagination -->
    <div class="text-right">
      <div class="d-flex justify-content-end" style="gap:10px">
        <!-- <button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="reducePage"> Back </button>
        <button type="button" class="btn btn-sm btn-outline-secondary" v-for="(pageNumber, index) in pages.slice(page-1, page+2)" :key="index" @click="page = pageNumber"> {{pageNumber}} </button>
        <button type="button" @click="addPage" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> >> </button> -->
        <button class="page" @click="reducePage" v-if="page != 1">Back</button>
        <span class="page"> Page {{ page }} of {{ numberOfPages }} </span>
        <button class="page" @click="addPage" v-if="page < numberOfPages "> Next </button>
    </div>
    </div>
    <table class="rwd-table">
      <tr>
        <th>Id</th>
        <th>Merchant</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
      
      <tr v-if='loading'>
              <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      </tr>
      <tr v-else v-for="withdrawal in withdrawals" :key="withdrawal.id">
        <!-- <tr> -->
        <td  v-if="withdrawals.length == 0" class="text-danger font-weight-bold">No Withdrawal requests yet</td>
      <!-- </tr> -->
        <td data-th="id">{{ withdrawal.id }}</td>
        <td data-th="Merchant" class="merchant--name" v-if="withdrawal.merchant">
          {{ withdrawal.merchant.business_name }}
        </td>
        <td data-th="Amount">&#8358; {{ currencyFilter(withdrawal.amount) }}</td>
        <td data-th="Date">{{ timeStamp(new Date(withdrawal.created_at*1000.0))}}</td>
        
        <td data-th="Status">
          <span :class="[withdrawal.status]">{{ withdrawal.status }}</span>
        </td>
        <td data-th="Actions">
          <px-button @click="goToWithdrawal(withdrawal.id)"
            ><span>View More</span></px-button
          >
        </td>
      </tr>
    </table>
    <!-- Pagination -->
    <div class="text-right">
      <div class="d-flex justify-content-end" style="gap:10px">
        <!-- <button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="reducePage"> Back </button>
        <button type="button" class="btn btn-sm btn-outline-secondary" v-for="(pageNumber, index) in pages.slice(page-1, page+2)" :key="index" @click="page = pageNumber"> {{pageNumber}} </button>
        <button type="button" @click="addPage" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> >> </button> -->
        <button class="page" @click="reducePage" v-if="page != 1">Back</button>
        <span class="page"> Page {{ page }} of {{ numberOfPages }} </span>
        <button class="page" @click="addPage" v-if="page < numberOfPages "> Next </button>
    </div>
    </div>
  </div>
</template>

<script>
import PxButton from "@/components/pxButton.vue";
// import pagination from "@/components/paginationComponent.vue";
import { currencyFilter, timeStamp, sliceHash } from "@/plugins/filters.js";
export default {
  components: {
    PxButton,
    // pagination
  },
  data: () => {
    return {
      currencyFilter,
      timeStamp,
      sliceHash,
      withdrawals: [],
      page: 1,
      perPage: 100,
      // pages: [],
      pagingValues: '',
      loading: false,
    };
  },
  methods: {
    async getWithdrawals() {
      this.loading = true;
      try {
        let res = await this.$axios.get(
          `/merchants/admin/withdrawal-requests?page=${this.page}`, 
        );
        console.log(res.data);
        this.pagingValues = res.data;
        this.withdrawals = res.data.results;
        // console.log(this.meta);
      } catch (error) {
        console.log(error);
      }
      this.loading = false
    },
    reducePage(){
      // this.$router.replace({ name: "index", query: page });
      this.page = this.page - 1 
      this.getWithdrawals()
    },
    addPage(){
      // this.$router.replace({ name: "index", query: page++ });
      this.page = this.page + 1
      this.getWithdrawals()
    },
    goToWithdrawal(id) {
      this.$router.push({ name: "id", params: { id } });
    },
    setPages() {
      // let numberOfPages = Math.round(this.pagingValues.count / this.perPage);
      // for (let index = 1; index <= numberOfPages; index++) {
      //   this.pages.push(index);
      // }
      // console.log(this.pages.length);
    },
    paginate() {
      let page = this.page;
      let perPage = this.perPage;
      this.from = page * perPage - perPage;
      this.to = this.pagingValues.count;
      
    },
  },
  async created() {
    this.getWithdrawals();
    
  },

  computed: {
    numberOfPages(){
      return  Math.ceil(this.pagingValues.count / this.perPage);
      // for (let index = 1; index <= numberOfPages; index++) {
      //   this.pages.push(index);
      // }
      // console.log(this.pages.length);
    }
  },
  // watch: {
  //   withdrawals() {
  //     this.setPages();
  //   },
  // },
};
</script>
