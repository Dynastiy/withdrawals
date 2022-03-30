<template>
  <div>
    <h1>All Withdrawal requests</h1>
    <table class="rwd-table">
      <tr>
        <th>Id</th>
        <th>Merchant</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
      <tr v-if="withdrawals.length == 0">
        <td class="text-danger font-weight-bold">
          No Withdrawal requests yet
        </td>
      </tr>
      <tr v-for="withdrawal in withdrawals" :key="withdrawal.id">
        <td data-th="id" > {{ withdrawal.id }}  </td>
        <td data-th="Merchant" v-if="withdrawal.merchant"> {{ withdrawal.merchant.business_name }} </td>
        <td data-th="Amount"> {{ withdrawal.amount }}{{ withdrawal.currency }} </td>
        <td data-th="Date"> {{timeStamp(withdrawal.created_at)}} </td>
        <td data-th="Status"><span :class="[withdrawal.status]">{{withdrawal.status}}</span></td>
        <td data-th="Actions"> <px-button @click="goToWithdrawal(withdrawal.id)"><span>View More</span></px-button> </td>
      </tr>
    </table>
  </div>
</template>

<script>
import PxButton from '@/components/pxButton.vue'
import { dollarFilter, timeStamp, sliceHash } from "@/plugins/filters.js";
export default {
    components: {
        PxButton
    },
    data:()=>{
      return{
        dollarFilter, timeStamp, sliceHash,
        withdrawals: []
      }
    },
    methods: {
      async getWithdrawals(){
       try {
          let res = await this.$axios.get('/merchants/admin/withdrawal-requests');
        console.log(res.data.results);
        this.withdrawals = res.data.results
       } catch (error) {
         console.log(error);
       }
      },
      goToWithdrawal(id){
         this.$router.push({ name: 'id', params: { id } })
      }
    },
    async created(){
      this.getWithdrawals();
    }
}
</script>