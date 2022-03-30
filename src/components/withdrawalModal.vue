<template>
  <div>
    <div class="withdrawal-modal-mask">
      <div>
        <div class="withdrawal--modal">
            <div class="text-right mb-2">
                <span class="material-icons text-danger font-weight-bold" @click="closeBtn">
                    close
                </span>
            </div>
          <h3 class="font-weight-bold">{{ action }} Withdrawal Request</h3>
          <div>
            <div class="d-flex mb-1" style="gap: 5px">
              <h6 class="font-weight-bold">Merchant:</h6>
              <p v-if="meta.merchant"> {{ meta.merchant.business_name }} </p>
            </div>
            <div class="d-flex" style="gap: 5px">
              <h6 class="font-weight-bold">Amount:</h6>
              <p> {{ meta.amount }}{{ meta.currency }} </p>
            </div>
          </div>

          <div class="center">
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

          <div>
            <label for="">Enter reason for Decline</label>
            <input type="text" name="" id="" />
          </div>

            <div>
                <button class="px--button mt-3 w-100">
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
    props:['meta', 'action'],
  data() {
    return {
        image: null
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
    closeBtn() {
      this.$emit('close')
    },
  },
};
</script>