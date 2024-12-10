<script setup></script>

<template>
  <main class="my-4">
    <div class="container">
      <div class="card p-3 my-4">
        <div class="row g-3">
          <div class="col-md-3">
            <div class="input-group">
              <span class="input-group-text">Phòng trống</span>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-3">
            <div class="input-group">
              <span class="input-group-text">Đã cho thuê</span>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-3">
            <div class="input-group">
              <span class="input-group-text">Chưa thu phí</span>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-3">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Tìm kiếm" />
              <button class="btn btn-outline-success" type="submit">Tìm</button>
            </form>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Phòng 1 -->
        <div class="col-md-3">
          <div class="card">
            <h5 class="card-header">Phòng T_01</h5>
            <h6 class="ms-1 mt-1">Trạng thái:</h6>
            <h6 class="ms-1 mt-1">Loại phòng:</h6>
            <img src="../../assets/image/LogoNVK.jpg" class="card-img-top" alt="Phòng 1" />
            <div class="card-body">
              <p class="card-text">Nguyễn Vĩ Khiêm</p>
              <p class="card-text">Giá: 1.500.000 VND</p>
              <div class="d-flex justify-content-between flex-wrap gap-2">
                <a href="/adduser" class="btn btn-primary">Thêm khách</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Phòng 2 -->
        <div class="col-md-3">
          <div class="card">
            <h5 class="card-header">Phòng T_02</h5>
            <h6 class="ms-1 mt-1">Trạng thái:</h6>
            <h6 class="ms-1 mt-1">Loại phòng:</h6>
            <img src="../../assets/image/LogoNVK.jpg" class="card-img-top" alt="Phòng 2" />
            <div class="card-body">
              <p class="card-text">Nguyễn Vĩ Khiêm</p>
              <p class="card-text">Giá: 1.500.000 VND</p>
              <div class="d-flex justify-content-between flex-wrap gap-2">
                <a href="#" class="btn btn-info">Xem</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Phòng 3 -->
        <div class="col-md-3">
          <div class="card">
            <h5 class="card-header">Phòng T_03</h5>
            <h6 class="ms-1 mt-1">Trạng thái:</h6>
            <h6 class="ms-1 mt-1">Loại phòng:</h6>
            <img src="../../assets/image/LogoNVK.jpg" class="card-img-top" alt="Phòng 3" />
            <div class="card-body">
              <p class="card-text">Nguyễn Vĩ Khiêm</p>
              <p class="card-text">Giá: 1.500.000 VND</p>
              <div class="d-flex justify-content-between flex-wrap gap-2">
                <a href="#" class="btn btn-primary">Thêm khách</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Phòng 4 -->
        <div class="col-md-3">
          <div class="card">
            <h5 class="card-header">Phòng T_04</h5>
            <h6 class="ms-1 mt-1">Trạng thái:</h6>
            <h6 class="ms-1 mt-1">Loại phòng:</h6>
            <img src="../../assets/image/LogoNVK.jpg" class="card-img-top" alt="Phòng 4" />
            <div class="card-body">
              <p class="card-text">Nguyễn Vĩ Khiêm</p>
              <p class="card-text">Giá: 1.500.000 VND</p>
              <div class="d-flex justify-content-between flex-wrap gap-2">
                <a href="#" class="btn btn-info">Xem</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
