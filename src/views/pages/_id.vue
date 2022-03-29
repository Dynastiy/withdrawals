<template>
  <div>
    <div class="row">
      <h4  class=" mb-3">
        <i class="fa fa-times text-danger mr-3" aria-hidden="true"></i>
        Transaction is Pending
      </h4>
      <h4 class=" mb-3">
        <i class="fa fa-exclamation text-warning mr-3" aria-hidden="true"></i>
        Transaction is Approved
      </h4>
      <h4 class=" mb-3">
        <i class="fa fa-check text-success mr-3" aria-hidden="true"></i>
        Transaction is Declined
      </h4>
      <div class="col-lg-12">
        <div class="card">
          <div class="row top align-items-center justify-content-around">
            <div class="d-flex mb-3 align-items-center">
              
              <div>
                <h3 class="text-dark m-0">John Doe</h3>
                <p  class="text-muted">
                  ER234431
                </p>
              </div>
            </div>
            <!-- <h6 class="text-muted text-uppercase">
              RE1344523
            </h6> -->
            <h6 class="text-dark" >
              0.003szc
            </h6>
           
          </div>
          <div class="card-body">
            <div class="row justify-content-center align-items-center" style="gap: 30px">
              <!-- transaction Icons  -->
              <div>
              <!-- <div
                class="col-lg-4 col-md-4 col-sm-4 text-center mb-3"
              >
                <span class="material-icons iconns">
                pending
                </span>
              </div>
              <div
                
                class="col-lg-4 col-md-4 col-sm-4 text-center mb-3"
              >
                <span class="material-icons iconns2">
                cancel
                </span>
              </div> -->
              <div
                
                class="col-lg-4 col-md-4 col-sm-4 text-center mb-3"
              >
                <span class="material-icons iconns3">
                check_circle
                </span>
              </div>
                </div>
              <!-- Transaction Details  -->
              <div class="col-lg-8 col-md-4 col-sm-4">
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="subb">Transaction type</h6>
                  <p class="subb text-muted">
                    Transaction Type
                  </p>
                </div>
                <hr />
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="subb">Transaction ID</h6>
                  <p class="subb text-muted text-right text-uppercase">
                    RE1344523
                  </p>
                </div>
                <hr />
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="subb">Amount</h6>
                  <p class="subb text-muted text-right">
                    0.003szc
                  </p>
                </div>
                <hr />
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="subb">Status</h6>
                  <p class="subb text-muted text-right">
                    Pending
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>