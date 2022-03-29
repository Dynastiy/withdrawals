<template>
  <div>
    <h1>Declined Withdrawal requests</h1>
    <table class="rwd-table">
      <tr>
        <th>Reference</th>
        <th>Full Name</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
      
      <tr>
        <td data-th="Reference">FE13423528</td>
        <td data-th="Full Name">John Doe</td>
        <td data-th="Amount">0.002szc</td>
        <td data-th="Date">27th March 2022</td>
        <td data-th="Status"><span class="declined">Declined</span></td>
        <td data-th="Actions"> <px-button><span>View More</span></px-button> </td>
      </tr>
     
      <tr>
        <td data-th="Reference">FE13423528</td>
        <td data-th="Full Name">John Doe</td>
        <td data-th="Amount">0.002szc</td>
        <td data-th="Date">27th March 2022</td>
        <td data-th="Status"><span class="declined">Declined</span></td>
        <td data-th="Actions"> <px-button><span>View More</span></px-button> </td>
      </tr>
    </table>
  </div>
</template>

<script>
import PxButton from '@/components/pxButton.vue'
export default {
    components: {
        PxButton
    }
}
</script>