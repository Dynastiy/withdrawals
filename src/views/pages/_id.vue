<template>
  <div>
    <div class="container">
    <div class="row">
      <h4
        class="my-4 d-flex align-items-center"
        v-if="withdrawal.status === 'pending'"
      >
        <span class="material-icons text-warning mr-2" style="font-size: 36px">
          pending
        </span>
        Transaction is Pending
      </h4>
      <h4
        class="my-4 d-flex align-items-center"
        v-if="withdrawal.status === 'approved'"
      >
        <span class="material-icons text-successmr-2" style="font-size: 36px">
          check_circle
        </span>
        Transaction is Approved
      </h4>
      <h4
        class="my-4 d-flex align-items-center"
        v-if="withdrawal.status === 'declined'"
      >
        <span class="material-icons text-dangermr-2" style="font-size: 36px">
          cancel
        </span>
        Transaction is Declined
      </h4>
      <div class="col-lg-12">
        <div class="card">
          <div class="row top align-items-center justify-content-around">
            <div class="col-md mb-3 align-items-center">
              <div>
                <h3
                  class="text-dark m-0 font-weight-bold"
                  v-if="withdrawal.merchant"
                >
                  {{ withdrawal.merchant.business_name }}
                </h3>
                <p class="text-muted" v-if="withdrawal.merchant">
                  {{ withdrawal.merchant.address }}
                </p>
              </div>
            </div>
            <!-- <h6 class="text-muted text-uppercase">
              RE1344523
            </h6> -->
            <h6 class="text-dark col-md">
              {{ withdrawal.amount }} {{ withdrawal.currency }}
            </h6>
          </div>
          <div class="card-body">
            <div
              class="row justify-content-center align-items-center"
              style="gap: 30px"
            >
              <!-- transaction Icons  -->
              <div>
                <div
                  v-if="withdrawal.status === 'pending'"
                  class="col-lg-4 col-md-4 col-sm-4 text-center mb-3"
                >
                  <span class="material-icons iconns"> pending </span>
                </div>
                <div
                  v-if="withdrawal.status === 'declined'"
                  class="col-lg-4 col-md-4 col-sm-4 text-center mb-3"
                >
                  <span class="material-icons iconns2"> cancel </span>
                </div>
                <div
                  v-if="withdrawal.status === 'approved'"
                  class="col-lg-4 col-md-4 col-sm-4 text-center mb-3"
                >
                  <span class="material-icons iconns3"> check_circle </span>
                </div>
              </div>
              <!-- Transaction Details  -->

              <div class="col-lg-8 col-md-4 col-sm-4">
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="subb">Amount</h6>
                  <p class="subb text-muted text-right">
                    {{ withdrawal.amount }} {{ withdrawal.currency }}
                  </p>
                </div>
                <hr />
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="subb">Bank Name</h6>
                  <p class="subb text-muted text-right">
                    {{ withdrawal.bank_name }}
                  </p>
                </div>
                <hr />
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="subb">Bank Account Name</h6>
                  <p class="subb text-muted">
                    {{ withdrawal.bank_account_name }}
                  </p>
                </div>
                <hr />
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="subb">Bank Account Number</h6>
                  <p class="subb text-muted text-right text-uppercase">
                    {{ withdrawal.bank_account_number }}
                  </p>
                </div>
                <hr />
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="subb">Status</h6>
                  <p class="subb text-muted text-right">
                    <span :class="[withdrawal.status]">{{
                      withdrawal.status
                    }}</span>
                  </p>
                </div>
                <hr />
                <div class="d-flex justify-content-end" style="gap: 8px">
                  <button
                    @click="approveWithdrawal"
                    class="approved border-0 shadow-sm"
                  >
                    Approve
                  </button>
                  <button
                    @click="declineWithdrawal"
                    class="declined border-0 shadow-sm"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <withdrawal-modal @close="closeModal" v-show="withdrawal_modal" :meta='meta'></withdrawal-modal>
  </div>
</template>


<script>
import WithdrawalModal from "@/components/withdrawalModal.vue"
export default {
  components:{
    WithdrawalModal
  },
  data() {
    return {
      withdrawal: {},
      id: this.$route.params.id,
       meta: '',
       action: '',
       withdrawal_modal: false
    };
  },
  methods: {
    async getWithdrawal() {
      try {
        let res = await this.$axios.get(
          "/merchants/admin/withdrawal-requests/" + this.id
        );
        console.log(res.data);
        this.withdrawal = res.data;
      this.meta = res.data
      } catch (error) {
        console.log(error);
      }
    },
    approveWithdrawal() {
      this.withdrawal_modal = true
      this.action = "Approve"
    },
    declineWithdrawal() {
      this.withdrawal_modal = true
      this.action = "Decline"
    },
    closeModal(){
      this.withdrawal_modal = false;
    }
  },
  async created() {
    this.getWithdrawal();
  },
};
</script>