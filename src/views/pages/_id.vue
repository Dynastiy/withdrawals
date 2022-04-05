<template>
  <div>
    <div class="container">
      <div class="row">
        <h4
          class="my-4 d-flex align-items-center"
          v-if="withdrawal.status === 'pending'"
        >
          <span
            class="material-icons text-warning mr-2"
            style="font-size: 36px"
          >
            pending
          </span>
          Transaction is Pending
        </h4>
        <h4
          class="my-4 d-flex align-items-center"
          v-if="withdrawal.status === 'approved'"
        >
          <span class="material-icons text-success mr-2" style="font-size: 36px">
            check_circle
          </span>
          Transaction is Approved
        </h4>
        <h4
          class="my-4 d-flex align-items-center"
          v-if="withdrawal.status === 'declined'"
        >
          <span class="material-icons text-danger mr-2" style="font-size: 36px">
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
              <h6 class="text-dark col-md">&#8358; {{ withdrawal.amount }}</h6>
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
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <h6 class="subb">Amount</h6>
                    <p class="subb text-muted text-right">
                      &#8358; {{ withdrawal.amount }}
                    </p>
                  </div>
                  <hr />
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <h6 class="subb">Bank Name</h6>
                    <p class="subb text-muted text-right">
                      {{ withdrawal.bank_name }}
                    </p>
                  </div>
                  <hr />
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <h6 class="subb">Bank Account Name</h6>
                    <p class="subb text-muted">
                      {{ withdrawal.bank_account_name }}
                    </p>
                  </div>
                  <hr />
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <h6 class="subb">Bank Account Number</h6>
                    <p class="subb text-muted text-right text-uppercase">
                      {{ withdrawal.bank_account_number }}
                    </p>
                  </div>
                  <hr />
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <h6 class="subb">Status</h6>
                    <p class="subb text-muted text-right">
                      <span :class="[withdrawal.status]">{{
                        withdrawal.status
                      }}</span>
                    </p>
                  </div>
                  <hr />
                   <div
                   v-if="withdrawal.status === 'declined' "
                    class="d-flex align-items-center justify-content-between"
                  >
                    <h6 class="subb">Note</h6>
                    <p class="subb text-muted text-right">
                      {{ withdrawal.note }}
                    </p>
                  </div>
                  <hr />
                  <!-- <div class="d-flex justify-content-end" style="gap: 8px" v-if="withdrawal.status == 'pending' "> -->
                    
                  <div class="d-flex justify-content-end" style="gap: 8px" >
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

    <div class="withdrawal-modal-mask" v-show="withdrawal_modal">
      <div>
        <div class="withdrawal--modal">
          <div class="text-right mb-2">
            <span
              class="material-icons text-danger font-weight-bold"
              @click="closeBtn"
            >
              close
            </span>
          </div>
          <h3 class="font-weight-bold">{{ action }} Withdrawal Request</h3>
          <div>
            <div class="d-flex mb-1" style="gap: 5px">
              <h6 class="font-weight-bold">Merchant:</h6>
              <p v-if="withdrawal.merchant">
                {{ withdrawal.merchant.business_name }}
              </p>
            </div>
            <div class="d-flex" style="gap: 5px">
              <h6 class="font-weight-bold">Amount:</h6>
              <p>&#8358; {{ withdrawal.amount }}</p>
            </div>
          </div>

          <div class="center" v-show="action === 'Approve'">
            <div class="form-input">
              <div class="preview">
                <img id="file-ip-1-preview" />
              </div>
              <label for="file-ip-1">Upload Proof</label>
              <input
                type="file"
                id="file-ip-1"
                accept="image/*"
                @change="showPreview($event)"
              />
            </div>
          </div>

          <div v-show="action === 'Decline'">
            <label for="">Enter reason for Decline</label>
            <input type="text" name="" id="" v-model="note" />
          </div>

          <div>
            <button class="px--button mt-3 w-100" @click="complete">
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      withdrawal: {},
      id: this.$route.params.id,
      action: "",
      withdrawal_modal: false,
      image: null,
      note: '',
    };
  },
  methods: {
    showPreview($event) {
      var input = event.target;
      this.image = input.files[0];
      console.log(this.image);
      if ($event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
      }
    },
    async getWithdrawal() {
      try {
        let res = await this.$axios.get(
          "/merchants/admin/withdrawal-requests/" + this.id
        );
        console.log(res.data);
        this.withdrawal = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    approveWithdrawal() {
      this.withdrawal_modal = true;
      this.action = "Approve";
    },
    declineWithdrawal() {
      this.withdrawal_modal = true;
      this.action = "Decline";
    },
    closeBtn() {
      this.withdrawal_modal = false;
    },
    async complete() {
      if (this.action === "Decline") {
        try {
          const payload = {
            note: this.note,
            status: 'declined'
          }
          let res = await this.$axios.patch(
            "/merchants/admin/withdrawal-requests/" + this.id,
            payload
          );
          console.log(payload);
          console.log(res.data);
          this.getWithdrawal();
          this.withdrawal_modal = false
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const payload = {
            status: 'approved',
             payment_proof: this.image,
            
          }
          let res = await this.$axios.patch(
            "/merchants/admin/withdrawal-requests/" + this.id,
            payload
          );
          console.log(res.data);
          console.log(payload);
          this.getWithdrawal();
          this.withdrawal_modal = false
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  async created() {
    this.getWithdrawal();
  },
};
</script>