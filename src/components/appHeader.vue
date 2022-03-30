<template>
  <div>
    <section class="banner">
      

      <div class="">
         <router-link to="/"> <img src="@/assets/logo.svg" width="30" alt=""></router-link>
      </div>
<label for="menu-control" class="hamburger ml-auto" >
        <span class="material-icons" id="tog" style="font-size: 30px">
            menu
        </span>
      </label>
      <aside class="sidebar" id="side-bar">
        <nav class="sidebar__menu">
            <a href="javascript:void(0)" class="d-block text-right">
                <span class="material-icons" id="close-menu">
                close
                </span>
            </a>
          <router-link to="/">All Transactions</router-link>
          <router-link to="/pending-transactions">Pending Transactions</router-link>
          <router-link to="approved-transactions">Approved Transactions</router-link>
          <router-link to="declined-transactions">Declined Transactions</router-link>
          <a href="javascript:void(0)" @click="logout">Logout</a>
        </nav>

       <!-- <span class="material-icons">
        close
        </span> -->
    </aside>
    </section>
  </div>
</template>


<script>
import Swal from 'sweetalert2'
export default {
    methods:{
        async logout() {
         
          let res = await this.$axios.post('auth/token/logout')
       this.$store.dispatch('logout');
      Swal.fire(
          'Bye!',
          'Logged out!',
          'warning'
        )
      this.$router.push('/sign-in');
      return res
    }
    },
    mounted(){
        const toggller = document.getElementById("tog");
        const sidee = document.getElementById('side-bar');
        const closeMenu = document.getElementById('close-menu');
        const bodyEl = document.getElementsByTagName('body')[0]
        document.onclick = function(e) {
          if(e.target.id !== "tog" && e.target.id !== "side-bar"){
            sidee.classList.remove('active');
            bodyEl.classList.remove("active");
          }
        }
        toggller.onclick = function(){
        sidee.classList.toggle('active');
        bodyEl.classList.toggle("active")
        }
        closeMenu.onclick = function(){
        sidee.classList.remove('active');
        bodyEl.classList.remove("active")
        }
    }
}
</script>

<style scoped>
.sidebar.active {
    left: 0;
}
</style>